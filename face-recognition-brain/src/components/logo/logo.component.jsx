import React from "react";
import Tilt from "react-parallax-tilt";

import brain from "./brain.png";
import "./logo.styles.scss";

const Logo = () => {
  return (
    <div className="ma4 mt0 w-10">
      <Tilt tiltMaxAngleX={45} tiltMaxAngleY={45}>
        <div className="tilt">
          <img className="brain-logo" src={brain} alt="pixel brain" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
