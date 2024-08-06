import styles from "./index.module.css";
import React, { useEffect } from "react";
import profileImg from "../../assets/Yuri.png";
import AOS from "aos";
import ImgProfile, {
  LinksProfile,
  ProjectBtn,
  TextProfile,
} from "./CardComponents";

const CardProfile: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const githubLink: string = "https://github.com/yuri-moraes";
  const linkedinLink: string =
    "https://www.linkedin.com/in/yuri-moraes-4b018b252/";
  const emailLink: string = "yuri.nogueira.de.moraes@hotmail.com";

  return (
    <>
      <div className={`container ${styles.card}`}>
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <ImgProfile style={styles["profile-img"]} img={profileImg} />
            <LinksProfile
              href1={githubLink}
              href2={linkedinLink}
              href3={emailLink}
            />
          </div>
          <TextProfile style={styles.textContainer}>
            <ProjectBtn
              style={styles.projectBtn}
              to="/#projetos"
              title="Projetos"
            />
          </TextProfile>
        </div>
      </div>
    </>
  );
};

export default CardProfile;
