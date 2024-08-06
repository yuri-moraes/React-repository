import React, { useState } from "react";
import style from "./index.module.css";
import { HashLink as Link } from "react-router-hash-link";

const NavBar: React.FC = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const closeNav = () => setIsNavCollapsed(true);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link className={`navbar-brand ${style.linkName}`} to="/#inicio" smooth>
          Yuri Moraes
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${
            isNavCollapsed ? "collapse" : ""
          } navbar-collapse justify-content-center`}
          id="navbarNav"
        >
          <ul className={`navbar-nav ${style.navbarDiv}`}>
            <li className="nav-item">
              <Link
                className={`nav-link active ${style.linkpage}`}
                aria-current="page"
                to="/#inicio"
                smooth
                onClick={closeNav}
              >
                <i className="bi bi-house"></i> Início
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link active ${style.linkpage}`}
                aria-current="page"
                to="/#sobre-mim"
                smooth
                onClick={closeNav}
              >
                <i className="bi bi-person-circle"></i> Sobre mim
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link active ${style.linkpage}`}
                aria-current="page"
                to="/#projetos"
                smooth
                onClick={closeNav}
              >
                <i className="bi bi-folder2-open"></i> Projetos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link active ${style.linkpage}`}
                aria-current="page"
                to="/#contato"
                smooth
                onClick={closeNav}
              >
                <i className="bi bi-envelope"></i> Contato
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link active ${style.linkpage}`}
                aria-current="page"
                to="/academico/#academico"
                smooth
                onClick={closeNav}
              >
                <i className="bi bi-mortarboard"></i> Acadêmico
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
