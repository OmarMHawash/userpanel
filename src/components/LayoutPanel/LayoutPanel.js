import React from "react";
import { Outlet } from "react-router-dom";
const LayoutPanel = () => {
  return (
    <>
      <h1>Panel:</h1>
      <Outlet />
      <p>end panel</p>
    </>
  );
};

export default LayoutPanel;

