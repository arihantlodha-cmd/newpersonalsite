"use client";

import { useEffect, useState } from "react";

type PriceMap = Record<string, { price: number; change: number }>;

const ITEMS = [
  { label: "NIKKEI",  symbol: "^N225",    prefix: "",  dec: 2 },
  { label: "USD/JPY", symbol: "USDJPY=X", prefix: "¥", dec: 2 },
  { label: "BTC",     symbol: "BTC",      prefix: "$", dec: 0 },
  { label: "S&P500",  symbol: "^GSPC",    prefix: "",  dec: 2 },
  { label: "ETH",     symbol: "ETH",      prefix: "$", dec: 0 },
  { label: "GOLD",    symbol: "GC=F",     prefix: "$", dec: 0 },
];

function fmt(p: number, prefix: string, dec: number) {
  if (!p) return "—";
  return prefix + p.toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec });
}

export default function MiniTicker() {
  const [prices, setPrices] = useState<PriceMap>({});
  const [live, setLive] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/prices");
        const data = await res.json();
        if (!data.error) { setPrices(data); setLive(true); }
      } catch {}
    }
    load();
    const id = setInterval(load, 30_000);
    return () => clearInterval(id);
  }, []);

  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="ticker-bar font-mono">
      {/* LIVE badge */}
      <div style={{ paddingLeft: "10px", paddingRight: "16px", flexShrink: 0, display: "flex", alignItems: "center", gap: "6px" }}>
        {live && (
          <span style={{
            width: "4px", height: "4px", borderRadius: "50%",
            background: "var(--green)", boxShadow: "0 0 4px var(--green)",
            display: "inline-block", animation: "blink 2s ease-in-out infinite"
          }} />
        )}
        <span style={{ color: live ? "var(--orange)" : "#333", fontSize: "9px", letterSpacing: "0.1em", fontWeight: "700" }}>
          {live ? "LIVE" : "···"}
        </span>
      </div>

      <div style={{ overflow: "hidden", flex: 1 }}>
        <div className="ticker-inner">
          {doubled.map((item, i) => {
            const d = prices[item.symbol];
            const up = d ? d.change >= 0 : true;
            return (
              <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "0 16px" }}>
                <span style={{ color: "#333" }}>{item.label}</span>
                <span style={{ color: d ? "#888" : "#222" }}>{d ? fmt(d.price, item.prefix, item.dec) : "—"}</span>
                {d && (
                  <span style={{ color: up ? "var(--green)" : "var(--red)", fontSize: "9px" }}>
                    {up ? "▲" : "▼"} {Math.abs(d.change).toFixed(2)}%
                  </span>
                )}
                <span style={{ color: "#1a1a1a" }}>·</span>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
