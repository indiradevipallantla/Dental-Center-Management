import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function NavBar({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <nav style={{
      backgroundColor: '#343a40',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'white'
    }}>
      <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>🦷 ENTNT Dental</div>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/dashboard" style={navStyle}>Dashboard</Link>
        <Link to="/patients" style={navStyle}>Patients</Link>
        <Link to="/calendar" style={navStyle}>Calendar</Link>
        <Link to="/services" style={navStyle}>Services</Link>
        <button onClick={handleLogout} style={{
          background: '#f76c6c', border: 'none', padding: '6px 12px', borderRadius: '5px',
          cursor: 'pointer', color: '#fff'
        }}>Logout</button>
      </div>
    </nav>
  );
}

const navStyle = {
  textDecoration: 'none',
  color: 'white',
  fontWeight: '500'
};
