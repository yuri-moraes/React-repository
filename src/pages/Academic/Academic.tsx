import styles from "./academic.module.css";
import StarsMec from "./StarsMec";
import UninterIcon from "../../assets/uninter.png";
import { SiMicrosoftacademic } from "react-icons/si";
import urlPDF from "../../assets/grade-curricular.pdf";

const Academic: React.FC = () => {
  const openPDF = () => {
    window.open(urlPDF, `_blank`);
  };

  return (
    <div
      id="academico"
      className={`container scroll-offset ${styles.academicSection}`}
    >
      <div className={`border rounded ${styles.card}`}>
        <div className="row">
          <div className="col-md-8">
            <h1 data-aos="zoom-in-down">Yuri Nogueira de Moraes</h1>
            <h2 className="mt-3 " data-aos="zoom-in-right">
              Análise e Desenvolvimento de Sistemas
            </h2>
            <hr />
            <div className={`container mt-4 ${styles.description}`}>
              <p>
                <span className="fw-bold">Instituição:</span> UNINTER Centro
                Universitário Internacional
              </p>
              <p>
                <span className="fw-bold">Início:</span> 23/03/2023
              </p>
              <p>
                <span className="fw-bold">Previsão de Término:</span> 10/2025
              </p>
              <p className="course-mec">
                <span className="fw-bold">Nota Avaliação MEC: </span>
                <StarsMec dataOS="flip-right" />
                <StarsMec dataOS="flip-right" />
                <StarsMec dataOS="flip-right" />
                <StarsMec dataOS="flip-right" />
                <StarsMec dataOS="flip-right" />
              </p>
            </div>
            <button
              type="button"
              onClick={openPDF}
              className={`btn btn-primary btn-lg mb-5 d-flex gap-3 ${styles.btnGrid}`}
            >
              <SiMicrosoftacademic />
              Grade Curricular
            </button>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <img
              src={UninterIcon}
              data-aos="flip-down"
              alt="Uninter icon"
              className={`rounded-circle ${styles.icon}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academic;
