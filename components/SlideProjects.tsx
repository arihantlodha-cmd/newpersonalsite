"use client";

const projects = [
  {
    num: "01",
    name: "ML Stock Price Predictor",
    desc: "Predicted next-day Japanese equity prices with 95% test accuracy. Overcame catastrophic overfitting (Random Forest: -97% → Linear Regression: 95%).",
    metrics: [
      { label: "TEST ACCURACY", value: "95%" },
      { label: "MARKET",        value: "TSE / NIKKEI" },
      { label: "STACK",         value: "Python · scikit-learn · pandas" },
    ],
    href: "https://github.com/arihantlodha-cmd/ML-Stock-Price-Prediction",
    status: "ACTIVE",
  },
  {
    num: "02",
    name: "Algo Trading Backtester",
    desc: "Backtesting system for MA crossover strategies on the Tokyo Stock Exchange. Processes historical Nikkei data with full performance analytics.",
    metrics: [
      { label: "STRATEGY",  value: "MA Crossover" },
      { label: "EXCHANGE",  value: "TSE / Nikkei" },
      { label: "STACK",     value: "Python · pandas · NumPy" },
    ],
    href: "https://github.com/arihantlodha-cmd/Japanese-Stock-Moving-Average-Strategy",
    status: "COMPLETE",
  },
  {
    num: "03",
    name: "QuantLearn",
    desc: "EdTech platform teaching kids financial modeling and quantitative analysis. Currently in production.",
    metrics: [
      { label: "STATUS",   value: "In Production" },
      { label: "AUDIENCE", value: "Students" },
      { label: "ROLE",     value: "Founder" },
    ],
    href: null,
    status: "LIVE",
  },
];

const statusColor: Record<string, string> = {
  ACTIVE: "var(--green)",
  COMPLETE: "var(--cyan)",
  LIVE: "var(--orange)",
};

export default function SlideProjects() {
  return (
    <div className="slide font-sans" style={{ justifyContent: "space-between" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span className="slide-label font-mono">03 / 06</span>
        <span className="slide-label font-mono">PROJECTS</span>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            borderTop: "1px solid #151515",
          }}
        >
          {projects.map((p, i) => (
            <div
              key={i}
              style={{
                padding: "32px 0",
                paddingRight: i < 2 ? "48px" : 0,
                paddingLeft: i > 0 ? "48px" : 0,
                borderRight: i < 2 ? "1px solid #151515" : "none",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {/* Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "10px",
                    color: "#222",
                    letterSpacing: "0.1em",
                  }}
                >
                  {p.num}
                </span>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "9px",
                    color: statusColor[p.status],
                    letterSpacing: "0.12em",
                  }}
                >
                  {p.status}
                </span>
              </div>

              {/* Title */}
              <div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#f0f0f0",
                    lineHeight: "1.2",
                    marginBottom: "12px",
                  }}
                >
                  {p.name}
                </h3>
                <p style={{ fontSize: "13px", color: "#555", lineHeight: "1.7" }}>{p.desc}</p>
              </div>

              {/* Metrics */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {p.metrics.map((m) => (
                  <div
                    key={m.label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      borderBottom: "1px solid #111",
                      paddingBottom: "6px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "9px",
                        color: "#333",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {m.label}
                    </span>
                    <span style={{ fontSize: "11px", color: "#888" }}>{m.value}</span>
                  </div>
                ))}
              </div>

              {/* Link */}
              {p.href ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-hover font-mono"
                  style={{ fontSize: "10px", letterSpacing: "0.08em", marginTop: "auto" }}
                >
                  → VIEW ON GITHUB
                </a>
              ) : (
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "10px",
                    color: "#1f1f1f",
                    letterSpacing: "0.08em",
                    marginTop: "auto",
                  }}
                >
                  PRIVATE / STEALTH
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <span className="slide-label font-mono" style={{ alignSelf: "flex-end" }}>scroll ↓</span>
    </div>
  );
}
