import path from "path";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import Contact from "./models/Contact.js";

// Handle __dirname in ES module
const __dirname = path.resolve();

// Load environment variables
dotenv.config();

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
app.post("/contact", async (req, res) => {
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
  // Serve static files from the React app (after it's built)
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  // Serve React app's index.html for any route that doesn't match an API endpoint
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
