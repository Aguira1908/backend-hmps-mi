const Product = require("../models/product");

const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.getAll();
    res.json(products);
  } catch (err) {
    next(err);
  }
};

const getProductById = async (req, res, next) => {
  const { nama } = req.params;
  try {
    const product = await Product.getById(nama);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    next(err);
  }
};

// const createProduct = async (req, res, next) => {
//   const { title, description, photo } = req.body;
//   try {
//     const product = await Product.create(title, description, photo);
//     res.status(201).json(product);
//   } catch (err) {
//     next(err);
//   }
// };

// const updateProduct = async (req, res, next) => {
//   const { id } = req.params;
//   const { title, description, photo } = req.body;
//   try {
//     const existingProduct = await Product.getById(id);
//     if (!existingProduct) {
//       return res.status(404).json({ error: "Product not found" });
//     }
//     const updatedProduct = await Product.update(id, title, description, photo);
//     res.json(updatedProduct);
//   } catch (err) {
//     next(err);
//   }
// };

// const deleteProduct = async (req, res, next) => {
//   const { id } = req.params;
//   try {
//     const existingProduct = await Product.getById(id);
//     if (!existingProduct) {
//       return res.status(404).json({ error: "Product not found" });
//     }
//     await Product.delete(id);
//     res.json({ message: "Product deleted successfully" });
//   } catch (err) {
//     next(err);
//   }
// };

module.exports = {
  getAllProducts,
  getProductById,
  //   createProduct,
  //   updateProduct,
  //   deleteProduct,
};
