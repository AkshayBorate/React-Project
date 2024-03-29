import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const LoginForm = ({ setCurrentPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { email, password });
      // Handle successful login, save token to localStorage
      setCurrentPage('table');
    } catch (error) {
      // Handle login error
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
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} />
        </Form.Group>
        <Button variant="primary" type="submit" style={buttonStyle}>
          Login
        </Button>
      </Form>
      <p style={formFooterStyle}>Don't have an account? <span style={linkStyle} onClick={() => setCurrentPage('register')}>Register here</span></p>
    </div>
  );
  
};


export default LoginForm;
