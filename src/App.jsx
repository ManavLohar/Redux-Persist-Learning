import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Form from "./components/form";

const App = () => {
  return (
    <>
      <div className="mainBox">
        <div className="tableBox">
          <table>
            <thead></thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
      <Form />
    </>
  );
};

export default App;
