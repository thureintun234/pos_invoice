import React, { useState } from "react";
import { Button, Layout, Space, Typography } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/actions";

const { Content } = Layout;
const { Title, Text } = Typography;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth/login", { replace: true });
  };

  const content = (
    <Space direction='vertical' style={{ textAlign: "center", width: "100%" }}>
      <Title level={5}>{auth?.user?.name}</Title>
      <Text>{auth?.user?.email}</Text>
      <Button danger onClick={handleLogout}>
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
