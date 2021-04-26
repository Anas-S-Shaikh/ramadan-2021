import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Typography, Layout } from "antd";
import Table from "../../Components/Table-List/Table.component";
import MenuList from "../../Components/Menu-List/MenuList.component";
import "./Homepage.style.scss";
import Dashboard from "../../Components/Dashboard/Dashboard.component";

const { Content, Footer, Header, Sider } = Layout;
const { Title } = Typography;

const Homepage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (collapsed) => {
    // console.log(collapsed);
    setCollapsed(collapsed);
  };
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        collapsible
        defaultCollapsed
        collapsed={collapsed}
        onCollapse={onCollapse}
      >
        <MenuList />
      </Sider>
      <Layout className="layout">
        <Header
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Title level={2} style={{ margin: "0" }}>
            Ramdan 2021
          </Title>
        </Header>
        <Content style={{ minHeight: "80vh" }}>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/table" component={Table} />
          </Switch>
        </Content>
        <Footer style={{ textAlign: "center" }}>Created by Anas Shaikh</Footer>
      </Layout>
    </Layout>
  );
};

export default Homepage;
