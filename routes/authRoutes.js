import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

// ================= SIGNUP =================
router.post("/signup", async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    console.log("========== SIGNUP DEBUG ==========");
    console.log("Incoming signup password:", password);

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed password saved:", hashedPassword);

    const user = await User.create({
      name,
      email,
      phone,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "Signup successful",
      user,
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ error: error.message });
  }
});

// ================= LOGIN =================
router.post("/login", async (req, res) => {
  try {
    const { phone, password } = req.body;

    console.log("========== LOGIN DEBUG ==========");
    console.log("Incoming phone:", phone);
    console.log("Incoming raw password:", password);

    const user = await User.findOne({ phone });
    console.log("User found in DB:", user);

    if (!user) {
      console.log("No user found with phone:", phone);
      return res.status(400).json({ message: "User not found" });
    }

    console.log("Comparing password:", password, "with hash:", user.password);

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password match result:", isMatch);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({
      message: "Login successful",
      user,
      token,
    });
  } catch (error) {
    console.error("LOGIN ERROR:", error);
    res.status(500).json({ error: error.message });
  }
});

// ================= EXPORT =================
export default router;
