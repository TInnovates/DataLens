const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/kpi', (req, res) => {
  res.json({
    revenue: 12340,
    visitors: 1234,
    conversion: 4.5
  });
});

app.listen(PORT, () => {
  console.log(`Backend läuft auf Port ${PORT}`);
});
