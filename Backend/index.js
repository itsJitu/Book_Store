const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());

// CORS Setup
const corsOption = {
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  methods: ["GET", "POST", "DELETE", "PUT", "PATCH", "OPTIONS"],
};
app.use(cors(corsOption));

// Connect MongoDB
mongoose
  .connect(process.env.MONGOOSE_URL)
  .then(() => console.log(" MongoDB Connected "))
  .catch((error) => console.log(" MongoDB Error:", error));

// Routes
const signInRoutes = require("./routes/signin.routes");
app.use("/api/signIn", signInRoutes);


// Start server
const PORT_NO = process.env.PORT_NO || 8080;
app.listen(PORT_NO, () =>
  console.log(` Server is running at port ${PORT_NO} `)
);
