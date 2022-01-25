import React, { useEffect, useState } from "react";
import { Table, Layout, Button, Space } from "antd";
import PopupUser from "../Popup/PopupUser";
const { Header } = Layout;

export interface User {
  id: number;
  username: string;
  name: string;
  password: string;
}

function Users() {
  useEffect(() => {
    fetch(`http://localhost:3000/users`)
      .then(async (response) => await response.json())
      .then((data) => {
        setUsers(data.result);
      })
      .catch((error) => setError(error));
  }, []);

  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [userToEdit, setUserToEdit] = useState<User | undefined>();

  console.log(users);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
    },

    {
      title: "Username",
      dataIndex: "name",
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Password",
      dataIndex: "password",
    },
    {
      title: "Action",
      key: "action",
      render: (text: string, record: User) => (
        <Space size="middle">
          <Button
            type="primary"
            className="btn"
            onClick={() => {
              setIsOpen(true);
              setUserToEdit(record);
            }}
          >
            Edit
          </Button>
          <Button
            type="primary"
            className="btn"
            onClick={() => handelDelete(record)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  console.log(userToEdit);
  const addUser = (newUser: User, editMode: boolean) => {
    editMode
      ? setUsers(
          users.map((p) => {
            if (p.id === newUser.id) return newUser;

            return p;
          })
        )
      : setUsers([...users, newUser]);
  };
  const handelDelete = (userinfo: User) => {
    setUsers(users.filter((user) => user.id !== userinfo.id));
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <Header className="header">
        <Button type="primary" className="btn" onClick={togglePopup}>
          + New User
        </Button>
      </Header>
      <Table columns={columns} dataSource={users} />
      {isOpen && (
        <PopupUser
          handleClose={togglePopup}
          user={userToEdit}
          handleSubmit={addUser}
        />
      )}
    </div>
  );
}

export default Users;
