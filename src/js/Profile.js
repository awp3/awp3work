import React, { Component } from "react";
import "../css/Profile.css";

export default class Profile extends Component {
  render() {
    return (
      <div className="aboutMeStyle">
        <div>
          <img
            className="imageFormat"
            src="myProfilePictv02.png"
            alt="profile of me"
          />
        </div>
        <div className="makeColumn">
          <p className="paragraphStyling">
            As a software engineer and designer, my motivation is to find
            effective ways to help ease people's use of interactive technology.
            This especially interests me when it comes to accessibility and data
            visualization.
          </p>
          <p className="paragraphStyling">
            At the start of my career, I worked in the visual effects industry
            for a few years as a compositor and matchmover. I then moved to
            Japan and became a Business English Teacher while doing freelance
            effects work in my free time.
          </p>
          <p className="paragraphStyling">
            I want to grow my front end experience in React as well as HTML,
            CSS, and Javascript. I also want to continue to create apps in Swift
            in the hopes of promoting Japan and its beautiful culture.
          </p>
        </div>
      </div>
    );
  }
}
