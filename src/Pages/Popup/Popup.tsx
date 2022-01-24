import React, { useState } from "react";
import { Form, Input, InputNumber, Button } from "antd";
import "./Popup.css";
import { DataType } from "../ProductPage/ProductPage";
import form from "antd/lib/form";
interface PopupProp {
  handleClose: () => void;
  handleSubmit: (data: DataType, isEditMode: boolean) => void;
  product: DataType | undefined;
}

function Popup({ handleClose, handleSubmit, product }: PopupProp) {
  const [form] = Form.useForm();

  const onSubmit = (values: DataType) => {
    const editMode = product ? true : false;
    handleSubmit(values, editMode);
    form.resetFields();
    handleClose();
  };

  return (
    <div className="popup-box">
      <div className="box">
        <button className="close-btn" onClick={handleClose}>
          x
        </button>
        <Form onFinish={onSubmit} initialValues={product}>
          <Form.Item name="key" label="Id" rules={[{ required: true }]}>
            <InputNumber />
          </Form.Item>
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input value={product?.name} />
          </Form.Item>
          <Form.Item
            name="quanlity"
            label="Quanlity"
            rules={[{ required: true }]}
          >
            <InputNumber value={product?.quanlity} />
          </Form.Item>
          <Form.Item name="price" label="price" rules={[{ required: true }]}>
            <InputNumber value={product?.price} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {product ? <span>Edit </span> : <span>Add </span>} Product
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Popup;
