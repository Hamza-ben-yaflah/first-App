import React, { useState } from "react";
import { Table, Layout, Button } from "antd";
import Popup from "./Popup";

const columns = [
  {
    title: "Id",
    dataIndex: "id",
  },

  {
    title: "Name",
    dataIndex: "name",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "Quanlity",
    dataIndex: "quanlity",
  },
  {
    title: "Price",
    dataIndex: "price",
  },
];
interface DataType {
  id: number;
  name: string;
  quanlity: number;
  price: number;
}
const data: DataType[] = [
  {
    id: 1,
    name: "Phone",
    quanlity: 32,
    price: 4000,
  },
  {
    id: 2,
    name: "Phome",
    quanlity: 42,
    price: 4000,
  },
  {
    id: 3,
    name: "Phome",
    quanlity: 32,
    price: 4000,
  },
  {
    id: 4,
    name: "Phone",
    quanlity: 99,
    price: 4000,
  },
];
const { Header } = Layout;

function ProductPage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <Header className="header">
        <Button type="primary" className="btn" onClick={togglePopup}>
          + New Product
        </Button>
      </Header>
      <Table columns={columns} dataSource={data} />
      {isOpen && <Popup handleClose={togglePopup} />}
    </div>
  );
}

export default ProductPage;
