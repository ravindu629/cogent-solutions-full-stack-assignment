import path from "path";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

const port = process.env.PORT || 5000;

//connect to mongo db
connectDB();

//initialize express
const app = express();

//body parser middleware to access the body data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/contacts", contactRoutes);

const __dirname = path.resolve();

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

app.listen(port, () => console.log(`Server running on port ${port}`));
