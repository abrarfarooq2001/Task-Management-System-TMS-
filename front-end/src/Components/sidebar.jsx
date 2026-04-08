import React from 'react';
import Dashboard from '../assets/dashboard.svg'
import employee from '../assets/employee.svg'
import './sidebar.css';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ collapsed }) => {

  const navigate = useNavigate();
  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>

      <div className="menu-item" onClick={() => navigate('/')}>
        <img src={Dashboard} alt="" />
        {!collapsed && <span>Dashboard</span>}
      </div>

      <div className="menu-item" onClick={() => navigate('/employee')}>
        <img src={employee} alt="employee" />
        {!collapsed && <span>Employees</span>}
      </div>

      <div className="menu-item">
        {!collapsed && <span>Settings</span>}
      </div>

    </div>
  );
};

export default Sidebar;