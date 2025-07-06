import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
import Patients from './components/Patients';
import Calendar from './components/Calendar';
import Services from './components/Services';

export default function App() {
  const [user, setUser] = useState(null);
  const [justLoggedOut, setJustLoggedOut] = useState(false);

  const handleLogin = (email, password) => {
    // Admin login
    if (email === 'admin@entnt.in' && password === 'admin123') {
      setUser({ role: 'Admin', email });
      setJustLoggedOut(false);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setUser(null);
    setJustLoggedOut(true);
  };

  return (
    <Router>
      {user && <NavBar onLogout={handleLogout} />}
      <Routes>
        <Route
          path="/login"
          element={
            <>
              {justLoggedOut && (
                <div style={{ textAlign: 'center', marginTop: '30px' }}>
                  <h2>👋 Welcome Back!</h2>
                  <p>You’ve been logged out successfully.</p>
                  <p>To log in again, use:</p>
                  <p><b>Email:</b> admin@entnt.in</p>
                  <p><b>Password:</b> admin123</p>
                  <p>Your account and data are secure.</p>
                </div>
              )}
              <Login onLogin={handleLogin} />
            </>
          }
        />

        <Route path="/dashboard" element={user ? <Dashboard user={user} /> : <Navigate to="/login" />} />
        <Route path="/patients" element={user ? <Patients /> : <Navigate to="/login" />} />
        <Route path="/calendar" element={user ? <Calendar /> : <Navigate to="/login" />} />
        <Route path="/services" element={user ? <Services /> : <Navigate to="/login" />} />

        <Route path="/" element={<Navigate to={user ? "/dashboard" : "/login"} />} />
      </Routes>
    </Router>
  );
}
