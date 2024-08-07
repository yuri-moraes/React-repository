import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";

interface ImgProfileProps {
  style: string;
  img: string;
}

interface LinksProfileProps {
  href1: string;
  href2: string;
  href3: string;
}

interface ProjectBtnProps {
  style: string;
  to: string;
  title: string;
}

interface TextProfileProps {
  style: string;
  children: React.ReactNode;
}

const ImgProfile: React.FC<ImgProfileProps> = ({ style, img }) => {
  return (
    <img
      className={`img-fluid rounded-circle ${style}`}
      src={img}
      alt="profile-img"
      data-aos="flip-left"
    />
  );
};

const LinksProfile: React.FC<LinksProfileProps> = ({ href1, href2, href3 }) => {
  return (
    <div className="row mt-4 mb-4">
      <div className="col text-center">
        <a
          href={href1}
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none text-light mx-3"
          title="GitHub link"
        >
          <FaGithub size={30} data-aos="flip-right" />
        </a>
        <a
          href={href2}
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none text-light mx-3"
          title="Linkedin link"
        >
          <FaLinkedin size={30} data-aos="flip-up" />
        </a>
        <Link
          to={href3}
          className="text-decoration-none text-light mx-3"
          title="E-mail link"
        >
          <FaEnvelope size={30} data-aos="flip-down" />
        </Link>
      </div>
    </div>
  );
};

const ProjectBtn: React.FC<ProjectBtnProps> = ({ style, to, title }) => {
  return (
    <div className="d-flex justify-content-center mt-3" data-aos="fade-up">
      <Link to={to} className={`btn btn-outline-info ${style}`}>
        <i className="bi bi-folder2-open"></i>
        {title}
      </Link>
    </div>
  );
};

const TextProfile: React.FC<TextProfileProps> = ({ style, children }) => {
  return (
    <div className={`col-md-8 ${style}`}>
      <p className={"fs-1 "} data-aos="fade-down">
        Olá, meu nome é Yuri!
      </p>
      <p className={"fs4 "} data-aos="fade-up">
        Um desenvolvedor web front-end especializado em construir sites e
        aplicativos mobile que impulsionam o sucesso do projeto.
      </p>
      {children}
    </div>
  );
};

export default ImgProfile;
export { LinksProfile, ProjectBtn, TextProfile };
