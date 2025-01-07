import React, { useState } from "react";
import "./Settings.css";

const Settings = () => {
  const [alertThreshold, setAlertThreshold] = useState(20);
  const [darkMode, setDarkMode] = useState(false);

  const saveSettings = () => {
    // Save settings to localStorage or backend
    const settings = { alertThreshold, darkMode };
    console.log("Settings saved:", settings);
    alert("Settings saved successfully!");
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      <div className="setting-item">
        <label htmlFor="alertThreshold">Alert Threshold:</label>
        <input
          id="alertThreshold"
          type="number"
          value={alertThreshold}
          onChange={(e) => setAlertThreshold(Number(e.target.value))}
        />
      </div>
      <div className="setting-item">
        <label htmlFor="darkMode">Enable Dark Mode:</label>
        <input
          id="darkMode"
          type="checkbox"
          checked={darkMode}
          onChange={(e) => setDarkMode(e.target.checked)}
        />
      </div>
      <button onClick={saveSettings}>Save Settings</button>
    </div>
  );
};

export default Settings;
