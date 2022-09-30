import { Avatar, Button, Layout, Popover, Typography } from "antd";
import React from "react";
import {
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";

const { Header } = Layout;
const { Title } = Typography;

const text = (
  <Title level={4} style={{ textAlign: "center" }}>
    Profile
  </Title>
);

const Navbar = ({ collapsed, setCollapsed, content }) => {
  return (
    <Header
      style={{ paddingTop: "13px", backgroundColor: "var(--white-color)" }}
    >
      <Button
        style={{
          float: "left",
          backgroundColor: "var(--primary-color)",
          color: "var(--white-color)",
          marginRight: "3px",
        }}
        onClick={() => setCollapsed(!collapsed)}
      >
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>
      <Popover
        placement="bottom"
        content={content}
        title={text}
        trigger="click"
      >
        <Avatar
          style={{
            float: "right",
            backgroundColor: "var(--primary-color)",
            cursor: "pointer",
          }}
          icon={<UserOutlined />}
          size="large"
        />
      </Popover>
      <Title style={{ color: "var(--primary-color)" }} level={3}>
        InterAktiv Technology Pte Ltd
      </Title>
    </Header>
  );
};

export default Navbar;
