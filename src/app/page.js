import About from "@/components/About";
import Body from "@/components/Body";
import Breakout from "@/components/Breakout";
import Contact from "@/components/Contact";
import EdgeFlow from "@/components/EdgeFlow";
import Elsewhere from "@/components/Elsewhere";
import ImpactStats from "@/components/ImpactStats";
import KanbanShowcase from "@/components/KanbanShowcase";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import SystemCore from "@/components/SystemCore";

export default function Home() {
  return (
    <div className="screenbreak-home">
      <Body />
      <ImpactStats />
      <About />
      <SystemCore />
      <Breakout />
      <KanbanShowcase />
      <EdgeFlow />
      <Skills />
      <Projects />
      <Elsewhere />
      <Contact />
    </div>
  );
}
