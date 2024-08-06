import React from "react";
import styles from "./index.module.css";
import stockProject from "../../assets/Mockup-1.png";
import passwordProject from "../../assets/Mockup-2.png";
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
            text="ESTUDO DE CASO"
            description="CONTROLE DE ESTOQUE FUNCIONAL CONSTRUIDO EM REACT"
            img={stockProject}
            link="https://yuri-moraes.github.io/stock-control/"
          />
          <ProjectCard
            text="ESTUDO DE CASO"
            description="GERADOR DE SENHA CUSTOMIZADO CONSTRUIDO EM REACT"
            img={passwordProject}
            link="https://yuri-moraes.github.io/password-generate/"
          />
          <ProjectCard
            text="ESTUDO DE CASO"
            description="JOGO DA VELHA"
            img={jogoDaVelha}
            link="https://yuri-moraes.github.io/jogo-da-velha/"
          />
          <ProjectCard
            text="ESTUDO DE CASO"
            description="CALCULADORA WEB"
            img={calculator}
            link="https://yuri-moraes.github.io/Calculator.js/"
          />
        </div>
      </section>
    </>
  );
};

export default Projects;
