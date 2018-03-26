import React from "react";
import "../css/SelectedWork.css";

const selectedWork = props => {
  if (props.showWork === null) {
    return "";
  }

  return (
    <div className="modalStyling">
      <img
        id="turnOff"
        className="closeButton"
        src="x-mark.svg"
        alt="close button"
        onClick={props.clicked}
      />
      <h2 className="centerHeadlineText">{props.showWork.title}</h2>
      <div className="modalContents">
        <h3>Challenge</h3>
        <p>{props.showWork.challenge}</p>
        <h3>Solution</h3>
        <p>{props.showWork.solution}</p>
        <h3>Responsibilities</h3>
        <p>{props.showWork.responsibilities}</p>
        <div className="imageLayout">
          <img className="modalImage" src="cinelist.png" alt="test for now" />
          <img className="modalImage" src="cinelist.png" alt="test for now" />
          <img className="modalImage" src="cinelist.png" alt="test for now" />
          <img className="modalImage" src="cinelist.png" alt="test for now" />
          <img className="modalImage" src="cinelist.png" alt="test for now" />
          <img className="modalImage" src="cinelist.png" alt="test for now" />
        </div>
      </div>
    </div>
  );
};

export default selectedWork;
