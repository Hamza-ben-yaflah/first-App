import React, { useState } from "react";
import { Form, Input, InputNumber, Button } from "antd";
import "./Popup.css";
import { DataType } from "./ProductPage";
interface PopupProp {
  handleClose: () => void;
  handleSubmit: (data: DataType) => void;
}

function Popup({ handleClose, handleSubmit }: PopupProp) {
  const onSubmit = (values: DataType) => {
    handleSubmit(values);
    handleClose();
  };

  return (
    <div className="popup-box">
      <div className="box">
        <button className="close-btn" onClick={handleClose}>
          x
        </button>
        <Form onFinish={onSubmit}>
          <Form.Item name="key" label="Id" rules={[{ required: true }]}>
            <InputNumber />
          </Form.Item>
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="quanlity"
            label="Quanlity"
            rules={[{ required: true }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item name="price" label="price" rules={[{ required: true }]}>
            <InputNumber />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Product
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Popup;
