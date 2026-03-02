import { NextResponse } from "next/server";

const YAHOO_SYMBOLS = "^N225,^GSPC,^TPX,USDJPY=X,7203.T,6758.T,GC=F,CL=F";

export async function GET() {
  try {
    const [yahooRes, cgRes] = await Promise.all([
      fetch(
        `https://query2.finance.yahoo.com/v7/finance/quote?symbols=${YAHOO_SYMBOLS}`,
        {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
            Accept: "application/json",
          },
          next: { revalidate: 30 },
        }
      ),
      fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true",
        { next: { revalidate: 30 } }
      ),
    ]);

    const [yahooData, cgData] = await Promise.all([
      yahooRes.json(),
      cgRes.json(),
    ]);

    const quotes: Record<string, { price: number; change: number }> = {};

    for (const q of yahooData?.quoteResponse?.result ?? []) {
      quotes[q.symbol] = {
        price: q.regularMarketPrice ?? 0,
        change: q.regularMarketChangePercent ?? 0,
      };
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
