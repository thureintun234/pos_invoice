import {
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  Layout,
  Row,
  Select,
  Space,
  Spin,
  Table,
  Typography,
} from "antd";
import React, { useState } from "react";
import { SaveOutlined } from "@ant-design/icons";
import productJson from "../../_mock/products.json";

const { Header } = Layout;
const { Title } = Typography;

const CreateInvoice = () => {
  const [invoiceProducts, setInvoiceProducts] = useState([]);
  const [form] = Form.useForm();
  const { products } = productJson;

  const onFinish = (values) => {
    console.log(values);
  };

  const onDateChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const addSaleItem = (product) => {};

  const onProductSelectChange = (id) => {
    const filteredData = products.find((p) => p.key === Number(id));

    if (invoiceProducts.some((p) => p.key === Number(id))) return;
    setInvoiceProducts([...invoiceProducts, filteredData]);
  };

  const columns = [
    { title: "Id", dataIndex: "key" },
    { title: "Name", dataIndex: "name" },
    {
      title: "Picture",
      dataIndex: "picture",
      render: (_, record) => (
        <img src={record.picture} alt='product_image' width={80} height={50} />
      ),
    },
    { title: "Stock", dataIndex: "stock" },
    { title: "Price", dataIndex: "price" },
  ];

  return (
    <Spin spinning={false}>
      <Layout>
        <Header style={{ backgroundColor: "var(--primary-color)" }}>
          <Title
            style={{
              color: "var(--white-color)",
              textAlign: "center",
              marginTop: "13px",
            }}
            level={3}>
            Create Invoice
          </Title>
        </Header>

        <Layout
          style={{
            backgroundColor: "var(--white-color)",
            padding: "10px",
          }}>
          <Form form={form} onFinish={onFinish}>
            <Row justify='space-evenly' style={{ padding: "20px" }}>
              {/* cus name */}
              <Col span={10}>
                <Form.Item
                  name='customer_name'
                  label='Customer Name'
                  rules={[
                    {
                      required: true,
                    },
                  ]}>
                  <Input />
                </Form.Item>
              </Col>

              {/* sale person */}
              <Col span={10}>
                <Form.Item
                  name='sale_person'
                  label='Sale Person'
                  rules={[
                    {
                      required: true,
                    },
                  ]}>
                  <Input />
                </Form.Item>
              </Col>

              {/* date */}
              <Col span={10}>
                <Form.Item
                  name='date'
                  label='Date'
                  rules={[
                    {
                      required: true,
                    },
                  ]}>
                  <DatePicker onChange={onDateChange} />
                </Form.Item>
              </Col>

              {/* note */}
              <Col span={10}>
                <Form.Item name='note' label='Note'>
                  <Input.TextArea rows={3} />
                </Form.Item>
              </Col>

              <div style={{ width: "18%" }}>
                <Typography.Text
                  style={{
                    padding: "10px",
                    fontSize: "14px",
                    color: "var(--primary-color)",
                  }}>
                  Add Products
                </Typography.Text>
                <Select
                  showSearch
                  placeholder={"Search"}
                  optionFilterProp='children'
                  allowClear={true}
                  size='medium'
                  value={[]}
                  style={{
                    borderRadius: "10px",
                    width: "100%",
                  }}
                  onChange={onProductSelectChange}>
                  {products.map((p) => (
                    <Select.Option key={p.key}>
                      <Card
                        hoverable
                        style={{ width: 100 }}
                        cover={
                          <img
                            src={p.picture}
                            alt={p.name}
                            style={{ height: 60, width: 100 }}
                          />
                        }
                        onClick={() => addSaleItem(p)}>
                        <Card.Meta title={p.name} description={p.price} />
                      </Card>
                    </Select.Option>
                  ))}
                </Select>
              </div>

              <Col span={24}>
                <Table
                  bordered
                  columns={columns}
                  pagination={{ pageSize: 10 }}
                  dataSource={invoiceProducts}
                />
              </Col>
            </Row>

            <div style={{ float: "right" }}>
              <Button
                style={{
                  backgroundColor: "var(--primary-color)",
                  color: "var(--white-color)",
                  borderRadius: "10px",
                }}
                htmlType='submit'
                size='large'>
                <SaveOutlined />
                Save
              </Button>
            </div>
          </Form>
        </Layout>
      </Layout>
    </Spin>
  );
};

export default CreateInvoice;
