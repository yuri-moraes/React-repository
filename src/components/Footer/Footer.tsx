import React from "react";
import styles from "./index.module.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  const bubbles = Array.from({ length: 128 }, (_, i) => i).map((_, i) => (
    <div
      key={i}
      className={styles.bubble}
      style={
        {
          "--size": `${3 + Math.random() * 4}rem`,
          "--distance": `${8 + Math.random() * 4}rem`,
          "--position": `${4 + Math.random() * 90}%`,
          "--time": `${2 + Math.random() * 2}s`,
          "--delay": `${-1 * (2 + Math.random() * 2)}s`,
        } as React.CSSProperties
      }
    ></div>
  ));

  return (
    <footer className={styles.footer}>
      <div className={styles.bubbles}>{bubbles}</div>
      <div className={styles.footerContent}>
        <div>
          <div>
            <h1 className="text-dark fs-2">YURI MORAES</h1>
            <p className="text-dark fs-5" data-aos="zoom-in">
              Um desenvolvedor Web focado em Frontend construindo o Frontend de
              Sites e Aplicações Web que levam ao sucesso do geral produto
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-dark fs-4 mb-3">SOCIAL</h1>
          <div className="d-flex gap-5">
            <a
              className={`btn bg-dark  d-flex align-items-center gap-2 ${styles.link}`}
              href="https://www.linkedin.com/in/yuri-moraes-4b018b252/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#A1DDFF" }}
            >
              <FaLinkedinIn />
              LinkedIn
            </a>
            <a
              className={`btn bg-dark  d-flex align-items-center gap-2 ${styles.link}`}
              href="https://github.com/yuri-moraes"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#A1DDFF" }}
            >
              <FaGithub />
              Github
            </a>
          </div>
        </div>
        <div>
          <p className="text-dark fs-6 fw-bold">
            © 2023 Yuri Moraes - Todos os direitos reservados
          </p>
        </div>
      </div>
      <svg style={{ position: "fixed", top: "100vh" }}>
        <defs>
          <filter id="blob">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="blob"
            />
          </filter>
        </defs>
      </svg>
    </footer>
  );
};

export default Footer;
