import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const RegistrationForm = ({ setCurrentPage }) => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/register', { name, dob, email, password });
      // Handle successful registration, save token to localStorage
      setCurrentPage('table');
    } catch (error) {
      // Handle registration error
    }
  };

  const formContainerStyle = {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    background: '#fff',
  };

  const formFooterStyle = {
    marginTop: '20px',
    fontSize: '14px',
    textAlign: 'center',
    color: '#777',
  };

  const linkStyle = {
    cursor: 'pointer',
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  const inputStyle = {
    backgroundColor: '#f5f5f5',
    borderRadius: '5px',
    border: 'none',
    padding: '15px',
    marginBottom: '20px',
    width: '100%',
    fontSize: '16px',
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '15px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    fontSize: '16px',
    transition: 'background 0.3s ease',
  };

  return (
    <div style={formContainerStyle}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Register</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
        </Form.Group>
        <Form.Group controlId="formBasicDOB">
          <Form.Control type="date" value={dob} onChange={(e) => setDob(e.target.value)} style={inputStyle} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} />
        </Form.Group>
        <Button variant="primary" type="submit" style={buttonStyle}>
          Register
        </Button>
      </Form>
      <p style={formFooterStyle}>Already have an account? <span style={linkStyle} onClick={() => setCurrentPage('login')}>Login here</span></p>
    </div>
  );
};

export default RegistrationForm;
