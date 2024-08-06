import React from "react";
import CardProfile from "../../components/CardProfile/CardProfile";
import RowDownIcon from "../../components/RowDownIcon";

const Home: React.FC = () => {
  return (
    <>
      <div id="inicio">
        <CardProfile />
        <RowDownIcon text="Role para baixo" />
      </div>
    </>
  );
};

export default Home;
