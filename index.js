import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRoutes from "./routes/auth-route.js";
import sessionRoutes from "./routes/session-route.js";
import aiRoutes from "./routes/ai-route.js";
import questionRoutes from "./routes/question-route.js";  // ADD THIS

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/api/auth", userRoutes);
app.use("/api/sessions", sessionRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/questions", questionRoutes);  // ADD THIS

const MONGODB_URI = "mongodb://localhost:27017/night_coding";

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully!");
  })
  .catch((err) => {
    console.error("❌ MongoDB error:", err.message);
  });

app.listen(9001, () => {
  console.log("🚀 Server running on port 9001");
});