import { Layout, Space, Typography } from "antd";
import React from "react";

const { Title } = Typography;
const Page404 = () => {
  return (
    <Layout
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}>
      <Space direction='vertical' size='middle'>
        <Title style={{ textAlign: "center", color: "gray" }}>
          404 Not Found
        </Title>
      </Space>
    </Layout>
  );
};

export default Page404;
