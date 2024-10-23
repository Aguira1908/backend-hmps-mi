// models/pembelianModel.js
const db = require("../config/db"); // Import koneksi database

const Pembelian = {
  create: async (
    id_produk,
    jumlah_beli,
    harga_per_unit,
    harga_total,
    metode_pembayaran
  ) => {
    const [result] = await pool.query(
      "INSERT INTO pembelian (id_produk, jumlah_pembelian, harga_per_unit, harga_total, metode_pembayaran) VALUES (?,?,?,?,?)",
      [id_produk, jumlah_beli, harga_per_unit, harga_total, metode_pembayaran]
    );
    return;
  },
};

// const Pembelian = {
//   create: (data) => {
//     return new Promise((resolve, reject) => {
//       const query = `
//         INSERT INTO pembelian (id_produk, jumlah_pembelian, harga_per_unit, harga_total, metode_pembayaran)
//         VALUES (?, ?, ?, ?, ?)
//       `;
//       const values = [
//         data.id_produk,
//         data.jumlah_beli,
//         data.harga_per_unit,
//         data.harga_total,
//         data.metode_pembayaran,
//       ];

//       db.query(query, values, (err, result) => {
//         if (err) {
//           return reject(err);
//         }
//         resolve(result.insertId);
//       });
//     });
//   },
// };

module.exports = Pembelian;
