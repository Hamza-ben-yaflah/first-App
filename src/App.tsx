import Login from "./Pages/Login/Login";
import "antd/dist/antd.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import ProductPage from "./Pages/ProductPage/ProductPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="HomePage" element={<HomePage />} />
        <Route path="Product" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
