import React, { Component } from "react";

class Bank extends Component {
  render() {
    return (
      <div className={this.props.cName}>
        <p>{this.props.val}</p>
      </div>
    );
  }
}

export default Bank;
