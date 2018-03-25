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
        <p>
          Bacon ipsum dolor amet frankfurter shankle swine, kevin leberkas
          pancetta filet mignon fatback cow andouille tail ham hock pork loin
          boudin. Landjaeger jerky bacon cow sirloin ribeye beef. Chicken
          porchetta tail chuck alcatra, strip steak filet mignon. Hamburger
        </p>
        <h3>Solution</h3>
        <p>
          Bacon ipsum dolor amet frankfurter shankle swine, kevin leberkas
          pancetta filet mignon fatback cow andouille tail ham hock pork loin
          boudin. Landjaeger jerky bacon cow sirloin ribeye beef. Chicken
          porchetta tail chuck alcatra, strip steak filet mignon. Hamburge
        </p>
        <h3>Responsibilities</h3>
        <p>
          Bacon ipsum dolor amet frankfurter shankle swine, kevin leberkas
          pancetta filet mignon fatback cow andouille tail ham hock pork loin
          boudin. Landjaeger jerky bacon cow sirloin ribeye beef. Chicken
          porchetta tail chuck alcatra, strip steak filet mignon. Hamburger
        </p>
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
