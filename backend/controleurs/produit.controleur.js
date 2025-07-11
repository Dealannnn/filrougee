const productModel = require('../modeles/produit.modele');

exports.createProduct = async (req, res) => {
  try {
    const productId = await productModel.createProduct(req.body);
    res.status(201).json({ productId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await productModel.getAllProducts();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
