import React, { useRef } from "react";
import styles from "./index.module.css";
import { SiMinutemailer } from "react-icons/si";

const Contact: React.FC = () => {
  const emailRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleEmailCopy = () => {
    if (emailRef.current) {
      const email = emailRef.current.textContent;
      if (email) {
        navigator.clipboard.writeText(email);

        if (buttonRef.current) {
          buttonRef.current.classList.add(styles.copiedButton);
          buttonRef.current.innerText = "Copiado";
        }

        setTimeout(() => {
          if (buttonRef.current) {
            buttonRef.current.classList.remove(styles.copiedButton);
            buttonRef.current.innerText = "Copie o email";
          }
        }, 2000);
      }
    }
  };

  return (
    <div className={`mb-3 container ${styles.contactSection}`} id="contato">
      <h1
        className={`col-12 d-flex gap-5 tex-center${styles.title}`}
        data-aos="zoom-in"
      >
        <SiMinutemailer />
        Me manda um email!
      </h1>
      <div className={`row justify-content-center ${styles.emailClipboard}`}>
        <h2 ref={emailRef} className={styles.text}>
          yuri.nogueira.de.moraes@hotmail.com
        </h2>
      </div>
      <div className="row justify-content-center mt-3">
        <button
          ref={buttonRef}
          className={`fs-2 ${styles.btn}`}
          onClick={handleEmailCopy}
        >
          Copie o email
        </button>
      </div>
    </div>
  );
};

export default Contact;
