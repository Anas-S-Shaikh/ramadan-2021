import React from "react";
import { Statistic } from "antd";
import './Countdown.style.scss'

const { Countdown } = Statistic;

// function onFinish() {
//   console.log("finished!");
// }

const CountdownComponent = (props) => {
  return (
    <div className="countdown">
      <Countdown title={props.title} value={props.deadline} />
    </div>
  );
};

export default CountdownComponent;
