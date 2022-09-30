import { Card, Col, Layout, Row, Space, Spin, Typography } from "antd";
import React from "react";
import { DollarCircleOutlined, LineChartOutlined } from "@ant-design/icons";
import ShowText from "../components/ShowText";

const { Title, Text } = Typography;
const DashboardApp = () => {
  const iconStyle = {
    fontSize: "30px",
    color: "var(--white-color)",
    padding: "0px",
    margin: "0px",
  };
  const statusCardStyle = {
    width: "100%",
    border: "1px solid var(--border-color)",
    borderRadius: "8px",
    padding: "1px",
  };

  return (
    <Spin spinning={false}>
      <Layout style={{ margin: "20px 40px" }}>
        <Space direction='vertical' size='middle'>
          <Title level={3}>Invoice Revenues</Title>

          <Space
            direction='vertical'
            style={{
              width: "100%",
              justifyContent: "right",
            }}>
            <Row gutter={[8, 8]}>
              {/* total revenue */}
              <Col
                xl={{ span: 4 }}
                md={{ span: 8 }}
                style={{ marginRight: "40px" }}>
                <Card
                  title={"Total Revenue"}
                  bordered={true}
                  style={statusCardStyle}>
                  <Space>
                    <Card
                      style={{
                        backgroundColor: "var(--primary-color)",
                        borderRadius: "5px",
                      }}>
                      <DollarCircleOutlined style={iconStyle} />
                    </Card>
                    <ShowText text={12000} />
                  </Space>
                </Card>
              </Col>

              {/* total profit */}
              <Col
                xl={{ span: 4 }}
                md={{ span: 8 }}
                style={{ marginRight: "40px" }}>
                <Card
                  title={"Yearly Income"}
                  bordered={true}
                  style={statusCardStyle}>
                  <Space>
                    <Card
                      style={{
                        backgroundColor: "var(--yellow-color)",
                        borderRadius: "5px",
                      }}>
                      <LineChartOutlined style={iconStyle} />
                    </Card>
                    <ShowText text={12000} />
                  </Space>
                </Card>
              </Col>

              {/* total profit */}
              <Col
                xl={{ span: 4 }}
                md={{ span: 8 }}
                style={{ marginRight: "40px" }}>
                <Card
                  title={"Monthy Income"}
                  bordered={true}
                  style={statusCardStyle}>
                  <Space>
                    <Card
                      style={{
                        backgroundColor: "var(--label-color)",
                        borderRadius: "5px",
                      }}>
                      <LineChartOutlined style={iconStyle} />
                    </Card>
                    <ShowText text={12000} />
                  </Space>
                </Card>
              </Col>

              {/* daily */}
              <Col
                xl={{ span: 4 }}
                md={{ span: 8 }}
                style={{ marginRight: "40px" }}>
                <Card
                  title={"Daily Income"}
                  bordered={true}
                  style={statusCardStyle}>
                  <Space>
                    <Card
                      style={{
                        backgroundColor: "var(--green-color)",
                        borderRadius: "5px",
                      }}>
                      <LineChartOutlined style={iconStyle} />
                    </Card>
                    <ShowText text={12000} />
                  </Space>
                </Card>
              </Col>
            </Row>
          </Space>
        </Space>
      </Layout>
    </Spin>
  );
};

export default DashboardApp;
