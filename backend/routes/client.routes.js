const express = require('express');
const router = express.Router();

// Import des contrôleurs et middleware
const clientController = require('../controleurs/client.controleur');
const auth2FAController = require('../controleurs/auth2FA.controleur');
const verifyToken = require('../intergiciels/auth.intergiciel');
const paymentController = require('../controleurs/paiement.controleur');
const productController = require('../controleurs/produit.controleur');

// --- Debug : vérifier que chaque import est bien une fonction ---
console.log('clientController.register:', typeof clientController.register); // doit afficher "function"
console.log('auth2FAController.setup2FA:', typeof auth2FAController.setup2FA); // doit afficher "function"
console.log('verifyToken:', typeof verifyToken);                           // doit afficher "function"
console.log('paymentController.createPaymentIntent:', typeof paymentController.createPaymentIntent); // doit afficher "function"
console.log('productController.createProduct:', typeof productController.createProduct);               // doit afficher "function"
console.log('productController.getAllProducts:', typeof productController.getAllProducts);             // doit afficher "function"

// Routes existantes
router.post('/register', clientController.register);
router.post('/login', clientController.login);
router.get('/profil', verifyToken, clientController.getProfil);
router.post('/create-payment-intent', verifyToken, paymentController.createPaymentIntent);
router.post('/products', verifyToken, productController.createProduct);
router.get('/products', productController.getAllProducts);

// Routes 2FA
router.get('/setup-2fa', verifyToken, auth2FAController.setup2FA);
router.post('/verify-2fa', verifyToken, auth2FAController.verify2FA);

module.exports = router;
