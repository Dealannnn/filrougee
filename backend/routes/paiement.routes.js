// On importe Express pour créer le routeur
const express = require('express');
const router = express.Router();

// On importe le contrôleur de paiement (Stripe)
// Correction du chemin : "controleurs" au lieu de "controllers"
const paiementController = require('../controleurs/paiement.controleur');

// Route POST pour créer une session de paiement Stripe Checkout
// ➜ URL : POST http://localhost:5000/api/paiement/creer-session
router.post('/creer-session', paiementController.createCheckoutSession);

// On exporte le routeur pour l'utiliser dans app.js
module.exports = router;
