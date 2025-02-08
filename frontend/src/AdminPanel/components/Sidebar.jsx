import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };


  return (
    <div className="sidebar">
      <br />
      <br />
      <br />
      <h2>Admin Panel</h2>
      <ul>
        <li><Link to="/admin/dashboard/home">Home</Link></li>
        <li><Link to="/admin/dashboard/academics">Academics</Link></li>
        <li><Link to="/admin/dashboard/achievements">Achievements</Link></li>
        <li><Link to="/admin/dashboard/publications">Publications</Link></li>
        <li><Link to="/admin/dashboard/conferences">Conferences</Link></li>
        <li><Link to="/admin/dashboard/gallery">Gallery</Link></li>

        <button className="logout" onClick={handleLogout}>Logout</button>
      </ul>
    </div>
  );
}
