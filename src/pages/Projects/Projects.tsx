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
            text="React.js e Node.js"
            description="Controle de Estoque e Usuários"
            img={stockProject}
            link="https://react-stock-dev.vercel.app/"
            source="https://github.com/yuri-moraes/stock-frontend"
          />
          <ProjectCard
            text="React.js e Django Rest Framework"
            description="Sistema de Gestão Empresarial (ERP)"
            img={calculator}
            link="https://sistema-erp-front-end-9gig.vercel.app/"
            source="https://github.com/yuri-moraes/sistema_erp_front_end"
          />
          <ProjectCard
            text="TypeScript e React.js"
            description="Evogym- Landing Page"
            img={evogym}
            link="https://86676157.react-gym-f52.pages.dev/"
            source="https://github.com/yuri-moraes/react-gym"
          />
          <ProjectCard
            text="HTML, CSS e JavaScript"
            description="Jogo da Velha Web"
            img={jogoDaVelha}
            link="https://yuri-moraes.github.io/jogo-da-velha/"
            source="https://github.com/yuri-moraes/jogo-da-velha"
          />
        </div>
      </section>
    </>
  );
};

export default Projects;
