import React, { useState } from "react";
import { Button, Layout, Menu, Space, Typography } from "antd";
import { Link, Outlet, useNavigate } from "react-router-dom";
// ant design icons
import {
  DashboardOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import Navbar from "./Navbar";

const { Sider, Content, Footer } = Layout;
const { Title, Text } = Typography;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  const content = (
    <Space direction="vertical" style={{ textAlign: "center", width: "100%" }}>
      <Title level={5}>{"David"}</Title>
      <Text>{"david@gmail.com"}</Text>
      <Button danger onClick={() => {}}>
        Logout
      </Button>
    </Space>
  );

  const items = [
    {
      label: <Link to="/dashboard/app">Dashboard</Link>,
      key: "Dashboard",
      icon: <DashboardOutlined />,
    },
    {
      label: <Link to="/dashboard/show-invoices">Invoice List</Link>,
      key: "Invoice List",
      icon: <ShopOutlined />,
    },
    {
      label: <Link to="/dashboard/create-invoice">Create Invoice</Link>,
      key: "Create Invoice",
      icon: <ShoppingCartOutlined />,
    },
  ];

  return (
    <Layout>
      {/* navbar */}
      <Navbar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        content={content}
      />

      <Layout>
        {/* sidebar */}
        <Sider
          collapsed={collapsed}
          style={{ backgroundColor: "var(--white-color)" }}
        >
          <Menu mode="inline" items={items} />
        </Sider>

        {/* data layout */}
        <Layout>
          <Content style={{ minHeight: "520px" }}>
            <Outlet />
          </Content>

          {/* footer */}
          <Footer
            style={{
              backgroundColor: "var(--white-color)",
              textAlign: "center",
              fontWeight: "bold",
              color: "var(--primary-color)",
            }}
          >
            @2022 Copyright By Thu Rein Tun
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
