const db = require('../modeles/bd');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { nom, prenom, email, mot_de_passe } = req.body;

  try {
    const [exist] = await db.query('SELECT * FROM clients WHERE email = ?', [email]);
    if (exist.length > 0) return res.status(400).json({ message: "Email déjà utilisé." });

    const hash = await bcrypt.hash(mot_de_passe, 10);
    await db.query('INSERT INTO clients (nom, prenom, email, mot_de_passe_hash, etat_compte) VALUES (?, ?, ?, ?, ?)',
      [nom, prenom, email, hash, 'actif']);

    res.status(201).json({ message: "Inscription réussie." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, mot_de_passe } = req.body;

  try {
    const [users] = await db.query('SELECT * FROM clients WHERE email = ?', [email]);
    if (users.length === 0) return res.status(404).json({ message: "Utilisateur non trouvé." });

    const client = users[0];
    const match = await bcrypt.compare(mot_de_passe, client.mot_de_passe_hash);
    if (!match) return res.status(401).json({ message: "Mot de passe incorrect." });

    const token = jwt.sign({ id: client.id_client, email: client.email }, process.env.JWT_SECRET, {
      expiresIn: '2h',
    });

    res.json({
      message: "Connexion réussie.",
      token,
      client: {
        id: client.id_client,
        nom: client.nom,
        prenom: client.prenom,
        email: client.email
      }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProfil = async (req, res) => {
  const userId = req.user.id;

  try {
    const [result] = await db.query('SELECT id_client, nom, prenom, email FROM clients WHERE id_client = ?', [userId]);
    res.json(result[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
