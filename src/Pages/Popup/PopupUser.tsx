import React from "react";
import { Form, Input, InputNumber, Button } from "antd";
import { User } from "../UsersPage/Users";

interface PopupPropUser {
  handleClose: () => void;
  handleSubmit: (values: User, editMode: boolean) => void;
  user: User | undefined;
}

function PopupUser({ handleClose, user, handleSubmit }: PopupPropUser) {
  const [form] = Form.useForm();

  const onSubmit = (values: User) => {
    const editMode = user ? true : false;
    handleSubmit(values, editMode);
    form.resetFields();
    handleClose();
  };

  return (
    <div>
      <div className="popup-box">
        <div className="box">
          <button className="close-btn" onClick={handleClose}>
            x
          </button>
          <Form onFinish={onSubmit} initialValues={user}>
            <Form.Item name="id" label="Id" rules={[{ required: true }]}>
              <InputNumber value={user?.id} />
            </Form.Item>
            <Form.Item
              name="username"
              label="UserName"
              rules={[{ required: true }]}
            >
              <Input value={user?.username} />
            </Form.Item>
            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
              <Input value={user?.name} />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true }]}
            >
              <Input value={user?.password} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                {user ? <span>Edit User</span> : <span>Add User </span>}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default PopupUser;
