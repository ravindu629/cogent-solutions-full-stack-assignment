import path from "path";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import Contact from "./models/Contact.js";

// Handle __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config();

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB Atlas");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

// Connect to DB
connectDB();

// Initialize Express
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const contact = new Contact({ name, email, phone, message });
    await contact.save();
    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
});

// Serve frontend in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
