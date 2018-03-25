import React from "react";
import Backdrop from "../UI/Backdrop";
import "../css/Modal.css";

const modal = props => {
  return (
    <div>
      <Backdrop isShown={props.isShown} clicked={props.modalClosed} />
      <div
        className="Modal"
        style={{
          transform: props.isShown ? "scale(1)" : "scale(0)",
          opacity: props.isShown ? "1" : "0"
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default modal;
