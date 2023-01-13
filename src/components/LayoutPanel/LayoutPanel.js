import React from "react";
import { Outlet } from "react-router-dom";
import "./LayoutPanel.scss";
const LayoutPanel = () => {
  return (
    <div id="dashboard">
      <div className="action-panel">
        <h2>title</h2>
        <ul>
          <li>console.log</li>
          <li>console.log</li>
        </ul>
      </div>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutPanel;

