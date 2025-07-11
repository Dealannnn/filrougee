// routes/produit.routes.js
const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

// Connexion MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',             // mets ton user si différent
  password: 'mysql',             // ton mot de passe MySQL
  database: 'gestion_clients_commandes_produits'
});

// Route : GET /api/produits
router.get('/', (req, res) => {
  db.query('SELECT * FROM produits', (err, results) => {
    if (err) {
      console.error('Erreur SQL:', err);
      return res.status(500).json({ message: 'Erreur serveur' });
    }
    res.json(results);
  });
});

module.exports = router;
