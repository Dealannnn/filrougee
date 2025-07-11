const db = require('../modeles/bd'); // 👈 importe le module MySQL
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const createCheckoutSession = async (req, res) => {
  try {
    const id_produit = req.body.id_produit;
    if (!id_produit) return res.status(400).json({ erreur: "ID produit requis" });

    // 🔍 Récupérer le produit depuis la base
    const [rows] = await db.query('SELECT nom, prix_mensuel FROM produits WHERE id_produit = ?', [id_produit]);
    if (rows.length === 0) return res.status(404).json({ erreur: "Produit introuvable" });

    const produit = rows[0];
    const amount = Math.round(produit.prix_mensuel * 100); // Stripe demande en centimes

    // ✅ Création de la session Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'eur',
          product_data: { name: produit.nom },
          unit_amount: amount,
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: 'http://localhost:3000/succes',
      cancel_url: 'http://localhost:3000/annule',
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error("Erreur Stripe:", err);
    res.status(500).json({ erreur: err.message });
  }
};

module.exports = {
  createCheckoutSession,
  createPaymentIntent: () => {} // si tu n'utilises pas cette fonction pour l’instant
};
