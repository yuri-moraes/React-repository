import styles from "./index.module.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  text: string;
  description: string;
  img: string;
  link: string;
  source: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  text,
  description,
  img,
  link,
  source,
}) => {
  return (
    <div
      className={`col-12 col-md-6 col-lg-6 p-3 ${styles.projectDiv}`}
      data-aos="fade-right"
    >
      <div className={`card bg-transparent h-100 ${styles.card}`}>
        <div>
          <img
            className={`card-img-top ${styles.imageWidth}`}
            src={img}
            alt={text}
          />
        </div>
        <div className="card-body text-center ">
          <h5 className={`card-title fs-5 ${styles.title}`}>{text}</h5>
          <p className="card-text fs-4 fw-bold ">{description}</p>
          <div className="d-flex gap-3 justify-content-center">
            <a
              className="btn btn-outline-info btn-lg focus-ring focus-ring-info d-flex gap-3 align-items-center"
              href={link}
              target="_blank"
            >
              SITE <FaExternalLinkAlt className="fs-6" />
            </a>
            <a
              className="btn btn-outline-info btn-lg focus-ring focus-ring-info d-flex gap-3 align-items-center"
              href={source}
              target="_blank"
            >
              CÓDIGO <FaGithub className="fs-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
