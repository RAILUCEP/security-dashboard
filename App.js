import React, { useState, useEffect } from 'react';
import './App.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

function App() {
  const [data, setData] = useState([]);
  const [alertThreshold, setAlertThreshold] = useState(20);
  const [contractValidation, setContractValidation] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');

    ws.onmessage = (event) => {
      const updatedData = JSON.parse(event.data);
      setData(updatedData);
      const lastPoint = updatedData[updatedData.length - 1];
      if (lastPoint.threats > alertThreshold) {
        alert(`Threat level exceeded: ${lastPoint.threats}`);
      }
    };

    return () => ws.close();
  }, [alertThreshold]);

  const validateContract = async (contractAddress) => {
    const response = await fetch(`http://localhost:8080/api/validate-contract?contractAddress=${contractAddress}`);
    const result = await response.json();
    setContractValidation(result);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wormhole Security Dashboard</h1>
        <div>
          <label>Alert Threshold: </label>
          <input
            type="number"
            value={alertThreshold}
            onChange={(e) => setAlertThreshold(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Validate Contract: </label>
          <input
            type="text"
            placeholder="Enter contract address"
            onBlur={(e) => validateContract(e.target.value)}
          />
        </div>
        {contractValidation && (
          <p>
            Contract {contractValidation.contractAddress} is{' '}
            {contractValidation.isValid ? 'Valid' : 'Invalid'}.
          </p>
        )}
      </header>
      <main>
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="threats" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
        </LineChart>
      </main>
    </div>
  );
}

export default App;