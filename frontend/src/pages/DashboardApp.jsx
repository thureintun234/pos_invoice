import { Card, Col, Layout, Row, Space, Spin, Typography } from "antd";
import React, { useEffect } from "react";
import { DollarCircleOutlined, LineChartOutlined } from "@ant-design/icons";
import ShowText from "../components/ShowText";
import { useDispatch, useSelector } from "react-redux";
import { getInvoices } from "../store/actions";
import ReactApexChart from "react-apexcharts";

// today date formated function
const todayFormattedDate = () => {
  const day = new Date().getDay() - 5;
  const month = new Date().getMonth() + 1;
  const formatedDay = day < 10 ? `0${day}` : day;
  const formatedMonth = month < 10 ? `0${month}` : month;
  const year = new Date().getFullYear();
  return `${year}-${formatedMonth}-${formatedDay}`;
};

const { Title } = Typography;
const DashboardApp = () => {
  const invoices = useSelector((state) => state.invoice.invoices);
  const status = useSelector((state) => state.status);
  // total rev
  const invProducts = invoices?.map((inv) => inv.products);
  const totalInvProductsArray = invProducts?.map((product) =>
    product.reduce((sum, pro) => sum + pro.stock * pro.price, 0)
  );
  const totalRevune = totalInvProductsArray?.reduce(
    (sum, total) => sum + total,
    0
  );
  // today rev
  const todayDate = todayFormattedDate();
  const todayInvoices = invoices?.find((inv) => inv.date === todayDate);
  const todayRevunue = todayInvoices?.products.reduce(
    (sum, p) => sum + p.price * p.stock,
    0
  );

  const dispatch = useDispatch();

  // apex charts options
  const options = {
    series: [
      {
        name: "Sales",
        data: totalInvProductsArray,
        // data: [
        //   20000, 1000, 2000, 50000, 21000, 36000, 28000, 23000, 14000, 8000,
        //   2000, 6000,
        // ],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + " MMK";
        },
        offsetY: -20,
        style: {
          fontSize: "10px",
          colors: ["gray"],
          // colors: ["#304758"],
        },
      },

      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        position: "top",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          },
        },
      },
      title: {
        text: "Monthly Sale Of Invoices, 2022",
        floating: true,
        offsetY: 330,
        align: "center",
        style: {
          color: "#444",
        },
      },
    },
  };

  useEffect(() => {
    dispatch(getInvoices());
  }, [dispatch]);

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
    <Spin spinning={status.loading}>
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
                    <ShowText text={totalRevune} />
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
                    <ShowText text={todayRevunue} />
                  </Space>
                </Card>
              </Col>
            </Row>

            <Row style={{ backgroundColor: "white", marginTop: "20px" }}>
              <Col span={20}>
                <ReactApexChart
                  options={options.options}
                  series={options.series}
                  type='bar'
                  height={350}
                />
              </Col>
            </Row>
          </Space>
        </Space>
      </Layout>
    </Spin>
  );
};

export default DashboardApp;
