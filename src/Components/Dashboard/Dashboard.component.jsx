import React, { useEffect, useState } from "react";
import { Row, Col, Statistic, Card } from "antd";
import { dataSource } from "../Table-List/dataSource";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import "./Dashboard.style.scss";
import Countdown from "../Countdown/Countdown.component";
// const { Text, Title } = Typography;
const now = new Date();
// now.setHours(4);

const getCurrentData = () => {
  let currentDetails = {};
  dataSource.map((cv) => {
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

  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState(0);

  useEffect(() => {
    setCurrentRoza(getCurrentData());
  }, []);

  useEffect(() => {
    const getDeadline = () => {
      // now.setHours(20);
      console.log(now.getHours());

      const sehrTime = new Date().setHours(
        parseInt(currentRoza.sehr.slice(0, 1)),
        parseInt(currentRoza.sehr.slice(2, 4)),
        0
      );

      const iftarTime = new Date().setHours(
        parseInt(currentRoza.iftar.slice(0, 1)) + 12,
        parseInt(currentRoza.iftar.slice(2, 4)) + 12,
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

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString());
    };

    setInterval(() => {
      updateTime();
    }, 1000);
  });

  const gridStyle = {
    width: "33%",
    textAlign: "center",
  };

  return (
    <Row className="dashboard">
      <Col span={24}>
        <div className="content">
          <Card>
            <Card.Grid style={gridStyle}>
              <h4> {currentRoza.roza}</h4>
            </Card.Grid>
            <Card.Grid style={gridStyle}>
              <h4>{time}</h4>
            </Card.Grid>
            <Card.Grid style={gridStyle}>
              <h4> {now.toLocaleDateString()}</h4>
            </Card.Grid>
          </Card>
        </div>
        <div className="site-statistic-demo-card">
          <Row gutter={16}>
            <Col span={12}>
              <Card>
                <Statistic
                  title="Finishing Sehr"
                  value={currentRoza.sehr}
                  precision={2}
                  valueStyle={{ color: "#cf1322", fontSize: "1rem" }}
                  prefix={<ArrowUpOutlined />}
                  suffix="AM"
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card>
                <Statistic
                  title="Iftar Time"
                  value={currentRoza.iftar}
                  precision={2}
                  valueStyle={{ color: "#3f8600", fontSize: "1rem" }}
                  prefix={<ArrowDownOutlined />}
                  suffix="PM"
                />
              </Card>
            </Col>
          </Row>
        </div>
      </Col>
      <Col span={24}>
        {counter ? (
          <Countdown title={title} visible={counter} deadline={deadline} />
        ) : (
          <h1>Happy Ramadan</h1>
        )}
      </Col>
    </Row>
  );
};

export default Dashboard;
