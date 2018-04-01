import React, { Component } from "react";
import { Thumbnail } from "react-bootstrap";
import "../css/Thumbnail.css";

export default class MyThumbnail extends Component {
  render() {
    return (
      <Thumbnail
        className="thumbnailSize, mockImage"
        src={this.props.thumbnail}
        alt={this.props.title}
        onClick={this.props.showMe}
      >
        <h3 className="text">{this.props.title}</h3>
      </Thumbnail>
    );
  }
}
