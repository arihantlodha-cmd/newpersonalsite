import { NextResponse } from "next/server";

const YAHOO_SYMBOLS = ["^N225", "^GSPC", "^TPX", "USDJPY=X", "7203.T", "6758.T", "GC=F", "CL=F"];
const HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
  Accept: "application/json",
};

async function fetchSymbol(symbol: string): Promise<{ symbol: string; price: number; change: number } | null> {
  try {
    const encoded = encodeURIComponent(symbol);
    const res = await fetch(
      `https://query1.finance.yahoo.com/v8/finance/chart/${encoded}?range=1d&interval=1d`,
      { headers: HEADERS, next: { revalidate: 30 } }
    );
    const data = await res.json();
    const meta = data?.chart?.result?.[0]?.meta;
    if (!meta) return null;
    const price = meta.regularMarketPrice ?? 0;
    const prev = meta.chartPreviousClose ?? meta.previousClose ?? price;
    const change = prev ? ((price - prev) / prev) * 100 : 0;
    return { symbol, price, change };
  } catch {
    return null;
  }
}

export async function GET() {
  try {
    const [yahooResults, cgRes] = await Promise.all([
      Promise.all(YAHOO_SYMBOLS.map(fetchSymbol)),
      fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true",
        { next: { revalidate: 30 } }
      ),
    ]);

    const cgData = await cgRes.json();
    const quotes: Record<string, { price: number; change: number }> = {};

    for (const r of yahooResults) {
      if (r) quotes[r.symbol] = { price: r.price, change: r.change };
    }

    quotes["BTC"] = {
      price: cgData?.bitcoin?.usd ?? 0,
      change: cgData?.bitcoin?.usd_24h_change ?? 0,
    };
    quotes["ETH"] = {
      price: cgData?.ethereum?.usd ?? 0,
      change: cgData?.ethereum?.usd_24h_change ?? 0,
    };

    return NextResponse.json(quotes, {
      headers: { "Cache-Control": "s-maxage=30, stale-while-revalidate=60" },
    });
  } catch {
    return NextResponse.json({ error: "fetch failed" }, { status: 500 });
  }
}
