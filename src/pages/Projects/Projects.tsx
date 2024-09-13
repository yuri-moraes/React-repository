import React from "react";
import styles from "./index.module.css";
import stockProject from "../../assets/Mockup-1.png";
import evogym from "../../assets/Mockup-2.png";
import jogoDaVelha from "../../assets/Mockup-3.png";
import calculator from "../../assets/Mockup-4.png";
import ProjectCard from "../../components/Project/ProjectCard";

const Projects: React.FC = () => {
  return (
    <>
      <section className={` container ${styles.projectsSection}`} id="projetos">
        <div className="text-center mb-5" data-aos="flip-up">
          <h1 className="fs-1">Projetos</h1>
          <p className="fs-4">
            Aqui encontrará projetos pessoais aprendidos e personalizados ao
            longo do tempo
          </p>
        </div>
        <div className="row d-flex justify-content-center">
          <ProjectCard
            text="CONTROLE DE ESTOQUE FUNCIONAL"
            description="REAC STOCK"
            img={stockProject}
            link="https://react-stock-dev.vercel.app/"
            source="https://github.com/yuri-moraes/stock-frontend"
          />
          <ProjectCard
            text="ESTUDO DE CASO"
            description="EVOGYM - LANDING PAGE"
            img={evogym}
            link="https://86676157.react-gym-f52.pages.dev/"
            source="https://github.com/yuri-moraes/react-gym"
          />
          <ProjectCard
            text="ESTUDO DE CASO"
            description="JOGO DA VELHA"
            img={jogoDaVelha}
            link="https://yuri-moraes.github.io/jogo-da-velha/"
            source="https://github.com/yuri-moraes/jogo-da-velha"
          />
          <ProjectCard
            text="ESTUDO DE CASO"
            description="CALCULADORA WEB"
            img={calculator}
            link="https://yuri-moraes.github.io/Calculator.js/"
            source="https://github.com/yuri-moraes/Calculator.js"
          />
        </div>
      </section>
    </>
  );
};

export default Projects;
