require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const executionFormRouter = require('./routes/executionForm');

const app = express();
const PORT = process.env.PORT || 3000;

// Parse raw body for signature verification
app.use(
  bodyParser.json({
    verify: (req, res, buf) => {
      req.rawBody = buf;
    },
  })
);
app.use(express.json());

// Routes
app.use('/hubspot', executionFormRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
