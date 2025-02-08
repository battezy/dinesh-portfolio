import express from "express";
import GalleryModel from "../models/Gallery.js";
import verifyToken from "../middleware/authMiddleware.js";

const router = express.Router();

// Get All Images
router.get("/", async (req, res) => {
  try {
    const images = await GalleryModel.find();
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: "Error fetching images" });
  }
});

// Add Image (Protected)
router.post("/", verifyToken, async (req, res) => {
  try {
    const newImage = new GalleryModel(req.body);
    await newImage.save();
    res.json({ message: "Image Added Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error adding image" });
  }
});

// Delete Image (Protected)
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    await GalleryModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Image Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting image" });
  }
});

export default router;
