# Crowd2Fund – Execution Form Integration

This Express.js microservice handles form submission tracking for the **Execution Form** on Crowd2Fund’s platform. It receives webhook requests from HubSpot when a business user completes the Execution Form, verifies the request signature, and stores a "form submitted" flag associated with the user's email. This allows the Crowd2Fund system to determine whether to redirect the user to the next campaign phase.

---

## 🚀 Features

- ✅ Webhook endpoint to receive form submission data from HubSpot
- 🔐 Optional HMAC-SHA256 signature verification for webhook security
- 🧠 Simple logic to flag form completion per user (email-based)
- 🔍 GET endpoint for Crowd2Fund platform to query submission status

---

## 📦 Setup

```bash
git clone <repo>
cd execution-form-integration
npm install
cp .env.example .env
```
