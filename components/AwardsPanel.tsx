"use client";

const awards = [
  {
    rank: "#3",
    title: "VEX ROBOTICS NATIONALS",
    issuer: "VEX ROBOTICS",
    detail: "Ranked 3rd nationally at robotics — solo",
    type: "COMPETITION",
    color: "var(--orange)",
  },
  {
    rank: "TOP 5",
    title: "VOICE AI HACKATHON",
    issuer: "VOX TOKYO",
    detail: "Top 5 solo out of ~130 teams",
    type: "HACKATHON",
    color: "var(--cyan)",
  },
  {
    rank: "<1%",
    title: "HARVARD VENTURES-TECH FELLOWSHIP",
    issuer: "HARVARD SEAS",
    detail: "20 selected out of 5,000+ applicants — Winter 2025",
    type: "FELLOWSHIP",
    color: "var(--green)",
  },
];

const articles = [
  {
    title: "MACHINE LEARNING FOR STOCK PREDICTION",
    subtitle: "How 99% training accuracy → -97% test accuracy taught me more than success",
    tags: ["ML", "OVERFITTING", "QUANT"],
  },
  {
    title: "ALGORITHMIC TRADING AT 16",
    subtitle: "Backtesting MA crossover strategies on the Tokyo Stock Exchange",
    tags: ["ALGO TRADING", "PYTHON", "NIKKEI"],
  },
];

export default function AwardsPanel() {
  return (
    <section
      id="awards"
      style={{
        borderBottom: "1px solid #1c1c1c",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
      }}
    >
      {/* Awards */}
      <div style={{ borderRight: "1px solid #1c1c1c" }}>
        <div className="panel-header">
          <span>HONORS &amp; AWARDS</span>
          <span style={{ fontWeight: 400 }}>3 ENTRIES</span>
        </div>

        {awards.map((a, i) => (
          <div
            key={i}
            className="row-hover"
            style={{
              display: "flex",
              gap: "20px",
              padding: "20px 20px",
              borderBottom: "1px solid #111",
              alignItems: "flex-start",
            }}
          >
            {/* Rank badge */}
            <div
              style={{
                minWidth: "52px",
                textAlign: "center",
                borderTop: `2px solid ${a.color}`,
                paddingTop: "6px",
              }}
            >
              <div style={{ color: a.color, fontSize: "18px", fontWeight: "700" }}>{a.rank}</div>
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "4px",
                }}
              >
                <span
                  style={{
                    fontSize: "9px",
                    color: a.color,
                    border: `1px solid ${a.color}`,
                    padding: "1px 5px",
                    letterSpacing: "0.1em",
                  }}
                >
                  {a.type}
                </span>
              </div>
              <div style={{ color: "#d8d8d8", fontSize: "12px", fontWeight: "600", marginBottom: "4px" }}>
                {a.title}
              </div>
              <div style={{ color: "#444", fontSize: "10px", marginBottom: "4px" }}>
                ISSUED BY: {a.issuer}
              </div>
              <div style={{ color: "#555", fontSize: "10px", fontStyle: "italic" }}>{a.detail}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Published articles */}
      <div>
        <div className="panel-header">
          <span>PUBLISHED RESEARCH</span>
          <span style={{ fontWeight: 400 }}>2 ARTICLES</span>
        </div>

        {articles.map((a, i) => (
          <div
            key={i}
            className="row-hover"
            style={{
              padding: "24px 20px",
              borderBottom: "1px solid #111",
            }}
          >
            <div style={{ color: "#333", fontSize: "9px", marginBottom: "8px", letterSpacing: "0.1em" }}>
              ARTICLE {String(i + 1).padStart(2, "0")}
            </div>
            <div style={{ color: "#fff", fontSize: "13px", fontWeight: "600", marginBottom: "8px", lineHeight: "1.3" }}>
              {a.title}
            </div>
            <div style={{ color: "#555", fontSize: "11px", marginBottom: "14px", lineHeight: "1.6" }}>
              {a.subtitle}
            </div>
            <div style={{ display: "flex", gap: "4px" }}>
              {a.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: "9px",
                    padding: "2px 6px",
                    border: "1px solid #1c1c1c",
                    color: "#333",
                    letterSpacing: "0.08em",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* Interests section */}
        <div style={{ padding: "20px" }}>
          <div style={{ color: "#333", fontSize: "9px", letterSpacing: "0.15em", marginBottom: "14px" }}>
            INTERESTS ─────────────────────────
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {[
              "QUANT FINANCE",
              "MACHINE LEARNING",
              "STARTUPS",
              "ROBOTICS",
              "ECONOMICS",
              "EDTECH",
              "AI",
              "JAPAN",
            ].map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "10px",
                  padding: "4px 10px",
                  border: "1px solid #1c1c1c",
                  color: "#555",
                  letterSpacing: "0.08em",
                  cursor: "default",
                  transition: "color 0.15s, border-color 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLSpanElement).style.color = "var(--orange)";
                  (e.currentTarget as HTMLSpanElement).style.borderColor = "var(--orange)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLSpanElement).style.color = "#555";
                  (e.currentTarget as HTMLSpanElement).style.borderColor = "#1c1c1c";
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
