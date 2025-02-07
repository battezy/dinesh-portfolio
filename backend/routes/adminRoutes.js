import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";

const router = express.Router();

// Admin Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
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
  res.json({ message: "Welcome to Admin Dashboard!" });
});

// Middleware to Verify Token
function verifyToken(req, res, next) {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "Access Denied!" });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = verified;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid Token!" });
  }
}

export default router;
