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
        {/* *****my icon***** */}
        <Row className="show-grid">
          <Col xs={4} sm={4} md={4} />
          <Col xs={4} sm={4} md={4}>
            <LogoIcon myLogo={"myLogo.svg"} />
          </Col>
          <Col xs={4} sm={4} md={4} />
        </Row>

        {/* *****the navbar***** */}
        <Row className="show-grid">
          <Col xs={2} sm={2} md={2} />
          <Col xs={8} sm={8} md={8}>
            <MyNavbar workPage={this.workPage} aboutMe={this.aboutMe} />
          </Col>
          <Col xs={2} sm={2} md={2} />
        </Row>

        {/* *****work gallery***** */}
        <Row className="show-grid">
          <Col xsHidden smHidden mdHidden style={{ backgroundColor: "gray" }} />
          <Col xs={12} sm={12} md={12}>
            {this.currentView}
          </Col>
          <Col xsHidden smHidden mdHidden style={{ backgroundColor: "gray" }} />
        </Row>
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
