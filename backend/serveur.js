const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config(); // Charge les variables d'environnement depuis .env

const app = express();
app.use(cors());            // Active le CORS pour autoriser les requêtes cross-origin
app.use(bodyParser.json()); // Parse automatiquement le JSON dans le corps des requêtes

// === Routes existantes pour la gestion des clients ===
const clientRoutes = require('./routes/client.routes');
app.use('/api/clients', clientRoutes);

// === Nouvelle route pour Stripe Checkout ===
// On importe le fichier qui contient createCheckoutSession
const paiementRoutes = require('./routes/paiement.routes');
// On monte nos routes de paiement sous /api/paiement
app.use('/api/paiement', paiementRoutes);


app.get('/test', (req, res) => {
  res.send('Serveur OK');
});


// Port d'écoute (5000 par défaut ou celui défini dans .env)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur http://localhost:${PORT}`);
});

const produitRoutes = require('./routes/produit.routes');
app.use('/api/produits', produitRoutes);
