import React from "react";
import {
  FaGitAlt,
  FaHtml5,
  FaCss3,
  FaPython,
  FaReact,
  FaBootstrap,
  FaSass,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoPostgresql,
} from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import SkillIcon from "./SkillIcon";
import { RiNextjsFill } from "react-icons/ri";
import styles from "./aboutStyle.module.css";

const Skills: React.FC = () => {
  const skills = [
    { icon: FaGitAlt, label: "Git" },
    { icon: FaHtml5, label: "HTML5" },
    { icon: FaCss3, label: "CSS3" },
    { icon: FaSass, label: "Sass" },
    { icon: FaBootstrap, label: "Bootstrap" },
    { icon: BiLogoTailwindCss, label: "Tailwind CSS" },
    { icon: IoLogoJavascript, label: "JavaScript" },
    { icon: BiLogoTypescript, label: "TypeScript" },
    { icon: FaReact, label: "React" },
    { icon: FaPython, label: "Python" },
    { icon: FaGitAlt, label: "Git" },
    { icon: GrMysql, label: "MySQL" },
    { icon: BiLogoPostgresql, label: "PostgreSQL" },
    { icon: RiNextjsFill, label: "Next.js" },
  ];

  return (
    <div className="col-md-6" data-bs-theme="dark">
      <h1 data-aos="zoom-in">Minhas habilidades</h1>
      <div className={`d-flex flex-wrap gap-3 mt-3 justify-content-center`}>
        {skills.map((skill, index) => (
          <SkillIcon
            key={index}
            icon={skill.icon}
            label={skill.label}
            style={styles.tech}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
