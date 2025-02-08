import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminPublications.css";

export default function AdminPublications() {
  const [publications, setPublications] = useState([]);
  const [formData, setFormData] = useState({ title: "", authors: "", journal: "", link: "" });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/publications")
      .then((res) => setPublications(res.data))
      .catch(() => alert("Error fetching publications!"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      await axios.put(`http://localhost:5000/api/publications/${editId}`, formData);
      setEditId(null);
    } else {
      await axios.post("http://localhost:5000/api/publications", formData);
    }

    axios.get("http://localhost:5000/api/publications").then((res) => setPublications(res.data));
    setFormData({ title: "", authors: "", journal: "", link: "" });
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/publications/${id}`);
    setPublications(publications.filter((item) => item._id !== id));
  };

  const handleEdit = (item) => {
    setFormData(item);
    setEditId(item._id);
  };

  return (
    <div className="admin-publications">
      <h2>Manage Publications</h2>

      {/* Add / Edit Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Authors"
          value={formData.authors}
          onChange={(e) => setFormData({ ...formData, authors: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Journal"
          value={formData.journal}
          onChange={(e) => setFormData({ ...formData, journal: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="DOI Link"
          value={formData.link}
          onChange={(e) => setFormData({ ...formData, link: e.target.value })}
          required
        />
        <button type="submit">{editId ? "Update" : "Add"} Publication</button>
      </form>

      {/* List of Publications */}
      <ul>
        {publications.map((item) => (
          <li key={item._id}>
            <h3>{item.title}</h3>
            <p><strong>Authors:</strong> {item.authors}</p>
            <p><strong>Journal:</strong> {item.journal}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">Read More →</a>
            <button onClick={() => handleEdit(item)}>Edit</button>
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
