"use client";

const articles = [
  {
    num: "01",
    title: "How My ML Model Achieved 99% Training Accuracy and -97% Test Accuracy",
    subtitle: "A masterclass in overfitting — and what it taught me about the bias-variance tradeoff",
    learnings: [
      "Complex models memorize noise; simple models find signal",
      "Financial data punishes overfitting harder than other domains",
      "Linear Regression (95%) beat Random Forest (-97%)",
      "Failure teaches more than success",
    ],
    tags: ["MACHINE LEARNING", "QUANT FINANCE", "OVERFITTING", "PYTHON"],
  },
  {
    num: "02",
    title: "Building an Algorithmic Trading Strategy at 16",
    subtitle: "Backtesting MA crossover strategies on Japanese stocks — and what markets taught me",
    learnings: [
      "Simple strategies can work (sometimes)",
      "Backtesting ≠ real trading",
      "Markets are harder to beat than YouTube makes it seem",
      "Led me to explore machine learning next",
    ],
    tags: ["ALGO TRADING", "NIKKEI", "PYTHON", "BACKTESTING"],
  },
];

export default function SlideResearch() {
  return (
    <div className="slide font-sans" style={{ justifyContent: "space-between" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span className="slide-label font-mono">04 / 06</span>
        <span className="slide-label font-mono">RESEARCH</span>
      </div>

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0",
          alignItems: "center",
          borderTop: "1px solid #151515",
        }}
      >
        {articles.map((a, i) => (
          <div
            key={i}
            style={{
              padding: "40px 0",
              paddingRight: i === 0 ? "64px" : 0,
              paddingLeft: i === 1 ? "64px" : 0,
              borderRight: i === 0 ? "1px solid #151515" : "none",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "9px",
                  color: "#222",
                  letterSpacing: "0.15em",
                  display: "block",
                  marginBottom: "16px",
                }}
              >
                ARTICLE {a.num}
              </span>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#f0f0f0",
                  lineHeight: "1.3",
                  marginBottom: "12px",
                }}
              >
                {a.title}
              </h3>
              <p style={{ fontSize: "13px", color: "#555", lineHeight: "1.7" }}>{a.subtitle}</p>
            </div>

            {/* Key takeaways */}
            <div>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "9px",
                  color: "#333",
                  letterSpacing: "0.15em",
                  display: "block",
                  marginBottom: "12px",
                }}
              >
                KEY TAKEAWAYS
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {a.learnings.map((l, j) => (
                  <div key={j} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--orange)", fontSize: "12px", marginTop: "1px", flexShrink: 0 }}>
                      ◆
                    </span>
                    <span style={{ fontSize: "12px", color: "#666", lineHeight: "1.6" }}>{l}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto" }}>
              {a.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "9px",
                    padding: "3px 8px",
                    border: "1px solid #1a1a1a",
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
      </div>

      <span className="slide-label font-mono" style={{ alignSelf: "flex-end" }}>scroll ↓</span>
    </div>
  );
}
