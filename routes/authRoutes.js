import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js"; // Make sure this path is correct

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

    // Find user by phone
    const user = await User.findOne({ phone });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Compare password dynamically
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Create JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).json({
      message: "Login successful",
      user,
      token,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Export default (required for ES Module import)
export default router;
