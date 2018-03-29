import React, { Component } from "react";
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
      <div className="position">
        <LogoIcon myLogo={"myLogo.svg"} />
        <MyNavbar workPage={this.workPage} aboutMe={this.aboutMe} />
        {this.currentView}
      </div>
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
