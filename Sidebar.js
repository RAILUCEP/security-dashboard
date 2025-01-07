import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'; // Add your styles here

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Security Dashboard</h2>
      <nav>
        <NavLink to="/overview" activeClassName="active-link">Overview</NavLink>
        <NavLink to="/threats" activeClassName="active-link">Threats</NavLink>
        <NavLink to="/reports" activeClassName="active-link">Reports</NavLink>
        <NavLink to="/settings" activeClassName="active-link">Settings</NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
