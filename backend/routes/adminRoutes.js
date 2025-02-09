import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import AdminModel from "../models/Admin.js";
import AchievementModel from "../models/Achievements.js";
import PublicationModel from "../models/Publications.js";
import ConferenceModel from "../models/Conferences.js";
import GalleryModel from "../models/Gallery.js";

import verifyToken from "../middleware/authMiddleware.js";
import AcademicsModel from "../models/Academics.js";

const router = express.Router();

// Admin Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await AdminModel.findOne({ email });
    if (!admin) return res.status(400).json({ message: "Admin not found!" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials!" });

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Protected Route Example
router.get("/dashboard", verifyToken, (req, res) => {
  res.json({ success: true, message: "Welcome to Admin Dashboard!" });
});

// Get Admin Profile
router.get("/profile", verifyToken, async (req, res) => {
  try {
    const admin = await AdminModel.findById(req.user.id).select("-password");
    if (!admin) return res.status(404).json({ message: "Admin not found" });
    res.json(admin);
  } catch (error) {
    res.status(500).json({ message: "Error fetching profile" });
  }
});

// Update Admin Profile
router.put("/profile", verifyToken, async (req, res) => {
  try {
    const { name } = req.body;
    await AdminModel.findByIdAndUpdate(req.user.id, { name });
    res.json({ message: "Profile updated successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error updating profile" });
  }
});

// Change Admin Password
router.put("/change-password", verifyToken, async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const admin = await AdminModel.findById(req.user.id);

    // Check if old password is correct
    const isMatch = await bcrypt.compare(oldPassword, admin.password);
    if (!isMatch) return res.status(400).json({ message: "Incorrect current password" });

    // Hash new password and update
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    admin.password = hashedPassword;
    await admin.save();

    res.json({ message: "Password updated successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error changing password" });
  }
});


// Get Admin Dashboard Stats
router.get("/stats", async (req, res) => {
  try {
    const totalAcademics = await AcademicsModel.countDocuments();
    const totalAchievements = await AchievementModel.countDocuments();
    const totalPublications = await PublicationModel.countDocuments();
    const totalConferences = await ConferenceModel.countDocuments();
    const totalImages = await GalleryModel.countDocuments();

    res.json({
      totalAcademics,
      totalAchievements,
      totalPublications,
      totalConferences,
      totalImages,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching stats" });
  }
});

export default router;

