import TickerTape from "@/components/TickerTape";
import NavBar from "@/components/NavBar";
import HeroPanel from "@/components/HeroPanel";
import ExperiencePanel from "@/components/ExperiencePanel";
import ProjectsPanel from "@/components/ProjectsPanel";
import AwardsPanel from "@/components/AwardsPanel";
import ContactPanel from "@/components/ContactPanel";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <TickerTape />
      <NavBar />

      <main
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          border: "1px solid #1c1c1c",
          borderTop: "none",
        }}
      >
        <HeroPanel />
        <ExperiencePanel />
        <ProjectsPanel />
        <AwardsPanel />
        <ContactPanel />

        {/* Footer */}
        <footer
          style={{
            padding: "16px 20px",
            borderTop: "1px solid #1c1c1c",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#0a0a0a",
          }}
        >
          <span style={{ color: "#222", fontSize: "10px", letterSpacing: "0.1em" }}>
            ARIHANT LODHA · TOKYO, JP · 2026
          </span>
          <span style={{ color: "#222", fontSize: "10px" }}>
            BUILT WITH NEXT.JS + CLAUDE
          </span>
        </footer>
      </main>
    </div>
  );
}
