import Login from "./Pages/Login/Login";
import "antd/dist/antd.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import ProductPage from "./Pages/ProductPage/ProductPage";
import Users from "./Pages/UsersPage/Users";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="HomePage" element={<HomePage />} />
        <Route path="Product" element={<ProductPage />} />
        <Route path="Users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
