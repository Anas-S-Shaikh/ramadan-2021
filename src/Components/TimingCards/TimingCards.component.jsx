import { Card, Col, Row, Statistic } from "antd";
import React from "react";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import './TimingCards.style.scss'

const TimingCards = (props) => {
  return (
    <div className="timing-cards">
      <Row gutter={16}>
        <Col span={12}>
          <Card>
            <Statistic
              title="Finishing Sehr"
              value={props.sehr}
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
              value={props.iftar}
              precision={2}
              valueStyle={{ color: "#3f8600", fontSize: "1rem" }}
              prefix={<ArrowDownOutlined />}
              suffix="PM"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default TimingCards;
