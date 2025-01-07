// filepath: backend/index.js
const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const cors = require('cors');

const app = express();
app.use(cors());
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Mock Data for Wormhole Smart Contract Activity
const mockData = [
  { month: 'Jan', threats: 10, severity: 'low' },
  { month: 'Feb', threats: 20, severity: 'medium' },
  { month: 'Mar', threats: 15, severity: 'low' },
  { month: 'Apr', threats: 25, severity: 'high' },
];

// WebSocket Communication
wss.on('connection', (ws) => {
  console.log('Client connected');

  // Send mock data every 5 seconds
  const interval = setInterval(() => {
    const randomThreat = Math.floor(Math.random() * 50) + 1;
    const severity = randomThreat > 30 ? 'high' : randomThreat > 15 ? 'medium' : 'low';

    const newPoint = {
      month: new Date().toLocaleString('default', { month: 'short' }),
      threats: randomThreat,
      severity,
    };
    mockData.push(newPoint);
    ws.send(JSON.stringify(mockData));
  }, 5000);

  ws.on('close', () => {
    clearInterval(interval);
    console.log('Client disconnected');
  });
});

// API Route for Wormhole Contract Validation
app.get('/api/validate-contract', (req, res) => {
  const { contractAddress } = req.query;
  if (!contractAddress) {
    return res.status(400).send({ error: 'Contract address is required' });
  }

  // Simulated Validation Logic
  const isValid = contractAddress.startsWith('0x');
  res.send({ contractAddress, isValid });
});

const PORT = 8080;
server.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));