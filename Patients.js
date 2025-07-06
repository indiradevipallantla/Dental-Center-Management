import React, { useState } from 'react';

export default function Patients() {
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: 'John Doe',
      dob: '1995-06-12',
      contact: '9876543210',
      healthInfo: 'Toothache'
    },
    {
      id: 2,
      name: 'Aditi Sharma',
      dob: '1992-02-25',
      contact: '9123456789',
      healthInfo: 'Braces Consultation'
    }
  ]);

  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({ name: '', dob: '', contact: '', healthInfo: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEdit = (patient) => {
    setEditId(patient.id);
    setForm(patient);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this patient?')) {
      setPatients(patients.filter(p => p.id !== id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      setPatients(patients.map(p => p.id === editId ? { ...form, id: editId } : p));
      setEditId(null);
    } else {
      const newPatient = { ...form, id: Date.now() };
      setPatients([...patients, newPatient]);
    }
    setForm({ name: '', dob: '', contact: '', healthInfo: '' });
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Patient Management</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="date"
          name="dob"
          placeholder="DOB"
          value={form.dob}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          name="contact"
          placeholder="Contact Number"
          value={form.contact}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          name="healthInfo"
          placeholder="Health Info"
          value={form.healthInfo}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <button type="submit" style={submitStyle}>
          {editId ? 'Update' : 'Add'} Patient
        </button>
      </form>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Name</th>
            <th>DOB</th>
            <th>Contact</th>
            <th>Health Info</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.length === 0 ? (
            <tr><td colSpan="5">No patients found.</td></tr>
          ) : (
            patients.map(patient => (
              <tr key={patient.id}>
                <td>{patient.name}</td>
                <td>{patient.dob}</td>
                <td>{patient.contact}</td>
                <td>{patient.healthInfo}</td>
                <td>
                  <button onClick={() => handleEdit(patient)} style={{ marginRight: '10px' }}>Edit</button>
                  <button onClick={() => handleDelete(patient.id)} style={{ color: 'red' }}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

// 🔧 Simple styles
const inputStyle = {
  marginRight: '10px',
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '4px'
};

const submitStyle = {
  padding: '8px 16px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '4px'
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse'
};
