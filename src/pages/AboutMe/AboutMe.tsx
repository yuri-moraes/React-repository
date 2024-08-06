import React from "react";
import styles from "./index.module.css";
import AboutText from "../../components/AboutProfile/AboutText";
import Skills from "../../components/AboutProfile/Skills";

const AboutMe: React.FC = () => {
  return (
    <>
      <section
        className={`container text-center ${styles.aboutSection}`}
        data-bs-theme="dark"
        id="sobre-mim"
      >
        <div data-aos="fade-down">
          <h1>Sobre mim</h1>
          <p className="mb-5 fs-5 fs-5-mobile">
            Aqui você encontrará mais sobre mim, o que eu faço e minhas
            habilidades atuais, especialmente em termos de programação e
            tecnologia.
          </p>
        </div>
        <div className="row justify-content-between">
          <AboutText />
          <Skills />
        </div>
      </section>
    </>
  );
};

export default AboutMe;
