"use client";

import { useState } from "react";

const links = [
  { label: "EMAIL", value: "arihant97@smis.ac.jp", href: "mailto:arihant97@smis.ac.jp" },
  { label: "GITHUB", value: "arihantlodha-cmd", href: "https://github.com/arihantlodha-cmd" },
  { label: "LINKEDIN", value: "arihant-lodha-24a4593a0", href: "https://linkedin.com/in/arihant-lodha-24a4593a0" },
];

export default function ContactPanel() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "ARIHANT TERMINAL v1.0 — type 'help' for commands",
    "",
  ]);

  const commands: Record<string, string[]> = {
    help: [
      "AVAILABLE COMMANDS:",
      "  email    → arihant97@smis.ac.jp",
      "  github   → github.com/arihantlodha-cmd",
      "  linkedin → linkedin.com/in/arihant-lodha-24a4593a0",
      "  status   → current status",
      "  clear    → clear terminal",
    ],
    email: ["→ arihant97@smis.ac.jp"],
    github: ["→ github.com/arihantlodha-cmd"],
    linkedin: ["→ linkedin.com/in/arihant-lodha-24a4593a0"],
    status: [
      "STATUS: BUILDING IN STEALTH",
      "LOCATION: TOKYO, JAPAN",
      "OPEN TO: cofounder / teammates / interesting projects",
      "DM FOR MORE INFO",
    ],
    clear: ["__CLEAR__"],
  };

  function handleCommand(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key !== "Enter") return;
    const cmd = input.trim().toLowerCase();
    const prompt = `> ${input}`;

    if (cmd === "clear") {
      setHistory(["ARIHANT TERMINAL v1.0 — type 'help' for commands", ""]);
    } else {
      const response = commands[cmd] || [`'${cmd}': command not found. Try 'help'.`];
      setHistory((prev) => [...prev, prompt, ...response, ""]);
    }
    setInput("");
  }

  return (
    <section id="contact" style={{ borderBottom: "1px solid #1c1c1c", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      {/* Links */}
      <div style={{ borderRight: "1px solid #1c1c1c" }}>
        <div className="panel-header">
          <span>CONTACT INFORMATION</span>
          <span style={{ fontWeight: 400 }}>TOKYO, JP</span>
        </div>

        {links.map((l, i) => (
          <div
            key={i}
            className="row-hover"
            style={{
              padding: "20px 20px",
              borderBottom: "1px solid #111",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ color: "#333", fontSize: "9px", letterSpacing: "0.15em", minWidth: "80px" }}>
              {l.label}
            </span>
            <a
              href={l.href}
              target={l.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              style={{
                color: "#888",
                textDecoration: "none",
                fontSize: "11px",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--orange)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#888")}
            >
              {l.value}
            </a>
          </div>
        ))}

        {/* Open to section */}
        <div style={{ padding: "24px 20px" }}>
          <div style={{ color: "#333", fontSize: "9px", letterSpacing: "0.15em", marginBottom: "14px" }}>
            OPEN TO ─────────────────────────────
          </div>
          {[
            "Co-founder / teammates",
            "Interesting projects",
            "Internships / research roles",
            "Quant / ML collaborations",
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "8px 0",
                borderBottom: i < 3 ? "1px solid #0f0f0f" : "none",
              }}
            >
              <span style={{ color: "var(--orange)", fontSize: "10px" }}>◆</span>
              <span style={{ color: "#666", fontSize: "11px" }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Terminal */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="panel-header">
          <span>INTERACTIVE TERMINAL</span>
          <span style={{ fontWeight: 400 }}>TYPE &apos;help&apos;</span>
        </div>

        <div
          style={{
            flex: 1,
            background: "#060606",
            padding: "16px",
            fontFamily: "monospace",
            overflowY: "auto",
            minHeight: "280px",
            maxHeight: "380px",
          }}
        >
          {history.map((line, i) => (
            <div
              key={i}
              style={{
                color: line.startsWith(">") ? "var(--orange)" : line.startsWith("→") ? "var(--green)" : "#666",
                fontSize: "11px",
                lineHeight: "1.8",
                minHeight: "18px",
              }}
            >
              {line}
            </div>
          ))}
        </div>

        {/* Input */}
        <div
          style={{
            borderTop: "1px solid #1c1c1c",
            padding: "10px 16px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "#060606",
          }}
        >
          <span style={{ color: "var(--orange)", fontSize: "11px" }}>arihant@tokyo:~$</span>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              color: "#d8d8d8",
              fontSize: "11px",
              fontFamily: "monospace",
            }}
            placeholder="type a command..."
            autoComplete="off"
            spellCheck={false}
          />
        </div>
      </div>
    </section>
  );
}
