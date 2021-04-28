import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

import { DashboardOutlined, TableOutlined } from "@ant-design/icons";

const MenuList = (props) => {
  return (
    <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
      <Menu.Item
        onClick={() => {
          props.handleClick(true);
        }}
        key="1"
        icon={<DashboardOutlined />}
      >
        <Link to="/">Dashboard</Link>
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          props.handleClick(true);
        }}
        key="2"
        icon={<TableOutlined />}
      >
        <Link to="/table">Time-Table</Link>
      </Menu.Item>
      {/* <Menu.Item key="3" icon={<UploadOutlined />}>
        nav 3
      </Menu.Item>
      <Menu.Item key="4" icon={<UserOutlined />}>
        nav 4
      </Menu.Item> */}
    </Menu>
  );
};

export default MenuList;
