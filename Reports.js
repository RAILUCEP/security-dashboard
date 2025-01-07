import React, { useState } from "react";
import "./Reports.css";

const Reports = () => {
  const [reportType, setReportType] = useState("summary");
  const [reportData, setReportData] = useState(null);

  const fetchReport = () => {
    // Fetch report data based on selected type
    fetch(`http://localhost:8080/api/reports?type=${reportType}`)
      .then((response) => response.json())
      .then((data) => setReportData(data))
      .catch((error) => console.error("Error fetching report:", error));
  };

  return (
    <div className="reports">
      <h2>Security Reports</h2>
      <div className="report-controls">
        <label htmlFor="reportType">Select Report Type:</label>
        <select
          id="reportType"
          value={reportType}
          onChange={(e) => setReportType(e.target.value)}
        >
          <option value="summary">Summary</option>
          <option value="detailed">Detailed</option>
          <option value="custom">Custom</option>
        </select>
        <button onClick={fetchReport}>Generate Report</button>
      </div>
      {reportData && (
        <div className="report-result">
          <h3>Report Results</h3>
          <pre>{JSON.stringify(reportData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Reports;
