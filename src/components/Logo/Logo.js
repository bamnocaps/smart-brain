import React from "react";
import panda from "./panda-face.png";
import Tilt from "react-tilt";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="Tilt br2 shadow-2" options={{ max: 25 }}>
        <img src={panda} alt="panda" />
      </Tilt>
    </div>
  );
};

export default Logo;
