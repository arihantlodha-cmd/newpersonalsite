"use client";

const keys = [
  { key: "F1", label: "OVERVIEW", href: "#overview" },
  { key: "F2", label: "EXPERIENCE", href: "#experience" },
  { key: "F3", label: "PROJECTS", href: "#projects" },
  { key: "F4", label: "AWARDS", href: "#awards" },
  { key: "F5", label: "CONTACT", href: "#contact" },
];

export default function NavBar() {
  return (
    <div
      style={{
        background: "#0d0d0d",
        borderBottom: "1px solid #1c1c1c",
        display: "flex",
        alignItems: "stretch",
        height: "36px",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      {/* Logo */}
      <div
        style={{
          background: "#111",
          borderRight: "1px solid #1c1c1c",
          display: "flex",
          alignItems: "center",
          padding: "0 16px",
          gap: "8px",
          minWidth: "180px",
        }}
      >
        <span style={{ color: "var(--orange)", fontSize: "11px", fontWeight: "700", letterSpacing: "0.15em" }}>
          ARIHANT
        </span>
        <span style={{ color: "#333" }}>|</span>
        <span style={{ color: "#555", fontSize: "10px" }}>TERMINAL</span>
      </div>

      {/* Function keys */}
      <div style={{ display: "flex", flex: 1 }}>
        {keys.map(({ key, label, href }) => (
          <a
            key={key}
            href={href}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "0 14px",
              borderRight: "1px solid #1c1c1c",
              textDecoration: "none",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,102,0,0.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
            }}
          >
            <span
              style={{
                background: "#1a1a1a",
                border: "1px solid #2a2a2a",
                color: "var(--orange)",
                fontSize: "9px",
                fontWeight: "700",
                padding: "1px 4px",
                letterSpacing: "0.05em",
              }}
            >
              {key}
            </span>
            <span style={{ color: "#999", fontSize: "10px", letterSpacing: "0.08em" }}>{label}</span>
          </a>
        ))}
      </div>

      {/* Status */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0 16px",
          gap: "8px",
          borderLeft: "1px solid #1c1c1c",
        }}
      >
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "var(--green)",
            boxShadow: "0 0 6px var(--green)",
            display: "inline-block",
            animation: "blink 2s ease-in-out infinite",
          }}
        />
        <span style={{ color: "#555", fontSize: "10px" }}>BUILDING</span>
      </div>
    </div>
  );
}
