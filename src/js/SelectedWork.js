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
        <h3 className="overrideHeaders">Challenge</h3>
        <p>{props.showWork.challenge}</p>
        <h3 className="overrideHeaders">Solution</h3>
        <p>{props.showWork.solution}</p>
        <h3 className="overrideHeaders">Responsibilities</h3>
        <p>{props.showWork.responsibilities}</p>
        <div className="imageLayout">
          {props.showWork.workContent["video"].map((element, index) => {
            return <embed src={element} width="640" height="360" />;
          })}
          {props.showWork.workContent["image"].map((element, index) => {
            return (
              <img
                className="modalImage"
                key={index}
                src={element}
                alt={props.showWork.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default selectedWork;
