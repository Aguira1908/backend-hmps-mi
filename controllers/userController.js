const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/users");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables

// Register user baru
exports.register = (req, res) => {
  const { username, password } = req.body;

  User.createUser({ username, password }, (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Error registering user" });
    }
    res.status(201).json({ message: "User registered successfully" });
  });
};

// Login user
exports.login = (req, res) => {
  const { username, password } = req.body;

  User.getUserByUsername(username, async (err, user) => {
    if (err || !user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  });
};
