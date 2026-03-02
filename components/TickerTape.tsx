"use client";

const items = [
  { label: "NIKKEI", value: "38,247.81", change: "+0.74%", up: true },
  { label: "USD/JPY", value: "149.32", change: "+0.21%", up: true },
  { label: "BTC", value: "$94,120", change: "-0.83%", up: false },
  { label: "SP500", value: "5,891.34", change: "+0.42%", up: true },
  { label: "TOPIX", value: "2,689.14", change: "+0.51%", up: true },
  { label: "ETH", value: "$3,240", change: "+1.14%", up: true },
  { label: "TSE:7203", value: "2,981", change: "-0.12%", up: false },
  { label: "TSE:6758", value: "4,107", change: "+0.67%", up: true },
  { label: "USDJPY", value: "149.32", change: "+0.21%", up: true },
  { label: "GOLD", value: "$3,041", change: "+0.38%", up: true },
  { label: "OIL", value: "$71.42", change: "-0.55%", up: false },
  { label: "QUANTLEARN", value: "∞", change: "IN PROD", up: true },
];

function TickerItem({ label, value, change, up }: (typeof items)[0]) {
  return (
    <span className="inline-flex items-center gap-2 px-4">
      <span style={{ color: "#888", fontSize: "11px" }}>{label}</span>
      <span style={{ color: "#d8d8d8" }}>{value}</span>
      <span style={{ color: up ? "var(--green)" : "var(--red)", fontSize: "11px" }}>
        {up ? "▲" : "▼"} {change}
      </span>
      <span style={{ color: "#222", marginLeft: "4px" }}>|</span>
    </span>
  );
}

export default function TickerTape() {
  const doubled = [...items, ...items];

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
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "60px",
          background: "linear-gradient(to right, #0d0d0d, transparent)",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          paddingLeft: "8px",
        }}
      >
        <span
          style={{
            color: "#000",
            background: "var(--orange)",
            fontSize: "9px",
            fontWeight: "700",
            padding: "1px 4px",
            letterSpacing: "0.1em",
          }}
        >
          LIVE
        </span>
      </div>

      <div className="ticker-track" style={{ width: "100%", paddingLeft: "60px" }}>
        <div className="ticker-inner">
          {doubled.map((item, i) => (
            <TickerItem key={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
