import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import ProtectedTable from './ProtectedTable';

const App = () => {
  const [currentPage, setCurrentPage] = useState('login');

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginForm setCurrentPage={setCurrentPage} />;
      case 'register':
        return <RegistrationForm setCurrentPage={setCurrentPage} />;
      case 'table':
        return <ProtectedTable />;
      default:
        return null;
    }
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
};

export default App;
