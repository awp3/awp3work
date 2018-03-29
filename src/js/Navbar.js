import React, { Component } from "react";
import { Navbar, NavItem, Nav } from "react-bootstrap";
import "../css/Navbar.css";

export default class MyNavbar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header />
        <Nav>
          <NavItem eventKey={1} href="https://github.com/awp3">
            <img className="imageAdjust" src="github.svg" alt="github icon" />
          </NavItem>
          <NavItem
            eventKey={2}
            href="#"
            onClick={this.props.aboutMe}
            className="fontStyling"
          >
            about me
          </NavItem>
          <NavItem eventKey={3} href="https://www.linkedin.com/in/ahartp3/">
            <img
              className="imageAdjust"
              src="linkedIn.svg"
              alt="linkedIn icon"
            />
          </NavItem>
          <NavItem
            eventKey={4}
            href="#"
            onClick={this.props.workPage}
            className="fontStyling"
          >
            work
          </NavItem>
          <NavItem eventKey={5} href="mailto:apowersiii@me.com">
            <img className="imageAdjust" src="mail.svg" alt="mail icon" />
          </NavItem>
        </Nav>
      </Navbar>

      // old code
      // <nav className="navigation">
      //   <a className="webButtons" href="https://github.com/awp3">
      //     <img className="imageAdjust" src="github.svg" alt="github icon" />
      //   </a>
      //   <div className="webButtons" onClick={this.props.aboutMe}>
      //     about me
      //   </div>
      //   <a className="webButtons" href="https://www.linkedin.com/in/ahartp3/">
      //     <img className="imageAdjust" src="linkedIn.svg" alt="linkedin icon" />
      //   </a>
      //   <div className="webButtons" onClick={this.props.workPage}>
      //     work
      //   </div>
      //   <a className="webButtons" href="mailto:apowersiii@me.com">
      //     <img className="imageAdjust" src="mail.svg" alt="mail icon" />
      //   </a>
      // </nav>
    );
  }
}
