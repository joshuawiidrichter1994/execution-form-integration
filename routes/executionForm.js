const express = require('express');
const router = express.Router();
const verifySignature = require('../utils/verifySignature');

router.post('/execution-form', (req, res) => {
  const signature = req.headers['x-hubspot-signature'];

  if (!verifySignature(req.rawBody, signature)) {
    return res.status(403).send('Invalid signature');
  }

  const payload = req.body;
  console.log('Valid form submission received:', payload.email);

  // TODO: store flag in DB or file, for now just mock it
  // Example: save to memory or log file
  return res.status(200).json({ message: 'Submission received' });
});

module.exports = router;
