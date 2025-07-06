import React, { useState } from 'react';

export default function Calendar() {
  const [view, setView] = useState('week'); // 'week' or 'month'
  const today = new Date();

  // Get current week (Sunday to Saturday)
  const getWeekDates = () => {
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());

    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      return date;
    });
  };

  // Get all days in the current month
  const getMonthDates = () => {
    const year = today.getFullYear();
    const month = today.getMonth();
    const firstDay = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const dates = [];
    for (let i = 1; i <= daysInMonth; i++) {
      dates.push(new Date(year, month, i));
    }
    return dates;
  };

  const formatDate = (date) =>
    `${date.toLocaleString('default', { weekday: 'short' })}, ${date.getDate()} ${date.toLocaleString('default', { month: 'short' })}`;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📅 Clinic Calendar</h2>
      <div style={{ marginBottom: '1rem' }}>
        <button
          onClick={() => setView('week')}
          style={{ marginRight: '10px', padding: '6px 12px', background: view === 'week' ? '#007bff' : '#ccc', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          Weekly View
        </button>
        <button
          onClick={() => setView('month')}
          style={{ padding: '6px 12px', background: view === 'month' ? '#007bff' : '#ccc', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          Monthly View
        </button>
      </div>

      {view === 'week' ? (
        <div style={{ display: 'flex', gap: '10px' }}>
          {getWeekDates().map((date, i) => (
            <div key={i} style={cardStyle}>
              <strong>{date.toLocaleDateString('default', { weekday: 'short' })}</strong>
              <div>{date.getDate()} {date.toLocaleString('default', { month: 'short' })}</div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '10px' }}>
          {getMonthDates().map((date, i) => (
            <div key={i} style={cardStyle}>
              <strong>{date.getDate()}</strong>
              <div>{date.toLocaleDateString('default', { weekday: 'short' })}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const cardStyle = {
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  backgroundColor: '#f8f9fa',
  textAlign: 'center'
};
