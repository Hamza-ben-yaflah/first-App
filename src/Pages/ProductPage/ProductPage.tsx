import React, { useState } from "react";
import { Table, Layout, Button, Space } from "antd";
import Popup from "../Popup/Popup";

export interface DataType {
  key: number;
  name: string;
  quanlity: number;
  price: number;
}

const { Header } = Layout;

function ProductPage() {
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
    {
      title: "Action",
      key: "action",
      render: (text: string, record: DataType) => (
        <Space size="middle">
          <Button
            type="primary"
            className="btn"
            onClick={() => {
              setIsOpen(true);
              setProductToEdit(record);
            }}
          >
            Edit
          </Button>
          <Button
            type="primary"
            className="btn"
            onClick={() => deleteProduct(record)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [products, setProducts] = useState<DataType[]>([]);
  const [productToEdit, setProductToEdit] = useState<DataType | undefined>();

  const addProduct = (newProduct: DataType, isEditMode: boolean) => {
    isEditMode
      ? setProducts(
          products.map((p) => {
            if (p.key === newProduct.key) return newProduct;

            return p;
          })
        )
      : setProducts([...products, newProduct]);
  };

  const deleteProduct = (product: DataType) => {
    setProducts(products.filter((p) => p.key !== product.key));
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
    setProductToEdit(undefined);
  };

  return (
    <div className="container">
      <Header className="header">
        <Button type="primary" className="btn" onClick={togglePopup}>
          + New Product
        </Button>
      </Header>
      <Table columns={columns} dataSource={products} />
      {isOpen && (
        <Popup
          handleClose={togglePopup}
          handleSubmit={addProduct}
          product={productToEdit}
        />
      )}
    </div>
  );
}

export default ProductPage;
