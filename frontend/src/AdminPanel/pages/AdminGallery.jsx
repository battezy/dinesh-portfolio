import React, { useState, useEffect } from "react";
import { FaTrash, } from "react-icons/fa";
import axios from "axios";
import "../style/admingallery.css";
import { toast } from "react-toastify";

export default function AdminGallery() {
  const [images, setImages] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/gallery")
      .then((res) => setImages(res.data))
      .catch(() => toast.error("Error fetching images!"));
  }, []);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return toast.warn("Please select an image!");

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const res = await axios.post("http://localhost:5000/api/upload", formData);
      await axios.post("http://localhost:5000/api/gallery", { imageUrl: res.data.imageUrl });

      axios.get("http://localhost:5000/api/gallery").then((res) => setImages(res.data));
      setSelectedFile(null);
      toast.success("Image uploaded successfully!");
    } catch (err) {
      toast.error("Image upload failed!");
    }
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/gallery/${id}`);
    setImages(images.filter((img) => img._id !== id));
    toast.delete("Data deleted successfully!")
    
  };

  return (
    <div className="admin-gallery">
      <h2>Manage Gallery</h2>

      {/* Upload Image */}
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Image</button>

      {/* Display Images */}
      <div className="gallery-grid">
        {images.map((img) => (
          <div key={img._id} className="gallery-item">
            <img src={img.imageUrl} alt="Gallery" />
            <button onClick={() => handleDelete(img._id)} id="btn-delete"><FaTrash className="icon" /></button>
          </div>
        ))}
      </div>
    </div>
  );
}
