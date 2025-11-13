import React from "react";
import { useSelector } from "react-redux";
import "./App.css";

const App = () => {
  const counter = useSelector((state) => state.testSlice.counter);
  console.log(counter);
  return (
    <div className="mainBox">
      <div className="tableBox">
        <table>
          <thead></thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
