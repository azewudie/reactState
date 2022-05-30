import React from "react";
import "./IncreaseDecreasCountComponentDisplayer.css";
export default function IncreasedecreaseCountComponentDisplayer(props) {
  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">
        {props.Text}
        {props.count}
      </div>
    </div>
  );
}
