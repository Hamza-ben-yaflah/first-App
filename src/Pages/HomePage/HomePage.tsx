import React from "react";
import { Layout, Button } from "antd";
import { Link } from "react-router-dom";
import "./HomePage.css";
import logo from "./logo.jpg";

const { Header } = Layout;

function Home() {
  return (
    <Layout className="layout">
      <Header className="header">
        <Link to="/Users">
          <Button type="link">Users</Button>
        </Link>
        <Link to="/Product">
          <Button type="link">Product</Button>
        </Link>
        <img alt="" width={50} height={50} src={logo} className="img" />
      </Header>
    </Layout>
  );
}

export default Home;
