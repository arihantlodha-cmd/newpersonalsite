"use client";

import { useEffect, useState } from "react";

const stats = [
  { label: "AGE",        value: "16" },
  { label: "LOCATION",   value: "TOKYO, JP" },
  { label: "STATUS",     value: "STEALTH", highlight: true },
  { label: "PREV",       value: "ROVE (YC W24)" },
  { label: "CONNECTS",   value: "500+" },
  { label: "TRAJECTORY", value: "FUTURE DROPOUT" },
];

const tagline = "16 | building in stealth | prev @ rove (yc w24)";

export default function HeroPanel() {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(tagline.slice(0, i));
      if (i >= tagline.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 35);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="overview"
      style={{
        borderBottom: "1px solid #1c1c1c",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
      }}
    >
      {/* Left: Identity */}
      <div style={{ borderRight: "1px solid #1c1c1c" }}>
        <div className="panel-header">
          <span>SUBJECT OVERVIEW</span>
          <span style={{ fontWeight: 400, letterSpacing: 0 }}>01 MAR 2026 · TOKYO</span>
        </div>
        <div style={{ padding: "32px 28px" }}>
          <div style={{ marginBottom: "8px" }}>
            <span style={{ color: "var(--orange)", fontSize: "9px", letterSpacing: "0.2em" }}>
              NAME:
            </span>
          </div>
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "700",
              color: "#fff",
              letterSpacing: "0.04em",
              lineHeight: 1.1,
              marginBottom: "24px",
            }}
          >
            ARIHANT
            <br />
            LODHA
          </h1>

          <div
            style={{
              color: "#888",
              fontSize: "12px",
              marginBottom: "32px",
              minHeight: "20px",
            }}
          >
            <span>{displayed}</span>
            {!done && (
              <span
                style={{
                  color: "var(--orange)",
                  animation: "blink 1s step-end infinite",
                  display: "inline-block",
                }}
              >
                █
              </span>
            )}
          </div>

          <div style={{ display: "flex", gap: "12px" }}>
            <a
              href="#contact"
              style={{
                background: "var(--orange)",
                color: "#000",
                fontSize: "11px",
                fontWeight: "700",
                padding: "8px 18px",
                letterSpacing: "0.1em",
                textDecoration: "none",
                display: "inline-block",
                transition: "opacity 0.15s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.8")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
            >
              CONTACT
            </a>
            <a
              href="https://github.com/arihantlodha-cmd"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                border: "1px solid #2a2a2a",
                color: "#888",
                fontSize: "11px",
                padding: "8px 18px",
                letterSpacing: "0.1em",
                textDecoration: "none",
                display: "inline-block",
                transition: "color 0.15s, border-color 0.15s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "#d8d8d8";
                el.style.borderColor = "#444";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "#888";
                el.style.borderColor = "#2a2a2a";
              }}
            >
              GITHUB
            </a>
          </div>
        </div>
      </div>

      {/* Right: Stats grid */}
      <div>
        <div className="panel-header">
          <span>DATA FIELDS</span>
          <span style={{ fontWeight: 400 }}>LIVE</span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            borderTop: "1px solid #1c1c1c",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="row-hover"
              style={{
                padding: "20px 24px",
                borderBottom: "1px solid #1c1c1c",
                borderRight: i % 2 === 0 ? "1px solid #1c1c1c" : "none",
              }}
            >
              <div style={{ color: "#444", fontSize: "9px", letterSpacing: "0.15em", marginBottom: "6px" }}>
                {s.label}
              </div>
              <div
                style={{
                  color: s.highlight ? "var(--orange)" : "#d8d8d8",
                  fontWeight: s.highlight ? "700" : "400",
                  fontSize: "13px",
                  letterSpacing: "0.05em",
                }}
              >
                {s.value}
              </div>
            </div>
          ))}
        </div>

        {/* Mini chart placeholder: "Trajectory" */}
        <div style={{ padding: "16px 24px", borderTop: "1px solid #1c1c1c" }}>
          <div style={{ color: "#333", fontSize: "9px", letterSpacing: "0.15em", marginBottom: "10px" }}>
            CAREER TRAJECTORY ─────────────────
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: "3px", height: "32px" }}>
            {[20, 28, 24, 40, 35, 55, 48, 70, 65, 90, 85, 100].map((h, i) => (
              <div
                key={i}
                style={{
                  width: "100%",
                  height: `${h}%`,
                  background: i === 11 ? "var(--orange)" : `rgba(255,102,0,${0.15 + i * 0.065})`,
                  transition: "height 0.3s",
                }}
              />
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "4px" }}>
            <span style={{ color: "#333", fontSize: "9px" }}>2023</span>
            <span style={{ color: "var(--green)", fontSize: "9px" }}>▲ NOW</span>
          </div>
        </div>
      </div>
    </section>
  );
}
