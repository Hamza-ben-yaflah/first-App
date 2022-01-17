import React, { useState } from "react";
import Login from "./Pages/Login/Login";
import "antd/dist/antd.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  // const [displayHome, setDisplayHome] = useState<boolean>(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="HomePage" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
