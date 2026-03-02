"use client";

const roles = [
  {
    period: "FEB 2026 — NOW",
    title: "Building in Stealth",
    sub: "Founder · Tokyo, Japan",
    active: true,
  },
  {
    period: "JAN 2026 — NOW",
    title: "QuantLearn",
    sub: "Founder · EdTech, in prod",
    active: true,
  },
  {
    period: "JAN 2026 — NOW",
    title: "KUTIC",
    sub: "Portfolio Research Analyst · incoming Apr",
    active: true,
  },
  {
    period: "JUL — AUG 2025",
    title: "Rove (YC W24)",
    sub: "Technical Intern · Remote",
    active: false,
  },
];

const edu = [
  {
    period: "JUL — AUG 2025",
    title: "Harvard SEAS",
    sub: "Ventures-TECH Fellowship · <1% acceptance",
  },
  {
    period: "2016 — 2028",
    title: "St. Mary's International School",
    sub: "IB Diploma · 3.96 GPA · hoping to drop out",
  },
];

export default function SlideExperience() {
  return (
    <div className="slide font-sans" style={{ justifyContent: "space-between" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span className="slide-label font-mono">02 / 06</span>
        <span className="slide-label font-mono">EXPERIENCE</span>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "48px" }}>
        {/* Experience */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px" }}>
            <span className="accent-line" />
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                color: "#333",
                letterSpacing: "0.2em",
              }}
            >
              WORK
            </span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", borderTop: "1px solid #151515" }}>
            {roles.map((r, i) => (
              <div
                key={i}
                style={{
                  padding: "20px 0",
                  paddingRight: "40px",
                  borderBottom: "1px solid #151515",
                  borderRight: i % 2 === 0 ? "1px solid #151515" : "none",
                  paddingLeft: i % 2 === 1 ? "40px" : 0,
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                }}
              >
                {r.active && (
                  <div
                    style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      background: "var(--green)",
                      boxShadow: "0 0 5px var(--green)",
                      marginTop: "7px",
                      flexShrink: 0,
                    }}
                  />
                )}
                <div style={{ paddingLeft: r.active ? 0 : "21px" }}>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "9px",
                      color: "#333",
                      letterSpacing: "0.1em",
                      marginBottom: "6px",
                    }}
                  >
                    {r.period}
                  </div>
                  <div style={{ fontSize: "16px", fontWeight: "600", color: "#f0f0f0", marginBottom: "4px" }}>
                    {r.title}
                  </div>
                  <div style={{ fontSize: "13px", color: "#555" }}>{r.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px" }}>
            <span className="accent-line" />
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                color: "#333",
                letterSpacing: "0.2em",
              }}
            >
              EDUCATION
            </span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderTop: "1px solid #151515" }}>
            {edu.map((e, i) => (
              <div
                key={i}
                style={{
                  padding: "20px 0",
                  paddingRight: "40px",
                  borderBottom: "1px solid #151515",
                  borderRight: i === 0 ? "1px solid #151515" : "none",
                  paddingLeft: i === 1 ? "40px" : 0,
                }}
              >
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "9px",
                    color: "#333",
                    letterSpacing: "0.1em",
                    marginBottom: "6px",
                  }}
                >
                  {e.period}
                </div>
                <div style={{ fontSize: "16px", fontWeight: "600", color: "#f0f0f0", marginBottom: "4px" }}>
                  {e.title}
                </div>
                <div style={{ fontSize: "13px", color: "#555" }}>{e.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <span className="slide-label font-mono" style={{ alignSelf: "flex-end" }}>scroll ↓</span>
    </div>
  );
}
