import styles from "./index.module.css";

interface ProjectCardProps {
  text: string;
  description: string;
  img: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  text,
  description,
  img,
  link,
}) => {
  return (
    <div
      className={`col-12 col-md-6 col-lg-6 p-3 ${styles.projectDiv}`}
      data-aos="fade-right"
    >
      <div className="card bg-transparent h-100">
        <div>
          <img
            className={`card-img-top ${styles.imageWidth}`}
            src={img}
            alt={text}
          />
        </div>
        <div className="card-body text-center">
          <h5 className={`card-title fs-5 ${styles.title}`}>{text}</h5>
          <p className="card-text fs-4 fw-bold">{description}</p>
          <a
            className="btn btn-outline-info btn-lg focus-ring focus-ring-info"
            href={link}
            target="_blank"
          >
            ACESSE
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
