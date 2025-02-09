import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash, FaGraduationCap } from "react-icons/fa";
import Swal from "sweetalert2";
import "../style/adminacademics.css";
import { toast } from "react-toastify";

export default function AdminAcademics() {
  const [academics, setAcademics] = useState([]);
  const [formData, setFormData] = useState({ degree: "", timeline: "", institute: "", cgpa: "" });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/academics")
      .then((res) => setAcademics(res.data))
      .catch(() => toast.error("Error fetching academics!"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      await axios.put(`http://localhost:5000/api/academics/${editId}`, formData);
      setEditId(null);
      toast.success("Data updated successfully!");
    } else {
      await axios.post("http://localhost:5000/api/academics", formData);
      toast.success("New degree added!");
    }

    axios.get("http://localhost:5000/api/academics").then((res) => setAcademics(res.data));
    setFormData({ degree: "", timeline: "", institute: "", cgpa: "" });
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`http://localhost:5000/api/academics/${id}`);
        setAcademics(academics.filter((item) => item._id !== id));
        toast.success("Degree deleted successfully!");
      }
    });
  };

  const handleEdit = (item) => {
    setFormData(item);
    setEditId(item._id);
  };

  return (
    <div className="admin-academics">
      <h2>Manage Academics</h2>

      {/* Add / Edit Form */}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Degree Name" value={formData.degree} onChange={(e) => setFormData({ ...formData, degree: e.target.value })} required />
        <input type="text" placeholder="Timeline" value={formData.timeline} onChange={(e) => setFormData({ ...formData, timeline: e.target.value })} required />
        <input type="text" placeholder="Institute Name" value={formData.institute} onChange={(e) => setFormData({ ...formData, institute: e.target.value })} required />
        <input type="text" placeholder="CGPA" value={formData.cgpa} onChange={(e) => setFormData({ ...formData, cgpa: e.target.value })} required />
        <button type="submit">{editId ? "Update" : "Add"} Degree</button>
      </form>

      {/* List of Academics */}
      <ul>
        {academics.map((item) => (
          <li key={item._id}>
            <h5><FaGraduationCap className="icon" /> {item.degree} <span className="timeline">{item.timeline}</span></h5>
            <p>{item.institute}</p>
            <p className="cgpa">CGPA : {item.cgpa}</p>
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
