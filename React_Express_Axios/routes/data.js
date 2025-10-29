// backend/routes/data.js
const express = require('express');
const router = express.Router();

// Example route
router.get('/data', (req, res) => {
  res.json({
    message: "Hello from Express API!",
    items: ["React", "Express", "Axios", "Integration"],
  });
});

module.exports = router;
