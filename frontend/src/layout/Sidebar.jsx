import { Layout, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import {
  DashboardOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const items = [
  {
    label: <Link to='/dashboard/app'>Dashboard</Link>,
    key: "Dashboard",
    icon: <DashboardOutlined />,
  },
  {
    label: <Link to='/dashboard/show-invoices'>Invoice List</Link>,
    key: "Invoice List",
    icon: <ShopOutlined />,
  },
  {
    label: <Link to='/dashboard/create-invoice'>Create Invoice</Link>,
    key: "Create Invoice",
    icon: <ShoppingCartOutlined />,
  },
];

const Sidebar = ({ collapsed }) => {
  return (
    <Sider
      collapsed={collapsed}
      style={{ backgroundColor: "var(--white-color)" }}>
      <Menu mode='inline' items={items} />
    </Sider>
  );
};

export default Sidebar;
