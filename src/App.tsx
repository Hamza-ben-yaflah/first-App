import React, { useState } from "react";
import Login from "./Pages/Login/Login";

import "antd/dist/antd.css";
import "./App.css";
import Home from "./Pages/HomePage/HomePage";

function App() {
  const [displayHome, setDisplayHome] = useState<boolean>(false);
  return (
    <div>
      {displayHome ? (
        <Home />
      ) : (
        <Login change={() => setDisplayHome(!displayHome)} />
      )}
    </div>
  );
}

export default App;
