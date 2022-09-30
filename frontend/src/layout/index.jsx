import React, { useState } from "react";
import { Button, Layout, Space, Typography } from "antd";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const { Content } = Layout;
const { Title, Text } = Typography;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  const content = (
    <Space direction='vertical' style={{ textAlign: "center", width: "100%" }}>
      <Title level={5}>{"David"}</Title>
      <Text>{"david@gmail.com"}</Text>
      <Button danger onClick={() => {}}>
        Logout
      </Button>
    </Space>
  );

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
        <Sidebar collapsed={collapsed} />

        <Layout>
          {/* data layout */}
          <Content style={{ minHeight: "520px" }}>
            <Outlet />
          </Content>

          {/* footer */}
          <Footer />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
