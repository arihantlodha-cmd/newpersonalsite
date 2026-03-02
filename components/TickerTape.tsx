"use client";

import { useEffect, useState } from "react";

type PriceMap = Record<string, { price: number; change: number }>;

const ITEMS = [
  { label: "NIKKEI",   symbol: "^N225",    prefix: "",  decimals: 2 },
  { label: "USD/JPY",  symbol: "USDJPY=X", prefix: "¥", decimals: 2 },
  { label: "BTC",      symbol: "BTC",      prefix: "$", decimals: 0 },
  { label: "S&P 500",  symbol: "^GSPC",    prefix: "",  decimals: 2 },
  { label: "TOPIX",    symbol: "^TPX",     prefix: "",  decimals: 2 },
  { label: "ETH",      symbol: "ETH",      prefix: "$", decimals: 0 },
  { label: "TOYOTA",   symbol: "7203.T",   prefix: "¥", decimals: 0 },
  { label: "SONY",     symbol: "6758.T",   prefix: "¥", decimals: 0 },
  { label: "GOLD",     symbol: "GC=F",     prefix: "$", decimals: 0 },
  { label: "OIL",      symbol: "CL=F",     prefix: "$", decimals: 2 },
  { label: "QUANTLEARN", symbol: null,     prefix: "",  decimals: 0 },
];

function fmt(price: number, prefix: string, decimals: number) {
  if (price === 0) return "—";
  return prefix + price.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

export default function TickerTape() {
  const [prices, setPrices] = useState<PriceMap>({});
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [live, setLive] = useState(false);

  async function fetchPrices() {
    try {
      const res = await fetch("/api/prices");
      if (!res.ok) throw new Error("bad response");
      const data: PriceMap = await res.json();
      if (!data.error) {
        setPrices(data);
        setLastUpdated(new Date());
        setLive(true);
      }
    } catch {
      // keep showing whatever we had
    }
  }

  useEffect(() => {
    fetchPrices();
    const id = setInterval(fetchPrices, 30_000);
    return () => clearInterval(id);
  }, []);

  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div
      style={{
        background: "#0d0d0d",
        borderBottom: "1px solid #1c1c1c",
        borderTop: "2px solid var(--orange)",
        height: "28px",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* LIVE badge */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "70px",
          background: "linear-gradient(to right, #0d0d0d 70%, transparent)",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          paddingLeft: "8px",
          gap: "6px",
        }}
      >
        {live && (
          <span
            style={{
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              background: "var(--green)",
              boxShadow: "0 0 4px var(--green)",
              display: "inline-block",
              flexShrink: 0,
              animation: "blink 2s ease-in-out infinite",
            }}
          />
        )}
        <span
          style={{
            color: live ? "#000" : "#555",
            background: live ? "var(--orange)" : "transparent",
            border: live ? "none" : "1px solid #222",
            fontSize: "9px",
            fontWeight: "700",
            padding: "1px 4px",
            letterSpacing: "0.1em",
            flexShrink: 0,
          }}
        >
          {live ? "LIVE" : "..."}
        </span>
        {lastUpdated && (
          <span style={{ color: "#222", fontSize: "9px", flexShrink: 0 }}>
            {lastUpdated.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}
          </span>
        )}
      </div>

      <div className="ticker-track" style={{ width: "100%", paddingLeft: "72px" }}>
        <div className="ticker-inner">
          {doubled.map((item, i) => {
            if (item.symbol === null) {
              // QuantLearn special item
              return (
                <span key={i} className="inline-flex items-center gap-2 px-4">
                  <span style={{ color: "#888", fontSize: "11px" }}>QUANTLEARN</span>
                  <span style={{ color: "var(--orange)", fontSize: "11px" }}>IN PROD</span>
                  <span style={{ color: "#222", marginLeft: "4px" }}>|</span>
                </span>
              );
            }

            const d = prices[item.symbol];
            const price = d ? fmt(d.price, item.prefix, item.decimals) : "—";
            const change = d ? d.change : 0;
            const up = change >= 0;
            const changeStr = d ? `${up ? "▲" : "▼"} ${Math.abs(change).toFixed(2)}%` : "";

            return (
              <span key={i} className="inline-flex items-center gap-2 px-4">
                <span style={{ color: "#555", fontSize: "11px" }}>{item.label}</span>
                <span style={{ color: d ? "#d8d8d8" : "#333" }}>{price}</span>
                {d && (
                  <span style={{ color: up ? "var(--green)" : "var(--red)", fontSize: "11px" }}>
                    {changeStr}
                  </span>
                )}
                <span style={{ color: "#222", marginLeft: "4px" }}>|</span>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
