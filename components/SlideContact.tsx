"use client";

const links = [
  { label: "EMAIL",    value: "arihant97@smis.ac.jp",          href: "mailto:arihant97@smis.ac.jp" },
  { label: "GITHUB",   value: "github.com/arihantlodha-cmd",   href: "https://github.com/arihantlodha-cmd" },
  { label: "LINKEDIN", value: "linkedin.com/in/arihant-lodha", href: "https://linkedin.com/in/arihant-lodha-24a4593a0" },
];

export default function SlideContact() {
  return (
    <div className="slide font-sans" style={{ justifyContent: "space-between" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span className="slide-label font-mono">06 / 06</span>
        <span className="slide-label font-mono">CONTACT</span>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "64px" }}>
        {/* CTA headline */}
        <div>
          <h2
            style={{
              fontSize: "clamp(48px, 7vw, 96px)",
              fontWeight: "800",
              lineHeight: "0.92",
              letterSpacing: "-0.03em",
              color: "#fff",
              marginBottom: "8px",
            }}
          >
            LET&apos;S BUILD
          </h2>
          <h2
            style={{
              fontSize: "clamp(48px, 7vw, 96px)",
              fontWeight: "800",
              lineHeight: "0.92",
              letterSpacing: "-0.03em",
              color: "transparent",
              WebkitTextStroke: "2px #fff",
            }}
          >
            SOMETHING.
          </h2>
        </div>

        {/* Links */}
        <div style={{ borderTop: "1px solid #151515" }}>
          {links.map((l, i) => (
            <a
              key={i}
              href={l.href}
              target={l.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px 0",
                borderBottom: "1px solid #151515",
                textDecoration: "none",
                transition: "opacity 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.opacity = "0.6";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "10px",
                  color: "#333",
                  letterSpacing: "0.2em",
                }}
              >
                {l.label}
              </span>
              <span style={{ fontSize: "15px", color: "#888" }}>{l.value}</span>
              <span style={{ color: "#333", fontSize: "16px" }}>↗</span>
            </a>
          ))}
        </div>

        {/* Open to */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
            <span className="accent-line" />
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                color: "#333",
                letterSpacing: "0.2em",
              }}
            >
              OPEN TO
            </span>
          </div>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            {["Cofounders", "Teammates", "Internships", "Quant / ML projects", "Interesting conversations"].map(
              (item) => (
                <span key={item} style={{ fontSize: "14px", color: "#555" }}>
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "10px",
            color: "#222",
            letterSpacing: "0.1em",
          }}
        >
          ARIHANT LODHA · TOKYO · 2026 · BUILT WITH NEXT.JS + CLAUDE
        </span>
        <button
          onClick={() => {
            const deck = document.querySelector(".deck");
            if (deck) deck.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{
            background: "none",
            border: "none",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px",
            color: "#333",
            cursor: "pointer",
            letterSpacing: "0.1em",
          }}
        >
          ↑ back to top
        </button>
      </div>
    </div>
  );
}
