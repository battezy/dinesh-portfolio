import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/adminconferences.css";

export default function AdminConferences() {
  const [conferences, setConferences] = useState([]);
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/conferences")
      .then((res) => setConferences(res.data))
      .catch(() => alert("Error fetching conferences!"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      await axios.put(`http://localhost:5000/api/conferences/${editId}`, formData);
      setEditId(null);
    } else {
      await axios.post("http://localhost:5000/api/conferences", formData);
    }

    axios.get("http://localhost:5000/api/conferences").then((res) => setConferences(res.data));
    setFormData({ title: "", description: "" });
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/conferences/${id}`);
    setConferences(conferences.filter((item) => item._id !== id));
  };

  const handleEdit = (item) => {
    setFormData(item);
    setEditId(item._id);
  };

  return (
    <div className="admin-conferences">
      <h2>Manage Conferences</h2>

      {/* Add / Edit Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Conference Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Conference Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
        />
        <button type="submit">{editId ? "Update" : "Add"} Conference</button>
      </form>

      {/* List of Conferences */}
      <ul>
        {conferences.map((item) => (
          <li key={item._id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button onClick={() => handleEdit(item)}>Edit</button>
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
