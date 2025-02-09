import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import "../style/AdminDashboard.css";
import { toast } from "react-toastify";

export default function AdminDashboard() {
  const [isAdmin, setIsAdmin] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get("http://localhost:5000/api/admin/dashboard", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (res.data.isAdmin) {
          setIsAdmin(true);
        } else {
          toast.error("Session Expired! Please login again.");
          navigate("/admin/login");
        }
      })
      .catch(() => {
        toast.error("Session Expired! Please login again.");
        navigate("/admin/login");
      });
  }, [navigate]);

  if (isAdmin === null) {
    return <h2>Verifying Admin...</h2>; // Loading State
  }

  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
}
