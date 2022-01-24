import React, { useEffect, useState } from "react";
import { Table, Layout, Button } from "antd";
const { Header } = Layout;

interface User {
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
  ];
  return (
    <div className="container">
      <Header className="header">
        <Button type="primary" className="btn">
          + New User
        </Button>
      </Header>
      <Table columns={columns} dataSource={users} />
    </div>
  );
}

export default Users;
