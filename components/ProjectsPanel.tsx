"use client";

const projects = [
  {
    id: "01",
    name: "ML STOCK PRICE PREDICTOR",
    date: "JAN 2026 – PRESENT",
    description:
      "Machine learning model predicting next-day stock prices for Japanese equities. Achieved 95% test accuracy with Linear Regression after overfitting failure with Random Forest (-97%).",
    tech: ["PYTHON", "SCIKIT-LEARN", "PANDAS", "YFINANCE"],
    metrics: [
      { label: "TEST ACCURACY", value: "95%", up: true },
      { label: "TRAINING ACC", value: "99%", up: true },
      { label: "BENCHMARK", value: "LINEAR REG", up: true },
    ],
    github: "https://github.com/arihantlodha-cmd/ML-Stock-Price-Prediction",
    status: "ACTIVE",
  },
  {
    id: "02",
    name: "ALGO TRADING BACKTESTER",
    date: "DEC 2025 – JAN 2026",
    description:
      "Python-based backtesting system evaluating moving average crossover strategies on Tokyo Stock Exchange securities. Processes historical Nikkei data with performance analytics.",
    tech: ["PYTHON", "PANDAS", "NUMPY", "MATPLOTLIB"],
    metrics: [
      { label: "MARKET", value: "TSE / NIKKEI", up: true },
      { label: "STRATEGY", value: "MA CROSSOVER", up: true },
      { label: "STATUS", value: "COMPLETE", up: true },
    ],
    github: "https://github.com/arihantlodha-cmd/Japanese-Stock-Moving-Average-Strategy",
    status: "COMPLETE",
  },
  {
    id: "03",
    name: "QUANTLEARN PLATFORM",
    date: "JAN 2026 – PRESENT",
    description:
      "EdTech platform teaching kids financial modeling and quantitative analysis. Currently in production — bringing quant finance education to younger generations.",
    tech: ["IN PROD", "EDTECH", "FINANCE", "EDUCATION"],
    metrics: [
      { label: "STATUS", value: "IN PROD", up: true },
      { label: "AUDIENCE", value: "STUDENTS", up: true },
      { label: "ROLE", value: "FOUNDER", up: true },
    ],
    github: null,
    status: "LIVE",
  },
];

const statusColors: Record<string, string> = {
  ACTIVE: "var(--green)",
  COMPLETE: "var(--cyan)",
  LIVE: "var(--orange)",
};

export default function ProjectsPanel() {
  return (
    <section id="projects" style={{ borderBottom: "1px solid #1c1c1c" }}>
      <div className="panel-header">
        <span>PROJECTS &amp; VENTURES</span>
        <span style={{ fontWeight: 400 }}>3 ENTRIES</span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {projects.map((p, i) => (
          <div
            key={i}
            style={{
              borderRight: i < projects.length - 1 ? "1px solid #1c1c1c" : "none",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Card header */}
            <div
              style={{
                padding: "12px 16px",
                borderBottom: "1px solid #1c1c1c",
                background: "#0a0a0a",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ color: "#333", fontSize: "11px" }}>{p.id}</span>
              <span
                style={{
                  fontSize: "9px",
                  fontWeight: "700",
                  color: statusColors[p.status] || "#888",
                  letterSpacing: "0.12em",
                  padding: "2px 6px",
                  border: `1px solid ${statusColors[p.status] || "#333"}`,
                }}
              >
                {p.status}
              </span>
            </div>

            {/* Content */}
            <div style={{ padding: "20px 16px", flex: 1 }}>
              <div style={{ color: "#555", fontSize: "11px", letterSpacing: "0.1em", marginBottom: "6px" }}>
                {p.date}
              </div>
              <h3
                style={{
                  color: "#fff",
                  fontSize: "15px",
                  fontWeight: "600",
                  marginBottom: "12px",
                  lineHeight: "1.3",
                  letterSpacing: "0.03em",
                }}
              >
                {p.name}
              </h3>
              <p style={{ color: "#777", fontSize: "13px", lineHeight: "1.7", marginBottom: "16px" }}>
                {p.description}
              </p>

              {/* Metrics */}
              <div
                style={{
                  borderTop: "1px solid #1c1c1c",
                  paddingTop: "12px",
                  marginBottom: "14px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                {p.metrics.map((m) => (
                  <div
                    key={m.label}
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
                  >
                    <span style={{ color: "#444", fontSize: "11px", letterSpacing: "0.1em" }}>{m.label}</span>
                    <span style={{ color: "var(--orange)", fontSize: "13px", fontWeight: "600" }}>
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginBottom: "16px" }}>
                {p.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: "11px",
                      padding: "2px 6px",
                      border: "1px solid #1c1c1c",
                      color: "#555",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div style={{ borderTop: "1px solid #1c1c1c", padding: "10px 16px" }}>
              {p.github ? (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#555",
                    fontSize: "12px",
                    textDecoration: "none",
                    letterSpacing: "0.08em",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--orange)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#555")}
                >
                  <span>→</span>
                  <span>VIEW ON GITHUB</span>
                </a>
              ) : (
                <span style={{ color: "#222", fontSize: "10px", letterSpacing: "0.08em" }}>
                  PRIVATE / STEALTH
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
