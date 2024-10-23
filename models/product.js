const pool = require("../config/db");

const Product = {
  getAll: async () => {
    const [rows] = await pool.query("SELECT * FROM produk");
    return rows;
  },

  getById: async (nama) => {
    const [rows] = await pool.query(
      "SELECT * FROM produk WHERE nama_produk = ?",
      [nama]
    );
    return rows[0];
  },

  //   create: async (title, description, photo) => {
  //     const [result] = await pool.query(
  //       "INSERT INTO produk (judul_produk, deskripsi, foto_produk) VALUES (?, ?, ?)",
  //       [title, description, photo]
  //     );
  //     return { id_produk: result.insertId, title, description, photo };
  //   },

  //   update: async (id, title, description, photo) => {
  //     await pool.query(
  //       "UPDATE produk SET judul_produk = ?, deskripsi = ?, foto_produk = ? WHERE id_produk = ?",
  //       [title, description, photo, id]
  //     );
  //     return { id, title, description, photo };
  //   },

  //   delete: async (id) => {
  //     await pool.query("DELETE FROM produk WHERE id_produk = ?", [id]);
  //   },
};

module.exports = Product;
