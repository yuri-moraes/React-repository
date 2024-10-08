interface StarsMecProps {
  dataOS: string;
}

const StarsMec: React.FC<StarsMecProps> = ({ dataOS }) => {
  return (
    <>
      <span className="course-star active">
        <svg
          data-aos={dataOS}
          width="17"
          height="17"
          fill="#FAB500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12.9 2.6l2.3 5c0.1 0.3 0.4 0.5 0.7 0.6l5.2 0.8C22 9 22.3 10 21.7 10.6l-3.8 3.9c-0.2 0.2-0.3 0.6-0.3 0.9l0.9 5.4c0.1 0.8-0.7 1.5-1.4 1.1l-4.7-2.6c-0.3-0.2-0.6-0.2-0.9 0l-4.7 2.6c-0.7 0.4-1.6-0.2-1.4-1.1l0.9-5.4c0.1-0.3-0.1-0.7-0.3-0.9l-3.8-3.9C1.7 10 2 9 2.8 8.9l5.2-0.8c0.3 0 0.6-0.3 0.7-0.6l2.3-5C11.5 1.8 12.5 1.8 12.9 2.6z"></path>
        </svg>
      </span>
    </>
  );
};

export default StarsMec;
