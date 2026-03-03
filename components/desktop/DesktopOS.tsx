"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────
type WinId = "about" | "experience" | "projects" | "awards" | "contact";

interface WinState {
  id: WinId;
  open: boolean;
  minimized: boolean;
  x: number;
  y: number;
  z: number;
  width: number;
  height: number;
}

// ─── Catppuccin Mocha palette ─────────────────────────────────────────────────
const C = {
  bg: "#11111b",
  surface0: "#313244",
  surface1: "#45475a",
  base: "#1e1e2e",
  mantle: "#181825",
  crust: "#11111b",
  text: "#cdd6f4",
  subtext1: "#bac2de",
  subtext0: "#a6adc8",
  overlay2: "#9399b2",
  overlay1: "#7f849c",
  overlay0: "#6c7086",
  surface2: "#585b70",
  lavender: "#b4befe",
  blue: "#89b4fa",
  sapphire: "#74c7ec",
  sky: "#89dceb",
  teal: "#94e2d5",
  green: "#a6e3a1",
  yellow: "#f9e2af",
  peach: "#fab387",
  maroon: "#eba0ac",
  red: "#f38ba8",
  mauve: "#cba6f7",
  pink: "#f5c2e7",
  flamingo: "#f2cdcd",
  rosewater: "#f5e0dc",
  border: "#313244",
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const experience = [
  { date: "FEB 2026 – NOW", role: "FOUNDER", company: "STEALTH AI STARTUP", location: "TOKYO, JP", note: "cool things soon, dm for info", active: true },
  { date: "JAN 2026 – NOW", role: "PORTFOLIO RESEARCH ANALYST", company: "KUTIC", location: "TOKYO, JP · HYBRID", note: "incoming, starting april", active: true },
  { date: "JAN 2026 – NOW", role: "FOUNDER", company: "QUANTLEARN", location: "TOKYO, JP", note: "teaching kids financial modeling, in prod", active: true },
  { date: "JUL 2025 – AUG 2025", role: "TECHNICAL INTERN", company: "ROVE (YC W24)", location: "REMOTE", note: "contributed to backend systems, customer acquisition", active: false },
];

const education = [
  { date: "2016 – 2028", institution: "ST. MARY'S INTERNATIONAL SCHOOL", program: "IB DIPLOMA PROGRAMME", note: "3.96/4.00 GPA · hoping to drop out" },
  { date: "JUL – AUG 2025", institution: "HARVARD SEAS", program: "SUMMER PROGRAM · ENTREPRENEURSHIP", note: "Harvard Ventures-TECH Fellowship · <1% acceptance (20/5000+)" },
];

const projects = [
  {
    id: "01", name: "ML Stock Price Predictor", date: "Jan 2026 – Present",
    description: "ML model predicting next-day stock prices for Japanese equities. 95% test accuracy with Linear Regression after overfitting failure with Random Forest (−97%).",
    tech: ["Python", "scikit-learn", "Pandas", "yfinance"],
    metrics: [{ label: "Test Acc", value: "95%" }, { label: "Train Acc", value: "99%" }, { label: "Model", value: "Lin Reg" }],
    github: "https://github.com/arihantlodha-cmd/ML-Stock-Price-Prediction",
    status: "ACTIVE", statusColor: C.green,
  },
  {
    id: "02", name: "Algo Trading Backtester", date: "Dec 2025 – Jan 2026",
    description: "Python backtesting system evaluating MA crossover strategies on Tokyo Stock Exchange securities. Processes historical Nikkei data with performance analytics.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
    metrics: [{ label: "Market", value: "TSE/Nikkei" }, { label: "Strategy", value: "MA Cross" }, { label: "Status", value: "Done" }],
    github: "https://github.com/arihantlodha-cmd/Japanese-Stock-Moving-Average-Strategy",
    status: "COMPLETE", statusColor: C.sky,
  },
  {
    id: "03", name: "QuantLearn Platform", date: "Jan 2026 – Present",
    description: "EdTech platform teaching kids financial modeling and quantitative analysis. Currently in production.",
    tech: ["EdTech", "Finance", "Education"],
    metrics: [{ label: "Status", value: "In Prod" }, { label: "Role", value: "Founder" }, { label: "Type", value: "EdTech" }],
    github: null,
    status: "LIVE", statusColor: C.mauve,
  },
];

const awards = [
  { rank: "#3", title: "VEX Robotics Nationals", issuer: "VEX Robotics", detail: "Ranked 3rd nationally — solo", type: "COMPETITION", color: C.yellow },
  { rank: "TOP 5", title: "Voice AI Hackathon", issuer: "VOX Tokyo", detail: "Top 5 solo out of ~130 teams", type: "HACKATHON", color: C.sky },
  { rank: "<1%", title: "Harvard Ventures-TECH Fellowship", issuer: "Harvard SEAS", detail: "20 selected out of 5,000+ applicants", type: "FELLOWSHIP", color: C.green },
];

const skills = [
  { name: "Python / ML", pct: 90 },
  { name: "Quant Finance", pct: 80 },
  { name: "Data Analysis", pct: 85 },
  { name: "Backend Dev", pct: 65 },
  { name: "Using Claude", pct: 99 },
];

const interests = ["Quant Finance", "Machine Learning", "Startups", "Robotics", "Economics", "EdTech", "AI", "Japan"];

const contacts = [
  { label: "Email", value: "arihant97@smis.ac.jp", href: "mailto:arihant97@smis.ac.jp" },
  { label: "GitHub", value: "arihantlodha-cmd", href: "https://github.com/arihantlodha-cmd" },
  { label: "LinkedIn", value: "arihant-lodha-24a4593a0", href: "https://linkedin.com/in/arihant-lodha-24a4593a0" },
];

// ─── Shared content style ─────────────────────────────────────────────────────
const cs: React.CSSProperties = {
  padding: "16px 20px",
  color: C.text,
  fontSize: "12px",
  lineHeight: "1.7",
  height: "100%",
  overflowY: "auto",
  fontFamily: "'JetBrains Mono', 'Courier New', monospace",
  background: C.base,
};

const sectionLabel: React.CSSProperties = {
  color: C.overlay0,
  fontSize: "9px",
  letterSpacing: "0.14em",
  marginBottom: "10px",
  textTransform: "uppercase",
};

const card: React.CSSProperties = {
  background: C.mantle,
  border: `1px solid ${C.border}`,
  padding: "12px 14px",
  marginBottom: "8px",
  borderRadius: "6px",
};

// ─── Window Content: About ────────────────────────────────────────────────────
function AboutContent() {
  return (
    <div style={cs}>
      <div style={{ marginBottom: "24px" }}>
        <div style={{ fontSize: "28px", fontWeight: "700", color: C.mauve, letterSpacing: "0.04em", lineHeight: 1.1, marginBottom: "8px" }}>
          ARIHANT<br />LODHA
        </div>
        <div style={{ color: C.overlay0, fontSize: "12px" }}>16 · building in stealth · prev @ rove (yc w24)</div>
      </div>

      <div style={{ ...sectionLabel }}>Data Fields</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "22px" }}>
        {[
          { label: "Age", value: "16" },
          { label: "Location", value: "Tokyo, JP" },
          { label: "Status", value: "Stealth", accent: true },
          { label: "Prev", value: "Rove (YC W24)" },
          { label: "Connects", value: "500+" },
          { label: "Trajectory", value: "Future Dropout" },
        ].map((s) => (
          <div key={s.label} style={card}>
            <div style={{ color: C.surface2, fontSize: "9px", letterSpacing: "0.12em", marginBottom: "4px" }}>{s.label.toUpperCase()}</div>
            <div style={{ color: s.accent ? C.mauve : C.text, fontWeight: s.accent ? "700" : "400", fontSize: "12px" }}>{s.value}</div>
          </div>
        ))}
      </div>

      <div style={{ ...sectionLabel }}>Core Skills</div>
      <div style={{ marginBottom: "22px" }}>
        {skills.map((s) => (
          <div key={s.name} style={{ marginBottom: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px", fontSize: "10px" }}>
              <span style={{ color: C.subtext0 }}>{s.name}</span>
              <span style={{ color: C.mauve }}>{s.pct}%</span>
            </div>
            <div style={{ height: "3px", background: C.surface0, borderRadius: "2px" }}>
              <div style={{ height: "100%", width: `${s.pct}%`, background: C.mauve, borderRadius: "2px" }} />
            </div>
          </div>
        ))}
      </div>

      <div style={{ ...sectionLabel }}>Interests</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {interests.map((t) => (
          <span key={t} style={{ background: C.mantle, border: `1px solid ${C.border}`, padding: "3px 8px", fontSize: "10px", color: C.subtext0, borderRadius: "4px" }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

// ─── Window Content: Experience ───────────────────────────────────────────────
function ExperienceContent() {
  return (
    <div style={cs}>
      <div style={{ ...sectionLabel }}>Work History</div>
      {experience.map((e, i) => (
        <div key={i} style={{ ...card, marginBottom: "10px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {e.active && (
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: C.green, boxShadow: `0 0 5px ${C.green}`, display: "inline-block", flexShrink: 0 }} />
              )}
              <span style={{ color: C.text, fontWeight: "600", fontSize: "12px" }}>{e.role}</span>
            </div>
            <span style={{ color: C.overlay0, fontSize: "9px", whiteSpace: "nowrap", marginLeft: "8px" }}>{e.date}</span>
          </div>
          <div style={{ color: C.mauve, fontSize: "11px", marginBottom: "3px" }}>{e.company}</div>
          <div style={{ color: C.overlay0, fontSize: "10px" }}>{e.note} · {e.location}</div>
        </div>
      ))}

      <div style={{ ...sectionLabel, marginTop: "20px" }}>Education</div>
      {education.map((e, i) => (
        <div key={i} style={{ ...card, marginBottom: "10px" }}>
          <div style={{ color: C.mauve, fontSize: "12px", fontWeight: "600", marginBottom: "3px" }}>{e.institution}</div>
          <div style={{ color: C.subtext0, fontSize: "11px", marginBottom: "6px" }}>{e.program}</div>
          <div style={{ color: C.overlay0, fontSize: "10px", borderLeft: `2px solid ${C.border}`, paddingLeft: "8px" }}>{e.note}</div>
          <div style={{ color: C.surface2, fontSize: "9px", marginTop: "4px" }}>{e.date}</div>
        </div>
      ))}
    </div>
  );
}

// ─── Window Content: Projects ─────────────────────────────────────────────────
function ProjectsContent() {
  return (
    <div style={cs}>
      {projects.map((p, i) => (
        <div key={i} style={{ ...card, marginBottom: "14px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
            <span style={{ color: C.text, fontWeight: "600", fontSize: "13px" }}>{p.name}</span>
            <span style={{ fontSize: "9px", color: p.statusColor, border: `1px solid ${p.statusColor}`, padding: "1px 6px", borderRadius: "3px", flexShrink: 0, marginLeft: "8px" }}>{p.status}</span>
          </div>
          <div style={{ color: C.surface2, fontSize: "9px", marginBottom: "8px" }}>{p.date}</div>
          <div style={{ color: C.overlay0, fontSize: "11px", lineHeight: "1.7", marginBottom: "12px" }}>{p.description}</div>

          <div style={{ display: "flex", gap: "6px", marginBottom: "10px" }}>
            {p.metrics.map((m) => (
              <div key={m.label} style={{ background: C.crust, border: `1px solid ${C.border}`, padding: "6px 10px", borderRadius: "4px", textAlign: "center", flex: 1 }}>
                <div style={{ color: C.overlay0, fontSize: "8px", letterSpacing: "0.1em" }}>{m.label}</div>
                <div style={{ color: C.mauve, fontSize: "11px", fontWeight: "600" }}>{m.value}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginBottom: "10px" }}>
            {p.tech.map((t) => (
              <span key={t} style={{ background: C.surface0, padding: "2px 7px", fontSize: "9px", color: C.subtext0, borderRadius: "3px" }}>{t}</span>
            ))}
          </div>

          {p.github ? (
            <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ color: C.blue, fontSize: "10px", textDecoration: "none" }}>→ View on GitHub</a>
          ) : (
            <span style={{ color: C.surface2, fontSize: "10px" }}>Private / Stealth</span>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Window Content: Awards ───────────────────────────────────────────────────
function AwardsContent() {
  return (
    <div style={cs}>
      <div style={{ ...sectionLabel }}>Honors & Awards</div>
      {awards.map((a, i) => (
        <div key={i} style={{ ...card, display: "flex", gap: "16px", marginBottom: "10px" }}>
          <div style={{ textAlign: "center", minWidth: "56px", borderTop: `2px solid ${a.color}`, paddingTop: "8px" }}>
            <div style={{ color: a.color, fontSize: "20px", fontWeight: "700" }}>{a.rank}</div>
            <div style={{ color: C.overlay0, fontSize: "8px", letterSpacing: "0.08em" }}>{a.type}</div>
          </div>
          <div>
            <div style={{ color: C.text, fontWeight: "600", fontSize: "12px", marginBottom: "4px" }}>{a.title}</div>
            <div style={{ color: C.overlay0, fontSize: "10px", marginBottom: "4px" }}>ISSUED BY: {a.issuer}</div>
            <div style={{ color: C.overlay1, fontSize: "10px" }}>{a.detail}</div>
          </div>
        </div>
      ))}

      <div style={{ ...sectionLabel, marginTop: "20px" }}>Published Research</div>
      {[
        { title: "Machine Learning for Stock Prediction", sub: "How 99% training accuracy → −97% test accuracy taught me more than success", tags: ["ML", "Overfitting", "Quant"] },
        { title: "Algorithmic Trading at 16", sub: "Backtesting MA crossover strategies on the Tokyo Stock Exchange", tags: ["Algo Trading", "Python", "Nikkei"] },
      ].map((a, i) => (
        <div key={i} style={{ ...card, marginBottom: "10px" }}>
          <div style={{ color: C.text, fontWeight: "600", fontSize: "12px", marginBottom: "6px" }}>{a.title}</div>
          <div style={{ color: C.overlay0, fontSize: "10px", marginBottom: "8px" }}>{a.sub}</div>
          <div style={{ display: "flex", gap: "4px" }}>
            {a.tags.map((t) => (
              <span key={t} style={{ background: C.surface0, padding: "2px 7px", fontSize: "9px", color: C.subtext0, borderRadius: "3px" }}>{t}</span>
            ))}
          </div>
        </div>
      ))}

      <div style={{ ...sectionLabel, marginTop: "20px" }}>Interests</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {interests.map((t) => (
          <span key={t} style={{ background: C.mantle, border: `1px solid ${C.border}`, padding: "3px 8px", fontSize: "10px", color: C.subtext0, borderRadius: "4px" }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

// ─── Window Content: Contact ──────────────────────────────────────────────────
function ContactContent() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>(["ARIHANT TERMINAL v1.0 — type 'help'", ""]);
  const outputRef = useRef<HTMLDivElement>(null);

  const commands: Record<string, string[]> = {
    help: ["COMMANDS:", "  email    → arihant97@smis.ac.jp", "  github   → github.com/arihantlodha-cmd", "  linkedin → linkedin.com/in/arihant-lodha-24a4593a0", "  status   → current status", "  clear    → clear terminal"],
    email: ["→ arihant97@smis.ac.jp"],
    github: ["→ github.com/arihantlodha-cmd"],
    linkedin: ["→ linkedin.com/in/arihant-lodha-24a4593a0"],
    status: ["STATUS: BUILDING IN STEALTH", "LOCATION: TOKYO, JAPAN", "OPEN TO: cofounder / teammates / interesting projects"],
  };

  function handleCommand(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key !== "Enter") return;
    const cmd = input.trim().toLowerCase();
    if (cmd === "clear") {
      setHistory(["ARIHANT TERMINAL v1.0 — type 'help'", ""]);
    } else {
      const res = commands[cmd] || [`'${cmd}': not found. try 'help'.`];
      setHistory((p) => [...p, `> ${input}`, ...res, ""]);
    }
    setInput("");
    setTimeout(() => { outputRef.current?.scrollTo(0, 9999); }, 50);
  }

  return (
    <div style={{ ...cs, padding: 0, display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "16px 20px", borderBottom: `1px solid ${C.border}` }}>
        {contacts.map((c, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: i < contacts.length - 1 ? `1px solid ${C.crust}` : "none" }}>
            <span style={{ color: C.surface2, fontSize: "10px", letterSpacing: "0.1em" }}>{c.label.toUpperCase()}</span>
            <a href={c.href} target={c.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer" style={{ color: C.blue, fontSize: "11px", textDecoration: "none" }}>{c.value}</a>
          </div>
        ))}
      </div>

      <div style={{ padding: "12px 20px", borderBottom: `1px solid ${C.border}` }}>
        <div style={{ ...sectionLabel, marginBottom: "8px" }}>Open To</div>
        {["Co-founder / teammates", "Interesting projects", "Internships / research roles", "Quant / ML collaborations"].map((item) => (
          <div key={item} style={{ color: C.subtext0, fontSize: "11px", padding: "3px 0" }}>
            <span style={{ color: C.mauve }}>◆ </span>{item}
          </div>
        ))}
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", background: C.crust, minHeight: 0 }}>
        <div ref={outputRef} style={{ flex: 1, padding: "12px 16px", overflowY: "auto" }}>
          {history.map((line, i) => (
            <div key={i} style={{
              color: line.startsWith(">") ? C.mauve : line.startsWith("→") ? C.green : C.overlay0,
              fontSize: "11px", lineHeight: "1.8", minHeight: "16px", fontFamily: "monospace",
            }}>{line}</div>
          ))}
        </div>
        <div style={{ padding: "8px 16px", borderTop: `1px solid ${C.border}`, display: "flex", gap: "8px", alignItems: "center" }}>
          <span style={{ color: C.green, fontSize: "11px", fontFamily: "monospace", whiteSpace: "nowrap" }}>arihant@tokyo:~$</span>
          <input
            value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleCommand}
            style={{ flex: 1, background: "transparent", border: "none", outline: "none", color: C.text, fontSize: "11px", fontFamily: "monospace" }}
            placeholder="type a command..." autoComplete="off" spellCheck={false}
          />
        </div>
      </div>
    </div>
  );
}

// ─── App Window ───────────────────────────────────────────────────────────────
interface AppWindowProps {
  win: WinState;
  title: string;
  accentColor: string;
  onClose: () => void;
  onMinimize: () => void;
  onFocus: () => void;
  onTitleMouseDown: (e: React.MouseEvent) => void;
  children: React.ReactNode;
}

function AppWindow({ win, title, accentColor, onClose, onMinimize, onFocus, onTitleMouseDown, children }: AppWindowProps) {
  if (!win.open || win.minimized) return null;

  return (
    <div
      onMouseDown={onFocus}
      style={{
        position: "fixed",
        left: win.x, top: win.y,
        width: win.width, height: win.height,
        zIndex: win.z,
        background: C.base,
        border: `1px solid ${C.border}`,
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 25px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)",
        display: "flex",
        flexDirection: "column",
        userSelect: "none",
      }}
    >
      {/* Title bar */}
      <div
        onMouseDown={onTitleMouseDown}
        style={{
          background: C.mantle,
          padding: "10px 16px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          cursor: "grab",
          userSelect: "none",
          borderBottom: `1px solid ${C.border}`,
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex", gap: "6px" }}>
          <button
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            style={{ width: "12px", height: "12px", borderRadius: "50%", background: C.red, border: "none", cursor: "pointer", padding: 0 }}
            title="Close"
          />
          <button
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => { e.stopPropagation(); onMinimize(); }}
            style={{ width: "12px", height: "12px", borderRadius: "50%", background: C.yellow, border: "none", cursor: "pointer", padding: 0 }}
            title="Minimize"
          />
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: C.surface0 }} />
        </div>
        <div style={{ flex: 1, textAlign: "center", color: C.overlay0, fontSize: "11px", letterSpacing: "0.04em", marginLeft: "-36px" }}>
          <span style={{ color: accentColor, marginRight: "6px" }}>●</span>
          {title}
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflow: "hidden", display: "flex", flexDirection: "column" }}>
        {children}
      </div>
    </div>
  );
}

// ─── Desktop Icon ─────────────────────────────────────────────────────────────
function DesktopIcon({ label, color, short, onClick, isOpen }: {
  label: string; color: string; short: string; onClick: () => void; isOpen: boolean;
}) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex", flexDirection: "column", alignItems: "center", gap: "5px",
        padding: "8px", borderRadius: "8px", cursor: "pointer", width: "72px",
        background: hover ? "rgba(203,166,247,0.08)" : "transparent",
        transition: "background 0.15s",
      }}
    >
      <div style={{
        width: "48px", height: "48px", borderRadius: "12px", background: color,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "13px", fontWeight: "700", color: "#11111b", fontFamily: "monospace",
        boxShadow: `0 4px 14px ${color}55`,
        transform: hover ? "scale(1.08) translateY(-2px)" : "scale(1)",
        transition: "transform 0.15s, box-shadow 0.15s",
      }}>
        {short}
      </div>
      <span style={{ color: C.text, fontSize: "10px", textAlign: "center", textShadow: "0 1px 3px rgba(0,0,0,0.9)", letterSpacing: "0.02em" }}>{label}</span>
      <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: isOpen ? C.mauve : "transparent", transition: "background 0.2s" }} />
    </div>
  );
}

// ─── App definitions ──────────────────────────────────────────────────────────
const APPS: { id: WinId; title: string; short: string; color: string; width: number; height: number; defaultX: number; defaultY: number }[] = [
  { id: "about",      title: "About",      short: "~",   color: C.mauve,   width: 460, height: 580, defaultX: 80,  defaultY: 55  },
  { id: "experience", title: "Experience", short: "exp", color: C.blue,    width: 600, height: 520, defaultX: 150, defaultY: 75  },
  { id: "projects",   title: "Projects",   short: "prj", color: C.green,   width: 640, height: 600, defaultX: 220, defaultY: 55  },
  { id: "awards",     title: "Awards",     short: "awd", color: C.yellow,  width: 520, height: 560, defaultX: 290, defaultY: 75  },
  { id: "contact",    title: "Contact",    short: "@",   color: C.red,     width: 480, height: 540, defaultX: 180, defaultY: 90  },
];

const CONTENT: Record<WinId, React.ReactNode> = {
  about:      <AboutContent />,
  experience: <ExperienceContent />,
  projects:   <ProjectsContent />,
  awards:     <AwardsContent />,
  contact:    <ContactContent />,
};

// ─── Main Desktop OS ──────────────────────────────────────────────────────────
export default function DesktopOS() {
  const [windows, setWindows] = useState<WinState[]>(
    APPS.map(a => ({ id: a.id, open: false, minimized: false, x: a.defaultX, y: a.defaultY, z: 10, width: a.width, height: a.height }))
  );
  const [maxZ, setMaxZ] = useState(10);
  const [draggingId, setDraggingId] = useState<WinId | null>(null);
  const dragStart = useRef({ mx: 0, my: 0, wx: 0, wy: 0 });
  const [time, setTime] = useState("");

  // Clock
  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }));
    };
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, []);

  // Prevent body scroll
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  // Drag logic
  useEffect(() => {
    if (!draggingId) return;

    const handleMove = (e: MouseEvent) => {
      const dx = e.clientX - dragStart.current.mx;
      const dy = e.clientY - dragStart.current.my;
      setWindows(prev => prev.map(w =>
        w.id === draggingId
          ? { ...w, x: Math.max(0, dragStart.current.wx + dx), y: Math.max(28, dragStart.current.wy + dy) }
          : w
      ));
    };

    const handleUp = () => setDraggingId(null);

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseup", handleUp);
    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseup", handleUp);
    };
  }, [draggingId]);

  function openWindow(id: WinId) {
    const newZ = maxZ + 1;
    setMaxZ(newZ);
    setWindows(prev => prev.map(w => w.id === id ? { ...w, open: true, minimized: false, z: newZ } : w));
  }

  function closeWindow(id: WinId) {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, open: false } : w));
  }

  function minimizeWindow(id: WinId) {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, minimized: true } : w));
  }

  function focusWindow(id: WinId) {
    const newZ = maxZ + 1;
    setMaxZ(newZ);
    setWindows(prev => prev.map(w => w.id === id ? { ...w, z: newZ } : w));
  }

  function startDrag(id: WinId, e: React.MouseEvent) {
    if (e.button !== 0) return;
    e.preventDefault();
    const win = windows.find(w => w.id === id)!;
    focusWindow(id);
    setDraggingId(id);
    dragStart.current = { mx: e.clientX, my: e.clientY, wx: win.x, wy: win.y };
  }

  return (
    <div style={{
      width: "100vw", height: "100vh",
      background: `radial-gradient(ellipse at 20% 50%, #1a0a2e 0%, ${C.bg} 60%)`,
      position: "relative", overflow: "hidden",
      fontFamily: "'JetBrains Mono', 'Courier New', monospace",
      cursor: draggingId ? "grabbing" : "default",
    }}>
      {/* Subtle dot grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `radial-gradient(circle, ${C.mauve}18 1px, transparent 1px)`,
        backgroundSize: "28px 28px",
        pointerEvents: "none",
      }} />

      {/* Menu bar */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, height: "28px",
        background: "rgba(17,17,27,0.85)", backdropFilter: "blur(20px)",
        borderBottom: `1px solid ${C.border}44`,
        display: "flex", alignItems: "center", padding: "0 16px",
        zIndex: 9999, gap: "20px",
      }}>
        <span style={{ color: C.mauve, fontSize: "12px", fontWeight: "700", letterSpacing: "0.04em" }}>◈ ARIHANT.OS</span>
        <span style={{ color: C.surface2, fontSize: "10px" }}>Tokyo, JP</span>
        <div style={{ flex: 1 }} />
        <Link
          href="/"
          style={{ color: C.surface2, fontSize: "10px", textDecoration: "none", border: `1px solid ${C.border}`, padding: "2px 10px", borderRadius: "4px", letterSpacing: "0.05em", transition: "color 0.15s, border-color 0.15s" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = C.mauve; (e.currentTarget as HTMLAnchorElement).style.borderColor = C.mauve; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = C.surface2; (e.currentTarget as HTMLAnchorElement).style.borderColor = C.border; }}
        >
          ◈ TERMINAL MODE
        </Link>
        <span style={{ color: C.overlay0, fontSize: "11px" }}>{time}</span>
      </div>

      {/* Desktop Icons */}
      <div style={{ position: "absolute", top: "44px", left: "16px", display: "flex", flexDirection: "column", gap: "4px" }}>
        {APPS.map(app => {
          const win = windows.find(w => w.id === app.id)!;
          return (
            <DesktopIcon
              key={app.id}
              label={app.title}
              color={app.color}
              short={app.short}
              isOpen={win.open && !win.minimized}
              onClick={() => win.open && !win.minimized ? focusWindow(app.id) : openWindow(app.id)}
            />
          );
        })}
      </div>

      {/* Windows */}
      {APPS.map(app => {
        const win = windows.find(w => w.id === app.id)!;
        return (
          <AppWindow
            key={app.id}
            win={win}
            title={app.title}
            accentColor={app.color}
            onClose={() => closeWindow(app.id)}
            onMinimize={() => minimizeWindow(app.id)}
            onFocus={() => focusWindow(app.id)}
            onTitleMouseDown={(e) => startDrag(app.id, e)}
          >
            {CONTENT[app.id]}
          </AppWindow>
        );
      })}

      {/* Dock */}
      <div style={{
        position: "fixed", bottom: "10px", left: "50%", transform: "translateX(-50%)",
        background: "rgba(24,24,37,0.75)", backdropFilter: "blur(24px)",
        border: `1px solid ${C.border}99`,
        borderRadius: "16px", padding: "8px 14px",
        display: "flex", gap: "6px", alignItems: "flex-end",
        zIndex: 9998,
        boxShadow: "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
      }}>
        {APPS.map(app => {
          const win = windows.find(w => w.id === app.id)!;
          const isActive = win.open && !win.minimized;
          return (
            <div
              key={app.id}
              onClick={() => win.minimized || !win.open ? openWindow(app.id) : focusWindow(app.id)}
              title={app.title}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3px", cursor: "pointer" }}
            >
              <div
                style={{
                  width: "42px", height: "42px", borderRadius: "10px",
                  background: app.color,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "13px", fontWeight: "700", color: "#11111b", fontFamily: "monospace",
                  transition: "transform 0.15s, box-shadow 0.15s",
                  boxShadow: isActive ? `0 0 12px ${app.color}66` : "none",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "scale(1.25) translateY(-6px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "scale(1)"; }}
              >
                {app.short}
              </div>
              <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: isActive ? C.mauve : "transparent", transition: "background 0.2s" }} />
            </div>
          );
        })}
      </div>

      {/* Hint text when no windows open */}
      {windows.every(w => !w.open) && (
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
          textAlign: "center", pointerEvents: "none",
        }}>
          <div style={{ color: C.surface0, fontSize: "11px", letterSpacing: "0.1em" }}>click an icon to open</div>
        </div>
      )}
    </div>
  );
}
