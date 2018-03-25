import React, { Component } from "react";
import "../css/Thumbnail.css";

export default class Thumbnail extends Component {
  render() {
    return (
      <div className="thumbnailSize" onClick={this.props.showMe}>
        <div className="mockImage">
          <img src={this.props.thumbnail} alt={this.props.title} />
        </div>
        <div className="text">
          <p>{this.props.title}</p>
        </div>
      </div>
    );
  }
}
