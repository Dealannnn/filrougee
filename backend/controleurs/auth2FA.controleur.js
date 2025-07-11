const speakeasy = require('speakeasy');
const qrcode = require('qrcode');
const db = require('../modeles/bd');

exports.setup2FA = async (req, res) => {
  const { userId } = req.user;

  try {
    const secret = speakeasy.generateSecret({
      length: 20,
      name: `MyApp-${userId}`
    });

    await db.query('UPDATE clients SET secret_2fa = ? WHERE id_client = ?', [secret.base32, userId]);

    qrcode.toDataURL(secret.otpauth_url, (err, dataURL) => {
      if (err) throw err;
      res.json({ dataURL, secret: secret.base32 });
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.verify2FA = async (req, res) => {
  const { userId } = req.user;
  const { token } = req.body;

  try {
    const [users] = await db.query('SELECT secret_2fa FROM clients WHERE id_client = ?', [userId]);
    const { secret_2fa } = users[0];

    const verified = speakeasy.totp.verify({
      secret: secret_2fa,
      encoding: 'base32',
      token: token
    });

    if (verified) {
      res.json({ verified: true });
    } else {
      res.status(401).json({ verified: false });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
