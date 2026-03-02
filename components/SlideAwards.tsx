"use client";

const awards = [
  {
    rank: "TOP 3",
    title: "VEX Robotics Nationals",
    body: "Ranked 3rd nationally — solo competitor",
    issuer: "VEX ROBOTICS",
    color: "var(--orange)",
  },
  {
    rank: "TOP 5",
    title: "Voice AI Hackathon",
    body: "Top 5 out of ~130 teams, competing solo",
    issuer: "VOX TOKYO",
    color: "var(--cyan)",
  },
  {
    rank: "<1%",
    title: "Harvard Ventures-TECH Fellowship",
    body: "20 selected from 5,000+ applicants — Winter 2025",
    issuer: "HARVARD SEAS",
    color: "var(--green)",
  },
];

export default function SlideAwards() {
  return (
    <div className="slide font-sans" style={{ justifyContent: "space-between" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span className="slide-label font-mono">05 / 06</span>
        <span className="slide-label font-mono">AWARDS</span>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "56px" }}>
        {/* Award cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            borderTop: "1px solid #151515",
          }}
        >
          {awards.map((a, i) => (
            <div
              key={i}
              style={{
                padding: "36px 0",
                paddingRight: i < 2 ? "56px" : 0,
                paddingLeft: i > 0 ? "56px" : 0,
                borderRight: i < 2 ? "1px solid #151515" : "none",
              }}
            >
              {/* Rank */}
              <div
                style={{
                  fontSize: "clamp(40px, 5vw, 64px)",
                  fontWeight: "800",
                  color: a.color,
                  letterSpacing: "-0.02em",
                  lineHeight: "1",
                  marginBottom: "20px",
                }}
              >
                {a.rank}
              </div>
              <div style={{ fontSize: "18px", fontWeight: "600", color: "#f0f0f0", marginBottom: "8px" }}>
                {a.title}
              </div>
              <div style={{ fontSize: "13px", color: "#555", marginBottom: "20px", lineHeight: "1.6" }}>
                {a.body}
              </div>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "9px",
                  color: "#333",
                  letterSpacing: "0.15em",
                  borderTop: `1px solid ${a.color}`,
                  paddingTop: "8px",
                  display: "block",
                }}
              >
                {a.issuer}
              </span>
            </div>
          ))}
        </div>

        {/* Interests */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
            <span className="accent-line" />
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                color: "#333",
                letterSpacing: "0.2em",
              }}
            >
              INTERESTS
            </span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {[
              "Quantitative Finance",
              "Machine Learning",
              "Startups",
              "Robotics",
              "Economics",
              "EdTech",
              "AI",
              "Japan",
              "Algo Trading",
              "Open Source",
            ].map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "13px",
                  padding: "6px 14px",
                  border: "1px solid #1a1a1a",
                  color: "#444",
                  cursor: "default",
                  transition: "color 0.15s, border-color 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLSpanElement).style.color = "var(--orange)";
                  (e.currentTarget as HTMLSpanElement).style.borderColor = "var(--orange)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLSpanElement).style.color = "#444";
                  (e.currentTarget as HTMLSpanElement).style.borderColor = "#1a1a1a";
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <span className="slide-label font-mono" style={{ alignSelf: "flex-end" }}>scroll ↓</span>
    </div>
  );
}
