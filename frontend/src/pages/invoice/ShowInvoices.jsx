import { Col, Layout, Row, Space, Spin, Table, Typography } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { getInvoices } from "../../store/actions";

const { Title } = Typography;
const ShowInvoices = () => {
  const invoices = useSelector((state) => state.invoice.invoices);
  const status = useSelector((state) => state.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInvoices());
  }, [dispatch]);

  const columns = [
    { title: "Id", dataIndex: "key" },
    { title: "Customer Name", dataIndex: "customer_name" },

    { title: "Sale Person", dataIndex: "sale_person" },
    {
      title: "Total Amount",
      dataIndex: "price",
      render: (_, record) => {
        const total = record.products.reduce(
          (sum, product) => sum + product.price * product.stock,
          0
        );

        return <div>{total}</div>;
      },
    },
    { title: "Notes", dataIndex: "note" },
  ];

  return (
    <Spin spinning={status.loading}>
      {status.success && (
        <div>
          <ToastContainer />
        </div>
      )}
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
