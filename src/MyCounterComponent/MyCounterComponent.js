import React, { Component } from "react";
import Display from "../CounterDisplayerComponent/CounterDisplayerComponent";
import EvenDisplay from "../EvenCounterDisplayComponent/EvenCounterDisplayComponent";
import "./MyCounterComponent.css";
export default class MyCounterComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      count: 0,
      evenClick: 0,
    };
  }

  allClicksCounter = () => {
    console.log("Count");
    this.setState({
      count: this.state.count + 1,
    });
    if ((this.state.count + 1) % 2 === 0) {
      this.setState({
        evenClick: this.state.count + 1,
      });
    }
  };

  render() {
    return (
      <div>
        <button type="" onClick={this.allClicksCounter}>
          {" "}
          Click Me
        </button>
        <Display Text="All Clicks Counter:" Counter={this.state.count} />

        <EvenDisplay Text="Even Clicks Count:" Even={this.state.evenClick} />
      </div>
    );
  }
}
