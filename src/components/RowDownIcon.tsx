import React, { useEffect } from "react";
import AOS from "aos";

interface RowDownIconProps {
  text: string;
}

const RowDownIcon: React.FC<RowDownIconProps> = ({ text }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="d-flex justify-content-center">
      <p
        data-aos="fade-down"
        data-aos-offset="300"
        data-aos-duration="500"
        className="d-flex gap-3 flex-column"
      >
        {text}{" "}
        <i
          style={{ transition: "transform 0.3s ease-in-out" }}
          className={`bi bi-arrow-down-circle fs-1 d-flex justify-content-center`}
        ></i>
      </p>
    </div>
  );
};

export default RowDownIcon;
