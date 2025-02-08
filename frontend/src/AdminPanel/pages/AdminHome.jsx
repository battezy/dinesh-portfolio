import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function AdminHome() {
  const [homeData, setHomeData] = useState({ images: ["", ""], about: "" });
  const [imagePreview, setImagePreview] = useState(["", ""]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/home").then((res) => {
      setHomeData(res.data);
      setImagePreview(res.data.images);
    });
  }, []);

  const handleImageUpload = async (event, index) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post("http://localhost:5000/api/upload", formData);
      const newImages = [...homeData.images];
      newImages[index] = res.data.imageUrl;
      setHomeData({ ...homeData, images: newImages });
      setImagePreview(newImages);
    } catch (err) {
      toast.error("Image upload failed!");
    }
  };

  const handleUpdate = () => {
    axios.put("http://localhost:5000/api/home", homeData)
      .then(() => toast.success("Home updated successfully!"))
      .catch(() => toast.error("Update failed!"));
  };

  return (
    <div className="admin-home">
      <h2>Manage Home Page</h2>

      {/* Image Upload & Preview */}
      {[0, 1].map((index) => (
        <div key={index}>
          <label>Image {index + 1}:</label>
          <input type="file" onChange={(e) => handleImageUpload(e, index)} />
          {imagePreview[index] && <img src={imagePreview[index]} alt={`Preview ${index + 1}`} />}
        </div>
      ))}

      {/* About Text */}
      <label>About Text:</label>
      <textarea
        value={homeData.about}
        onChange={(e) => setHomeData({ ...homeData, about: e.target.value })}
      />

      <button onClick={handleUpdate}>Update Home</button>
    </div>
  );
}
