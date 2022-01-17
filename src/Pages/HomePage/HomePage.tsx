import React from "react";
import { Layout, Button } from "antd";
import "./HomePage.css";
import logo from "./logo.jpg";

const { Header } = Layout;

function Home() {
  return (
    <Layout className="layout">
      <Header className="header">
        <Button type="link">Home</Button>
        <Button type="link">Product</Button>
        <img alt="" width={50} height={50} src={logo} className="img" />
      </Header>
    </Layout>
  );
}

export default Home;
