import React from "react";
import { IconType } from "react-icons";

interface SkillIconProps {
  icon: IconType;
  label: string;
  style: string;
}

const SkillIcon: React.FC<SkillIconProps> = ({ icon: Icon, label, style }) => {
  return (
    <div
      className={`${style} p-2 border rounded fs-4 fs-4-mobile`}
      data-aos="flip-left"
    >
      <Icon />
      {label}
    </div>
  );
};

export default SkillIcon;
