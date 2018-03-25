import React from "react";
import "../css/LogoIcon.css";

const LogoIcon = props => {
  return (
    <div>
      <img className="style" src={props.myLogo} alt={"My logo icon"} />
    </div>
  );
};

export default LogoIcon;
