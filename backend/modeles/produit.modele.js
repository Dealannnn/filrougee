const db = require('./bd');

exports.createProduct = async (productData) => {
  const { nom, description, prix, image_url } = productData;
  const [result] = await db.query(
    'INSERT INTO produits (nom, description, prix, image_url) VALUES (?, ?, ?, ?)',
    [nom, description, prix, image_url]
  );
  return result.insertId;
};

exports.getAllProducts = async () => {
  const [products] = await db.query('SELECT * FROM produits');
  return products;
};
