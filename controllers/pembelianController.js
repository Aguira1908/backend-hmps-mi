// controllers/pembelianController.js
const Pembelian = require("../models/pembelianModel");

const pembelianController = {
  createPurchase: async (req, res) => {
    const { id_produk, jumlah_beli, harga_per_unit, metode_pembayaran } =
      req.body;

    // Hitung total harga
    const harga_total = harga_per_unit * jumlah_beli;

    try {
      const id_pembelian = await Pembelian.create({
        id_produk,
        jumlah_beli,
        harga_per_unit,
        harga_total,
        metode_pembayaran,
      });

      res.status(201).json({ message: "Purchase successful", id_pembelian });
    } catch (error) {
      console.error("Error inserting purchase data:", error);
      res.status(500).json({ error: "Error inserting data" });
    }
  },
};

module.exports = pembelianController;
