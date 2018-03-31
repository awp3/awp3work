import React, { Component } from "react";
import { Thumbnail } from "react-bootstrap";
import "../css/Thumbnail.css";

export default class MyThumbnail extends Component {
  render() {
    return (
      // <Thumbnail className="thumbnailSize">
      //   <div className="mockImage">
      //     <img src={this.props.thumbnail} alt={this.props.title} />
      //   </div>
      //   <h3 className="text">{this.props.title}</h3>
      // </Thumbnail>

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
