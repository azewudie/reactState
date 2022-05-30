import React, { Component } from "react";

export default class CounterDisplayerComponent extends Component {
  render() {
    return (
      <div>
        {this.props.Text}
        {this.props.Counter}
      </div>
    );
  }
}
