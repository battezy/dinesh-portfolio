import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const [stats, setStats] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    // if (!token) {
    //   navigate("/admin/login");
    //   return;
    // }

    // axios
    //   .get("http://localhost:5000/api/admin/stats", {
    //     headers: { Authorization: token },
    //   })
    //   .then((res) => setStats(res.data))
    //   .catch(() => {
    //     localStorage.removeItem("token");
    //     navigate("/admin/login");
    //   });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>
      <div className="stats">
        <div className="stat-card">🏡 Home: {stats.home}</div>
        <div className="stat-card">🎓 Academics: {stats.academics}</div>
        <div className="stat-card">🏆 Achievements: {stats.achievements}</div>
        <div className="stat-card">🖼️ Gallery: {stats.gallery}</div>
        <div className="stat-card">📚 Publications: {stats.publications}</div>
      </div>

      <div className="actions">
        <button onClick={() => navigate("/admin/home")}>Manage Home</button>
        <button onClick={() => navigate("/admin/academics")}>Manage Academics</button>
        <button onClick={() => navigate("/admin/achievements")}>Manage Achievements</button>
        <button onClick={() => navigate("/admin/gallery")}>Manage Gallery</button>
        <button onClick={() => navigate("/admin/publications")}>Manage Publications</button>
      </div>

      <button className="logout" onClick={handleLogout}>Logout</button>
    </div>
  );
}
