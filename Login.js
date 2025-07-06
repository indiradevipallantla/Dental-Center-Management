import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [isCreating, setIsCreating] = useState(false);
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });
  const [registerInfo, setRegisterInfo] = useState({
    name: '',
    email: '',
    password: '',
    dob: '',
    contact: '',
    healthIssue: ''
  });

  const handleLoginChange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e) => {
    setRegisterInfo({ ...registerInfo, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    onLogin(loginInfo.email, loginInfo.password);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log('Patient account created:', registerInfo);
    alert('Patient account created! You can now login.');
    setIsCreating(false);
    setRegisterInfo({ name: '', email: '', password: '', dob: '', contact: '', healthIssue: '' });
  };

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', padding: '2rem', border: '1px solid #ccc', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center' }}>{isCreating ? 'Create Your Patient Account' : 'Dental Center Login'}</h2>

      {isCreating ? (
        <form onSubmit={handleRegisterSubmit}>
          <input name="name" placeholder="Full Name" value={registerInfo.name} onChange={handleRegisterChange} required style={inputStyle} />
          <input type="email" name="email" placeholder="Email" value={registerInfo.email} onChange={handleRegisterChange} required style={inputStyle} />
          <input type="password" name="password" placeholder="Password" value={registerInfo.password} onChange={handleRegisterChange} required style={inputStyle} />
          <input type="date" name="dob" value={registerInfo.dob} onChange={handleRegisterChange} required style={inputStyle} />
          <input name="contact" placeholder="Contact Number" value={registerInfo.contact} onChange={handleRegisterChange} required style={inputStyle} />
          <input name="healthIssue" placeholder="Health Issue" value={registerInfo.healthIssue} onChange={handleRegisterChange} required style={inputStyle} />
          <button type="submit" style={buttonStyle}>Create Account</button>
          <p style={{ textAlign: 'center', marginTop: '10px' }}>
            Already have an account? <span style={linkStyle} onClick={() => setIsCreating(false)}>Login</span>
          </p>
        </form>
      ) : (
        <form onSubmit={handleLoginSubmit}>
          <input type="email" name="email" placeholder="Email" value={loginInfo.email} onChange={handleLoginChange} required style={inputStyle} />
          <input type="password" name="password" placeholder="Password" value={loginInfo.password} onChange={handleLoginChange} required style={inputStyle} />
          <button type="submit" style={buttonStyle}>Login</button>
          <p style={{ textAlign: 'center', marginTop: '10px' }}>
            Don’t have an account? <span style={linkStyle} onClick={() => setIsCreating(true)}>Create one</span>
          </p>
        </form>
      )}
    </div>
  );
}

// Styles
const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px'
};

const buttonStyle = {
  width: '100%',
  padding: '10px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px'
};

const linkStyle = {
  color: '#007bff',
  cursor: 'pointer',
  fontWeight: 'bold'
};
