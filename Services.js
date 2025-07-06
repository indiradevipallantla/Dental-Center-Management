import React from 'react';
import { FaTooth, FaSmile, FaXRay, FaTeeth, FaUserMd } from 'react-icons/fa';

export default function Services() {
  const services = [
    { icon: <FaTooth />, name: 'Tooth Extraction', description: 'Safe and painless removal of decayed or damaged teeth.' },
    { icon: <FaSmile />, name: 'Cosmetic Dentistry', description: 'Improve the appearance of your smile with veneers and whitening.' },
    { icon: <FaXRay />, name: 'Digital X-Rays', description: 'Fast and accurate digital diagnostics for treatment planning.' },
    { icon: <FaTeeth />, name: 'Braces & Aligners', description: 'Straighten teeth with traditional braces or clear aligners.' },
    { icon: <FaUserMd />, name: 'Root Canal Therapy', description: 'Treat infected tooth pulp and save your natural tooth.' },
    { icon: <FaTooth />, name: 'Dental Cleaning', description: 'Professional plaque and tartar removal for oral health.' },
    { icon: <FaSmile />, name: 'Teeth Whitening', description: 'Brighten your smile with safe and effective whitening treatments.' }
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🦷 Dental Services</h2>
      <p style={{ marginBottom: '20px' }}>We offer a full range of modern dental care services to keep your smile healthy and bright.</p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px'
      }}>
        {services.map((service, index) => (
          <div key={index} style={{
            border: '1px solid #ddd',
            borderRadius: '10px',
            padding: '20px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{service.icon}</div>
            <h4 style={{ margin: '0 0 10px' }}>{service.name}</h4>
            <p style={{ color: '#555' }}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
