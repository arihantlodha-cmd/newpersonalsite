"use client";

export default function SlideCover() {
  return (
    <div className="slide font-sans" style={{ justifyContent: "space-between" }}>
      {/* Top row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <span className="slide-label font-mono">01 / 06</span>
        <span className="slide-label font-mono">TOKYO, JAPAN</span>
      </div>

      {/* Center: big name */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div className="fade-up delay-1">
          <h1
            style={{
              fontSize: "clamp(72px, 12vw, 148px)",
              fontWeight: "800",
              lineHeight: "0.92",
              letterSpacing: "-0.03em",
              color: "#fff",
              marginBottom: "4px",
            }}
          >
            ARIHANT
          </h1>
          <h1
            style={{
              fontSize: "clamp(72px, 12vw, 148px)",
              fontWeight: "800",
              lineHeight: "0.92",
              letterSpacing: "-0.03em",
              color: "transparent",
              WebkitTextStroke: "2px #fff",
              marginBottom: "40px",
            }}
          >
            LODHA.
          </h1>
        </div>

        <div className="fade-up delay-2" style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <span className="accent-line" />
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "13px",
              color: "#555",
              letterSpacing: "0.08em",
            }}
          >
            16 &middot; builder &middot; future dropout
          </span>
        </div>

        <div
          className="fade-up delay-3"
          style={{
            marginTop: "16px",
            marginLeft: "72px",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px",
            color: "#333",
            letterSpacing: "0.1em",
          }}
        >
          prev @ rove (yc w24) &nbsp;&middot;&nbsp; economics researcher &nbsp;&middot;&nbsp; building in stealth
        </div>
      </div>

      {/* Bottom row */}
      <div
        className="fade-up delay-4"
        style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "var(--green)",
              boxShadow: "0 0 8px var(--green)",
              display: "inline-block",
              animation: "blink 2s ease-in-out infinite",
            }}
          />
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "11px",
              color: "#333",
              letterSpacing: "0.1em",
            }}
          >
            OPEN TO COFOUNDERS &amp; INTERESTING PROJECTS
          </span>
        </div>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#222" }}>
          scroll ↓
        </span>
      </div>
    </div>
  );
}
