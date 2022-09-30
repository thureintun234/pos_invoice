import { Layout, Space, Spin } from "antd";
import React from "react";

const DashboardApp = () => {
  return (
    <Spin spinning={false}>
      <Layout style={{ margin: "20px 40px" }}>
        <Space direction='vertical' size='middle'></Space>
      </Layout>
    </Spin>
  );
};

export default DashboardApp;
