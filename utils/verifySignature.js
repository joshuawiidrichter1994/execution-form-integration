const crypto = require('crypto');

const SECRET = process.env.HUBSPOT_WEBHOOK_SECRET;

function verifySignature(rawBody, signature) {
  if (!signature) return false;

  const hash = crypto
    .createHmac('sha256', SECRET)
    .update(rawBody)
    .digest('hex');

  return hash === signature;
}

module.exports = verifySignature;
