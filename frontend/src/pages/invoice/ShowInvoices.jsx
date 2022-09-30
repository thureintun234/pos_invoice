import { Col, Layout, Row, Space, Spin, Table, Typography } from "antd";
import React, { useState } from "react";

const { Title } = Typography;
const ShowInvoices = () => {
  const [invoices, setInvoices] = useState([
    {
      key: 1,
      customer_name: "shadow",
      sale_person: "david",
      price: 22000,
      note: "",
    },
    {
      key: 2,
      customer_name: "brian",
      sale_person: "john",
      price: 26000,
      note: "",
    },
    {
      key: 3,
      customer_name: "mpj",
      sale_person: "david",
      price: 12000,
      note: "God Of Javascript",
    },
  ]);

  const columns = [
    { title: "Id", dataIndex: "key" },
    { title: "Customer Name", dataIndex: "customer_name" },

    { title: "Sale Person", dataIndex: "sale_person" },
    { title: "Total Amount", dataIndex: "price" },
    { title: "Notes", dataIndex: "note" },
  ];

  return (
    <Spin spinning={false}>
      <Layout style={{ margin: "20px 40px" }}>
        <Space direction='vertical' size='middle'>
          <Row gutter={[16, 16]}>
            <Col xl={{ span: 21 }} md={{ span: 18 }}>
              <Title level={3}>Invoice List</Title>
            </Col>
          </Row>

          <Table
            bordered
            columns={columns}
            pagination={{ defaultPageSize: 10 }}
            dataSource={invoices}
          />
        </Space>
      </Layout>
    </Spin>
  );
};

export default ShowInvoices;
