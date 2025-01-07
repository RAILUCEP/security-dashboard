import React, { useState, useEffect } from "react";
import "./Threats.css";

const Threats = () => {
  const [threats, setThreats] = useState([]);

  useEffect(() => {
    // Fetch threats data from the backend API
    fetch("http://localhost:8080/api/threats")
      .then((response) => response.json())
      .then((data) => setThreats(data))
      .catch((error) => console.error("Error fetching threats:", error));
  }, []);

  return (
    <div className="threats">
      <h2>Active Threats</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Severity</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {threats.map((threat) => (
            <tr key={threat.id}>
              <td>{threat.id}</td>
              <td>{threat.description}</td>
              <td className={threat.severity}>{threat.severity}</td>
              <td>{new Date(threat.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Threats;
