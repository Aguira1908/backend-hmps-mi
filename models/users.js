const db = require("../config/db");
const bcrypt = require("bcrypt");

const User = {
  createUser: async (newUser, callback) => {
    try {
      const hash = await bcrypt.hash(newUser.password, 10); // Hash password
      const [results] = await db.query("INSERT INTO users SET ?", {
        username: newUser.username,
        password: hash,
      });
      callback(null, results);
    } catch (err) {
      callback(err, null);
    }
  },

  getUserByUsername: async (username, callback) => {
    try {
      const [results] = await db.query(
        "SELECT * FROM users WHERE username = ?",
        [username]
      );
      callback(null, results[0]);
    } catch (err) {
      callback(err, null);
    }
  },
};

module.exports = User;
