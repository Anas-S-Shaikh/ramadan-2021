import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const MenuList = () => {
  return (
    <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        <Link to="/">Dashboard</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<VideoCameraOutlined />}>
        <Link to="/table">Time-Table</Link>
      </Menu.Item>
      <Menu.Item key="3" icon={<UploadOutlined />}>
        nav 3
      </Menu.Item>
      <Menu.Item key="4" icon={<UserOutlined />}>
        nav 4
      </Menu.Item>
    </Menu>
  );
};

export default MenuList;
