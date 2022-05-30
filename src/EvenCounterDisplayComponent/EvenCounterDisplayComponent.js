import React, { Component } from "react";

export default class EvenCounterDisplayComponent extends Component {
  render() {
    return (
      <div>
        {this.props.Text}
        {this.props.Even}
      </div>
    );
  }
}
