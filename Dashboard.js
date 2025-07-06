import React from 'react';
import { FaUserInjured, FaMoneyBillWave, FaTooth, FaCalendarCheck } from 'react-icons/fa';

export default function Dashboard({ user }) {
  if (!user) return <p>Loading user...</p>;

  const cards = [
    { title: 'Total Patients', count: 142, icon: <FaUserInjured size={30} color="#fff" />, color: '#6c63ff' },
    { title: 'Revenue', count: '₹12,800', icon: <FaMoneyBillWave size={30} color="#fff" />, color: '#00c49a' },
    { title: 'Appointments', count: 37, icon: <FaCalendarCheck size={30} color="#fff" />, color: '#f76c6c' },
    { title: 'Treatments Done', count: 18, icon: <FaTooth size={30} color="#fff" />, color: '#ffa600' }
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Welcome, {user.email}</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1.5rem',
        marginTop: '2rem'
      }}>
        {cards.map((card, index) => (
          <div key={index} style={{
            backgroundColor: card.color,
            color: 'white',
            padding: '1.5rem',
            borderRadius: '15px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {card.icon}
              <h4>{card.title}</h4>
            </div>
            <p style={{ fontSize: '1.5rem', marginTop: '1rem' }}>{card.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
