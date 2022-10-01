import { Col, Layout, Row, Space, Spin, Table, Typography } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import IconButton from "../../components/IconButton";
import { deleteInvoice, getInvoices } from "../../store/actions";
import { DeleteOutlined } from "@ant-design/icons";

const { Title } = Typography;
const ShowInvoices = () => {
  const invoices = useSelector((state) => state.invoice.invoices);
  const status = useSelector((state) => state.status);
  const dispatch = useDispatch();

  const handleDeleteInvoice = (id) => {
    const confirm = window.confirm("Delete Invoice?");
    if (confirm) {
      dispatch(deleteInvoice(id));
      dispatch(getInvoices());

      toast.success("Invoice deleted successfully");
    }
  };

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
    {
      title: "Actions",
      dataIndex: "key",
      render: (key) => (
        <Space direction='horizontal'>
          <IconButton
            icon={<DeleteOutlined />}
            bgColor='var(--red-color)'
            onClick={() => handleDeleteInvoice(key)}>
            {" "}
          </IconButton>
        </Space>
      ),
    },
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
