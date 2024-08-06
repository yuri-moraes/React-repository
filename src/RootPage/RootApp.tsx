import AboutMe from "../pages/AboutMe/AboutMe";
import Home from "../pages/Home/Home";
import Projects from "../pages/Projects/Projects";
import Contact from "../pages/Contact/Contact";

function Root() {
  return (
    <>
      <section id="inicio" className="scroll-offset">
        <Home />
      </section>
      <section id="sobre-mim" className="scroll-offset">
        <AboutMe />
      </section>
      <section id="projetos" className="scroll-offset">
        <Projects />
      </section>
      <section id="contato" className="scroll-offset">
        <Contact />
      </section>
    </>
  );
}

export default Root;
