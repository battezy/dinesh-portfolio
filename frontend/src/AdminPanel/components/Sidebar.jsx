import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaUserGraduate, FaTrophy, FaBook, FaUsers, FaImages, FaUser, FaSignOutAlt, FaChartBar } from "react-icons/fa"; // Import Icons
import "./Sidebar.css";
import axiosInstance from "../../utils/axiosInstance";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    axiosInstance.post("/admin/logout", {}, { withCredentials: true })
      .then(() => {
        sessionStorage.removeItem("token");
        navigate("/admin/login");
      });
  };

  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li><Link to="/admin/dashboard/home"><FaHome /> Home</Link></li>
        <li><Link to="/admin/dashboard/academics"><FaUserGraduate /> Academics</Link></li>
        <li><Link to="/admin/dashboard/achievements"><FaTrophy /> Achievements</Link></li>
        <li><Link to="/admin/dashboard/publications"><FaBook /> Publications</Link></li>
        <li><Link to="/admin/dashboard/conferences"><FaUsers /> Conferences</Link></li>
        <li><Link to="/admin/dashboard/gallery"><FaImages /> Gallery</Link></li>
        <li><Link to="/admin/dashboard/stats"><FaChartBar /> Stats</Link></li>
        <li><Link to="/admin/dashboard/profile"><FaUser /> Profile</Link></li>
      </ul>
      <button className="logout" onClick={handleLogout}>
        <FaSignOutAlt /> Logout
      </button>
    </div>
  );
}
