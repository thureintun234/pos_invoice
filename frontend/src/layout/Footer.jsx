import { Layout } from "antd";
import React from "react";

const Footer = () => {
  return (
    <Layout.Footer
      style={{
        backgroundColor: "var(--white-color)",
        textAlign: "center",
        fontWeight: "bold",
        color: "var(--primary-color)",
      }}>
      @2022 Copyright By Thu Rein Tun
    </Layout.Footer>
  );
};

export default Footer;
