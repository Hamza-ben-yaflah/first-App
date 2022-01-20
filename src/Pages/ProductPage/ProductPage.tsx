import React, { useState } from "react";
import { Table, Layout, Button } from "antd";
import Popup from "./Popup";

export interface DataType {
  key: number;
  name: string;
  quanlity: number;
  price: number;
}

const columns = [
  {
    title: "Id",
    dataIndex: "key",
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

const { Header } = Layout;

function ProductPage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [products, setProducts] = useState<DataType[]>([]);

  const addProduct = (newProduct: DataType) =>
    setProducts([...products, newProduct]);

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
      <Table columns={columns} dataSource={products} />
      {isOpen && <Popup handleClose={togglePopup} handleSubmit={addProduct} />}
    </div>
  );
}

export default ProductPage;
