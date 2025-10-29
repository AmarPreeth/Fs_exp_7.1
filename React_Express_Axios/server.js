// backend/server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Enable CORS for frontend
app.use(cors());

// Simple route
app.get('/api/data', (req, res) => {
  res.json({
    message: "Hello from Express API!",
    items: ["React", "Express", "Axios", "Integration"],
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
