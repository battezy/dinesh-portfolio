import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash, FaTrophy } from "react-icons/fa"; // Importing icons
import "../style/adminachievements.css";

export default function AdminAchievements() {
  const [achievements, setAchievements] = useState([]);
  const [formData, setFormData] = useState({ title: "" });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/achievements")
      .then((res) => setAchievements(res.data))
      .catch(() => alert("Error fetching achievements!"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      await axios.put(`http://localhost:5000/api/achievements/${editId}`, formData);
      setEditId(null);
    } else {
      await axios.post("http://localhost:5000/api/achievements", formData);
    }

    axios.get("http://localhost:5000/api/achievements").then((res) => setAchievements(res.data));
    setFormData({ title: "" });
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/achievements/${id}`);
    setAchievements(achievements.filter((item) => item._id !== id));
  };

  const handleEdit = (item) => {
    setFormData(item);
    setEditId(item._id);
  };

  return (
    <div className="admin-achievements">
      <h2>Manage Achievements</h2>

      {/* Add / Edit Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Achievement Title"
          value={formData.title}
          onChange={(e) => setFormData({ title: e.target.value })}
          required
        />
        <button type="submit">{editId ? "Update" : "Add"} Achievement</button>
      </form>

      {/* List of Achievements */}
      <ul>
        {achievements.map((item) => (
          <li key={item._id}>
            <p><FaTrophy className="icon" /> {item.title}</p>
            <div className="action-buttons">
              <button onClick={() => handleEdit(item)} id="btn-edit">
                <FaEdit /> Edit
              </button>
              <button onClick={() => handleDelete(item._id)} id="btn-delete">
                <FaTrash /> Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
