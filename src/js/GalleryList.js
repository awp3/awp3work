import React, { Component } from "react";
import "../css/GalleryList.css";
import Thumbnail from "./Thumbnail";
import Works from "../data/works.json";
import Modal from "../UI/Modal";
import SelectedWork from "../js/SelectedWork";

export default class GalleryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      works: Works,
      selectedEntry: null,
      showing: false
    };
  }

  clickHandler = (idx, work) => {
    const newState = JSON.parse(JSON.stringify(this.props));
    newState.selectedEntry = work;
    document.body.classList.add("bodyModal");
    this.setState({
      selectedEntry: work,
      showing: true
    });
  };

  clickCancelHandler = () => {
    this.setState({ showing: false });
    document.body.classList.remove("bodyModal");
  };

  render() {
    const portfolio = this.state.works.map((work, index) => {
      return (
        <Thumbnail
          key={index}
          title={work.title}
          thumbnail={work.thumbnail}
          showMe={() => this.clickHandler(index, work)}
        />
      );
    });
    return (
      <div className="galleryStyle">
        <Modal
          isShown={this.state.showing}
          modalClosed={this.clickCancelHandler}
        >
          <SelectedWork
            showWork={this.state.selectedEntry}
            clicked={this.clickCancelHandler}
          />
        </Modal>
        {portfolio}
      </div>
    );
  }
}
