import React from "react";
import { Link } from "react-router-dom";

import "./sidebar.css"

export default function Dashboard() {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li><Link to="/admin/home">Home</Link></li>
          <li><Link to="/admin/academics">Academics</Link></li>
          <li><Link to="/admin/achievements">Achievements</Link></li>
          <li><Link to="/admin/gallery">Gallery</Link></li>
          <li><Link to="/admin/publications">Publications</Link></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1>Welcome to Admin Dashboard</h1>
        <p>Manage your portfolio from here.</p>
      </main>
    </div>
  );
}
