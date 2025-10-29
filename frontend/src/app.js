// frontend/src/App.js
import React from "react";
import DataDisplay from "./components/DataDisplay";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>React + Express + Axios Demo</h1>
      <DataDisplay />
    </div>
  );
}

export default App;
