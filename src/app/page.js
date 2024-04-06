import About from "@/components/About";
import Body from "@/components/Body";
import Contact from "@/components/Contact";
// import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <Body />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Contact />
    </div>
  );
}
