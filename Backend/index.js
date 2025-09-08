const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
require("dotenv").config();
const jwt = require("jsonwebtoken");

// Import Google Strategy
require("./config/passport"); // Make sure you have passport config in this file

const app = express();
app.use(express.json());

// CORS Setup
const corsOption = {
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  methods: ["GET", "POST", "DELETE", "PUT", "PATCH", "OPTIONS"],
};
app.use(cors(corsOption));

// Initialize Passport
app.use(passport.initialize());

// Connect MongoDB
mongoose
  .connect(process.env.MONGOOSE_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log("MongoDB Error:", error));

// Routes
const signIn = require("./routes/signin.routes");
app.use("/api/signIn", signIn);

// ===== Google OAuth callback route =====
app.get(
  "/auth/google/callback",
  passport.authenticate("google", { session: false, failureRedirect: "/login" }),
  (req, res) => {
    // Create JWT for Google user
    const token = jwt.sign(
      { id: req.user._id, email: req.user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Redirect with token in URL query
    res.redirect(`${process.env.FRONTEND_URL}/home?token=${token}`);
  }
);

// Start server
const PORT_NO = process.env.PORT_NO || 8080;
app.listen(PORT_NO, () => console.log(`Server is running at port ${PORT_NO}`));
