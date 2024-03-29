import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProtectedTable = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/userdata');
        setUserData(response.data);
      } catch (error) {
        // Handle error
      }
    };

    fetchData();
  }, []);

  const tableContainerStyle = {
    maxWidth: '600px',
    margin: '20px auto',
  };

  const tableHeaderStyle = {
    marginBottom: '10px',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
  };

  const thStyle = {
    padding: '10px',
    borderBottom: '1px solid #ddd',
    background: '#f2f2f2',
  };

  const tdStyle = {
    padding: '10px',
    borderBottom: '1px solid #ddd',
  };

  return (
    <div style={tableContainerStyle}>
      <h2 style={tableHeaderStyle}>User Data Table</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Date of Birth</th>
            <th style={thStyle}>Email</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td style={tdStyle}>{user.name}</td>
              <td style={tdStyle}>{user.dateOfBirth}</td>
              <td style={tdStyle}>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProtectedTable;
