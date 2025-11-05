import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import "./Dashboard.css";

const Layout = () => (
  <div className="dashboard-container">
    <Sidebar />
    <main className="dashboard-main">
      <Outlet />
    </main>
  </div>
);

export default Layout;
