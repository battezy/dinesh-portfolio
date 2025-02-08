import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "./AdminDashboard.css";

export default function AdminDashboard() {


  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="admin-content">
        <h1>Admin Dashboard</h1>
        <Outlet /> {/* Nested Routes (Home, Academics, Achievements) */}
      </div>
    </div>
  );
}
