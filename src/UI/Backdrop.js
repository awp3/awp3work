import React from "react";
import "../css/Backdrop.css";

const backdrop = props =>
  props.isShown ? <div className="Backdrop" onClick={props.clicked} /> : null;

export default backdrop;
