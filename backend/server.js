import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import adminRoutes from "./routes/adminRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import academicsRoutes from "./routes/academicsRoutes.js";
import achievementsRoutes from "./routes/achievementsRoutes.js";
import conferencesRoutes from "./routes/conferencesRoutes.js";
import publicationsRoutes from "./routes/publicationsRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/admin", adminRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/academics", academicsRoutes);
app.use("/api/achievements", achievementsRoutes);
app.use("/api/conferences", conferencesRoutes);
app.use("/api/publications", publicationsRoutes);
app.use("/api/gallery", galleryRoutes);





const PORT = process.env.PORT || 5000;
mongoose
    .connect(process.env.MONGO_URI, { family: 4 })
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => console.log(err));
