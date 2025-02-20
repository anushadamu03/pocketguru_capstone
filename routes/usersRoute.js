const express = require("express");
const route = express.Router();
const bcrypt = require("bcrypt"); 
const db = require("../db");
const JWT_SECRET = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
route.post("/register", async (req, res) => {
  const { name, email, password, expertise, bio,role } = req.body;
  // console.log("Register==",name, email, password, expertise, bio, role)

  try {
    const existingUser = await db("users").where({ email }).first();
    if (existingUser)
      return res.status(400).json({ error: "Email already exists" });

    if (!password) {
      return res.status(400).json({ error: "Password is required" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = {
      id: uuidv4(), 
      name,
      email,
      password: hashedPassword,
      expertise,
      bio,
      role
    };

    await db("users").insert(newUser); 

    const user = await db("users").where({ id: newUser.id }).first();

    res.status(201).json({ message: "User registered", user });
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


// Get all users by role
route.get("/all-users", async (req, res) => {
  const { role } = req.query;

  try {
    let query = db("users");
    if (role) {
      query = query.where({ role });
    }

    const users = await query.select("id", "name", "email", "expertise", "bio", "role");

    if (users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// **Send Message**
route.post("/send", async (req, res) => {
  const { senderId, receiverId, text } = req.body;

  if (!senderId || !receiverId || !text) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const [messageId] = await db("messages").insert({
      senderId,
      receiverId,
      text,
    });

    res.status(201).json({ message: "Message sent", messageId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// **Get Messages Between Two Users**
route.get("/chat/:senderId/:receiverId", async (req, res) => {
  const { senderId, receiverId } = req.params;

  try {
    const messages = await db("messages")
      .where(function () {
        this.where("senderId", senderId).andWhere("receiverId", receiverId);
      })
      .orWhere(function () {
        this.where("senderId", receiverId).andWhere("receiverId", senderId);
      })
      .orderBy("createdAt", "asc");

    res.json({ messages });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = route;
