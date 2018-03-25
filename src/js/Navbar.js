import React, { Component } from "react";
import "../css/Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navigation">
        <a className="webButtons" href="https://github.com/awp3">
          <img className="imageAdjust" src="github.svg" alt="github icon" />
        </a>
        <div className="webButtons" onClick={this.props.aboutMe}>
          about me
        </div>
        <a className="webButtons" href="https://www.linkedin.com/in/ahartp3/">
          <img className="imageAdjust" src="linkedIn.svg" alt="linkedin icon" />
        </a>
        <div className="webButtons" onClick={this.props.workPage}>
          work
        </div>
        <a className="webButtons" href="mailto:apowersiii@me.com">
          <img className="imageAdjust" src="mail.svg" alt="mail icon" />
        </a>
      </nav>
    );
  }
}
