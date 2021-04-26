import React from "react";
import { Statistic } from "antd";
import './Countdown.style.scss'

const { Countdown } = Statistic;
// console.log(deadline);
// const now = new Date();
// console.log('before setting');
// console.log(now);

// now.setHours(23,58,0);
// // now.setMinutes(57);
// // console.log('After setting');
// console.log(now.getTime());

// // const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK
// const deadline = now.getTime();
// console.log(deadline);


function onFinish() {
  console.log("finished!");
}

const CountdownComponent = (props) => {
    // console.log(props.deadline);
  return (
    <div className="countdown">
      <Countdown title={props.title} className={props.visible} value={props.deadline} onFinish={onFinish} />
    </div>
  );
};

export default CountdownComponent;
