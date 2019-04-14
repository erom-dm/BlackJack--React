import React, { Component } from "react";

class Card extends Component {
  render() {
    let className = this.props.headsUp === true ? "heads-up" : "heads-down";
    return <div className={`card ${className}`}> {this.props.value} </div>;
  }
}

export default Card;
