const express = require("express");
const router = express.Router();
const { signIn, getUser, logIn } = require("../controllers/signIn.controllers");

// Register
router.post("/add", signIn);

// Login
router.post("/logIn", logIn);

// Get user by ID
router.get("/:id", getUser);

module.exports = router;
