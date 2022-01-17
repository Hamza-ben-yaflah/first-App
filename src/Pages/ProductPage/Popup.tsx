import React from "react";
import { Form, Input, InputNumber, Button } from "antd";
import "./Popup.css";
interface PopupProp {
  handleClose: () => void;
}

function Popup({ handleClose }: PopupProp) {
  return (
    <div className="popup-box">
      <div className="box">
        <button className="close-btn" onClick={handleClose}>
          x
        </button>
        <Form>
          <Form.Item label="Id" rules={[{ required: true }]}>
            <InputNumber />
          </Form.Item>
          <Form.Item label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Quanlity" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="price" rules={[{ required: true }]}>
            <InputNumber />
          </Form.Item>
          <Form.Item>
            <Button type="primary">Add Product</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Popup;
