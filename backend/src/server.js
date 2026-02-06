const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// load env
dotenv.config();

// connect database
connectDB();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

// test route
app.get("/", (req, res) => {
  res.send("API running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
