import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash, FaBookOpen } from "react-icons/fa"; // Importing icons
import "../style/adminpublications.css";

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
            <h5><FaBookOpen className="icon" /> {item.title}</h5>
            <p><strong>Authors:</strong> {item.authors}</p>
            <p><strong>Journal:</strong> {item.journal}</p>
            <p>
              <strong>Read More:</strong> 
              <a href={item.link} target="_blank" rel="noopener noreferrer"> {item.link} </a>
            </p>
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
