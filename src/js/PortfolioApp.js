import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import "../css/PortfolioApp.css";
import LogoIcon from "./LogoIcon";
import MyNavbar from "./Navbar";
import GalleryList from "./GalleryList";
import Profile from "./Profile";

class PortfolioApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "work"
    };
  }

  workPage = () => {
    this.setState({
      currentView: "work"
    });
  };

  aboutMe = () => {
    this.setState({
      currentView: "aboutMe"
    });
  };

  get currentView() {
    if (this.state.currentView === "aboutMe") {
      return <Profile />;
    }
    return <GalleryList />;
  }

  render() {
    return (
      // <div className="position">
      //   <LogoIcon myLogo={"myLogo.svg"} />
      //   <MyNavbar workPage={this.workPage} aboutMe={this.aboutMe} />
      //   {this.currentView}
      // </div>

      <Grid>
        {/* my icon */}
        <Row className="show-grid">
          <Col xs={4} sm={4} md={4} />
          <Col xs={4} sm={4} md={4}>
            <LogoIcon myLogo={"myLogo.svg"} />
          </Col>
          <Col xs={4} sm={4} md={4} />
        </Row>

        {/* the navbar */}
        <Row className="show-grid">
          <Col
            xs={2}
            sm={2}
            md={2}
            // style={{ background: "pink", border: "1px solid purple" }}
          >
            {/* <code>&lt;{"Col xs={1} sm={2} md={2}"} /">">">">">">">">&gt;</code> */}
          </Col>
          <Col
            xs={8}
            sm={8}
            md={8}
            // style={{ background: "grey", border: "1px solid black" }}
          >
            <MyNavbar workPage={this.workPage} aboutMe={this.aboutMe} />
            {/* <code>&lt;{"Col xs={8} sm={8} md={8}"} /">">">">">">">">&gt;</code> */}
          </Col>
          <Col
            xs={2}
            sm={2}
            md={2}
            // style={{ background: "pink", border: "1px solid purple" }}
          >
            {/* <code>&lt;{"Col xs={1} sm={2} md={2}"} /">">">">">">">">&gt;</code> */}
          </Col>
        </Row>

        {/* <Row className="show-grid">
          <Col xs={6} xsOffset={6}>
            <code>&lt;{"Col xs={6} xsOffset={6}"} /">">">">">">">">&gt;</code>
          </Col>
        </Row> */}

        {/* <Row className="show-grid">
          <Col md={6} mdPush={9}>
            <code>&lt;{"Col md={6} mdPush={9}"} /">">">">">">">">&gt;</code>
          </Col>
          <Col md={6} mdPull={6}>
            <code>&lt;{"Col md={6} mdPull={6}"} /">">">">">">">">&gt;</code>
          </Col>
        </Row> */}
      </Grid>
    );
  }
}

export default PortfolioApp;

/**
 * -PortfolioApp
 *   -LogoIcon
 *   -Navbar
 *      -WebLink
 *   -ThumbnailGallery
 *      -Thumbnail
 *        -ThumbailImage
 *        -ThumbnailText
 *
 */
