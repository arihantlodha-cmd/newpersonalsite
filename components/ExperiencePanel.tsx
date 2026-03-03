"use client";

const experience = [
  {
    date: "FEB 2026 – NOW",
    role: "FOUNDER",
    company: "STEALTH AI STARTUP",
    location: "TOKYO, JP",
    note: "cool things soon, dm for info",
    active: true,
  },
  {
    date: "JAN 2026 – NOW",
    role: "PORTFOLIO RESEARCH ANALYST",
    company: "KUTIC",
    location: "TOKYO, JP · HYBRID",
    note: "incoming, starting april",
    active: true,
  },
  {
    date: "JAN 2026 – NOW",
    role: "FOUNDER",
    company: "QUANTLEARN",
    location: "TOKYO, JP",
    note: "teaching kids financial modeling, in prod",
    active: true,
  },
  {
    date: "JUL 2025 – AUG 2025",
    role: "TECHNICAL INTERN",
    company: "ROVE (YC W24)",
    location: "REMOTE",
    note: "contributed to backend systems, customer acquisition",
    active: false,
  },
];

const education = [
  {
    date: "2016 – 2028",
    institution: "ST. MARY'S INTERNATIONAL SCHOOL",
    program: "IB DIPLOMA PROGRAMME",
    note: "3.96/4.00 GPA · hoping to drop out",
  },
  {
    date: "JUL – AUG 2025",
    institution: "HARVARD SEAS",
    program: "SUMMER PROGRAM · ENTREPRENEURSHIP",
    note: "Harvard Ventures-TECH Winter Fellowship · <1% acceptance (20/5000+)",
  },
];

export default function ExperiencePanel() {
  return (
    <section
      id="experience"
      style={{
        borderBottom: "1px solid #1c1c1c",
        display: "grid",
        gridTemplateColumns: "3fr 2fr",
      }}
    >
      {/* Experience */}
      <div style={{ borderRight: "1px solid #1c1c1c" }}>
        <div className="panel-header">
          <span>WORK HISTORY</span>
          <span style={{ fontWeight: 400 }}>4 ENTRIES</span>
        </div>

        {/* Table header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "120px 1fr 100px",
            padding: "8px 16px",
            borderBottom: "1px solid #1c1c1c",
            background: "#0a0a0a",
          }}
        >
          {["DATE", "ROLE / COMPANY", "LOC"].map((h) => (
            <span key={h} style={{ color: "#333", fontSize: "9px", letterSpacing: "0.15em" }}>
              {h}
            </span>
          ))}
        </div>

        {experience.map((e, i) => (
          <div
            key={i}
            className="row-hover"
            style={{
              display: "grid",
              gridTemplateColumns: "120px 1fr 100px",
              padding: "14px 16px",
              borderBottom: "1px solid #111",
              alignItems: "start",
              gap: "8px",
            }}
          >
            <div style={{ color: "#555", fontSize: "11px" }}>{e.date}</div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "3px" }}>
                {e.active && (
                  <span
                    style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      background: "var(--green)",
                      boxShadow: "0 0 4px var(--green)",
                      display: "inline-block",
                      flexShrink: 0,
                    }}
                  />
                )}
                <span style={{ color: "#d8d8d8", fontWeight: "500", fontSize: "14px" }}>{e.role}</span>
              </div>
              <div style={{ color: "var(--orange)", fontSize: "13px", marginBottom: "4px" }}>
                {e.company}
              </div>
              <div style={{ color: "#666", fontSize: "12px", fontStyle: "italic" }}>{e.note}</div>
            </div>
            <div style={{ color: "#555", fontSize: "11px" }}>{e.location}</div>
          </div>
        ))}
      </div>

      {/* Education */}
      <div>
        <div className="panel-header">
          <span>EDUCATION</span>
          <span style={{ fontWeight: 400 }}>2 ENTRIES</span>
        </div>

        {education.map((e, i) => (
          <div
            key={i}
            className="row-hover"
            style={{
              padding: "20px 20px",
              borderBottom: "1px solid #111",
            }}
          >
            <div style={{ color: "#444", fontSize: "11px", letterSpacing: "0.1em", marginBottom: "6px" }}>
              {e.date}
            </div>
            <div style={{ color: "var(--orange)", fontSize: "14px", fontWeight: "600", marginBottom: "4px" }}>
              {e.institution}
            </div>
            <div style={{ color: "#888", fontSize: "13px", marginBottom: "8px" }}>{e.program}</div>
            <div
              style={{
                color: "#666",
                fontSize: "12px",
                fontStyle: "italic",
                borderLeft: "2px solid #1c1c1c",
                paddingLeft: "8px",
              }}
            >
              {e.note}
            </div>
          </div>
        ))}

        {/* Skills block */}
        <div style={{ padding: "20px" }}>
          <div style={{ color: "#333", fontSize: "9px", letterSpacing: "0.15em", marginBottom: "14px" }}>
            CORE SKILLS ─────────────────────
          </div>
          {[
            { name: "PYTHON / ML", pct: 90 },
            { name: "QUANT FINANCE", pct: 80 },
            { name: "DATA ANALYSIS", pct: 85 },
            { name: "BACKEND DEV", pct: 65 },
            { name: "USING CLAUDE", pct: 99 },
          ].map((s) => (
            <div key={s.name} style={{ marginBottom: "10px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "4px",
                  color: "#666",
                  fontSize: "12px",
                }}
              >
                <span>{s.name}</span>
                <span style={{ color: "var(--orange)" }}>{s.pct}%</span>
              </div>
              <div
                style={{
                  height: "3px",
                  background: "#111",
                  border: "1px solid #1c1c1c",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${s.pct}%`,
                    background: s.pct >= 95 ? "var(--orange)" : "rgba(255,102,0,0.6)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
