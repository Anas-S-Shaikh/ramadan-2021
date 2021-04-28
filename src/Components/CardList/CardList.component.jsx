import { Card } from "antd";
import React, { useEffect, useState } from "react";
import "./CardList.style.scss";
const gridStyle = {
  width: "33.33%",
  textAlign: "center",
};

const CardList = (props) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString());
    };
    let intervalId = setInterval(() => {
      updateTime();
    }, 1000);
    return () => {
      clearInterval(intervalId)
    };
  });

  return (
    <div className="content">
      <Card>
        <Card.Grid hoverable={false} style={gridStyle}>
          <h4> {props.roza}</h4>
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          <h4>{time}</h4>
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          <h4> {new Date().toLocaleDateString()}</h4>
        </Card.Grid>
      </Card>
    </div>
  );
};

export default CardList;
