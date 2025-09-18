const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const cors = require('cors');
app.use(cors());

app.get('/api/kpi', (req, res) => {
  res.json({
    kpis: {
      contractValue: [1890, 1790, 1990, 1890, 1890, 1890],
      leadResponse: [1090, 990, 1200, 1090, 1090, 1090],
      salesCycle: [11460, 11364, 11500, 11460, 11460, 11460],
      salesKpi: 263,
    },
    bar: {
      categories: ['Middle East', 'North America', 'Asia', 'Africa', 'Europe', 'Australia'],
      data: [255.28, 437.20, 205.70, 117.11, 109.28, 154.06]
    },
    pie: [25, 32.2, 24.2, 14.6],
    scatter: [
      { name: 'Activity', data: [[10, 20], [15, 25], [20, 30], [25, 35], [30, 40]] }
    ],
    deals: [3.5, 2.5, 1.5],
    topChannels: [
      { date: '10/18/2014', country: 'Libya', units: 8446 },
      { date: '11/17/2011', country: 'Canada', units: 3018 },
      { date: '10/13/2016', country: 'Libya', units: 1517 },
      { date: '10/31/2016', country: 'Japan', units: 3322 },
      { date: '8/16/2010', country: 'Chad', units: 9845 },
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Backend läuft auf Port ${PORT}`);
});
