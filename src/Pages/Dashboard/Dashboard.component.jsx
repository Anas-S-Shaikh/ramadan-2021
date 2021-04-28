import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { dataSource } from "../../Components/Table-List/dataSource";
import Countdown from "../../Components/Countdown/Countdown.component";
import CardList from "../../Components/CardList/CardList.component";
import TimingCards from "../../Components/TimingCards/TimingCards.component";
import "./Dashboard.style.scss";
const now = new Date();
// now.setHours(20);

const getCurrentData = () => {
  let currentDetails = {};
  dataSource.forEach((cv) => {
    if (parseInt(cv.date.slice(0, 2)) === now.getDate()) {
      currentDetails.roza = cv.roza;
      currentDetails.iftar = cv.iftar;
      currentDetails.sehr = cv.sehr;
    }
  });
  return currentDetails;
};

const Dashboard = () => {
  const [counter, setCounter] = useState(true);
  const [currentRoza, setCurrentRoza] = useState({
    roza: "",
    iftar: "",
    sehr: "",
  });

  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState(0);

  useEffect(() => {
    setCurrentRoza(getCurrentData());
  }, []);

  useEffect(() => {
    const getDeadline = () => {
      // now.setHours(20);
      // console.log(now.getHours());

      const sehrTime = new Date().setHours(
        parseInt(currentRoza.sehr.slice(0, 1)),
        parseInt(currentRoza.sehr.slice(2, 4)),
        0
      );

      const iftarTime = new Date().setHours(
        parseInt(currentRoza.iftar.slice(0, 1)) + 12,
        parseInt(currentRoza.iftar.slice(2, 4)),
        0
      );

      if (now < sehrTime) {
        setCounter(true);
        setTitle("Sehr Finishing");
        setDeadline(sehrTime);
      } else if (now > sehrTime && now < iftarTime) {
        setCounter(true);
        setTitle("Iftar in");
        setDeadline(iftarTime);
      } else {
        setCounter(false);
        setTitle("");
        setDeadline(0);
      }
    };
    getDeadline();
    // setDeadline(getDeadline());
  }, [currentRoza.sehr, currentRoza.iftar]);
  return (
    <Row className="dashboard">
      <Col span={24}>
        <CardList roza={currentRoza.roza} />
      </Col>
      <Col span={24}>
        <TimingCards sehr={currentRoza.sehr} iftar={currentRoza.iftar} />
      </Col>
      <Col span={24}>
        {counter ? (
          <Countdown title={title} deadline={deadline} />
        ) : (
          <h1 style={{ textAlign: "center" }}>
            Hope you were fasting today! <br />{" "}
            <small style={{ fontSize: "0.8rem", color: "#7e7e7e" }}>
              (Countdown will be shown here)
            </small>
          </h1>
        )}
      </Col>
    </Row>
  );
};

export default Dashboard;
