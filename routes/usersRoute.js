const express = require("express");
const route = express.Router();
const bcrypt = require("bcrypt"); 
const db = require("../db");
const JWT_SECRET = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

route.post("/register", async (req, res) => {
  const { name, email, password, expertise, bio } = req.body;

  try {
    const existingUser = await db("users").where({ email }).first();
    if (existingUser)
      return res.status(400).json({ error: "Email already exists" });

    if (!password) {
      return res.status(400).json({ error: "Password is required" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const [userId] = await db("users").insert({
      name,
      email,
      password:hashedPassword,
      expertise,
      bio,
    });

    res.status(201).json({ message: "User registered", userId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

route.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await db("users").where({ email }).first();
    if (!user)
      return res.status(400).json({ error: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ error: "Invalid email or password" });

    const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = route;
