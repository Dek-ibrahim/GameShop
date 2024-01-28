// src/App.js

import React, { useState } from 'react';
import AuthForm from '../client/AuthForm';
import Profile from '../Profile';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [activeForm, setActiveForm] = useState('login');

  const handleLogin = (userData) => {
    // For simplicity, consider the user as authenticated on successful login.
    // In a real-world scenario, you would perform actual authentication logic here.
    console.log('Logging in with:', userData);
    setUser(userData);
    setIsAuthenticated(true);
  };

  const handleSignup = (userData) => {
    // For simplicity, consider the user as authenticated on successful signup.
    // In a real-world scenario, you would perform actual authentication logic here.
    console.log('Signing up with:', userData);
    setUser(userData);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    // Log out the user by setting isAuthenticated to false and clearing user data.
    setIsAuthenticated(false);
    setUser({});
  };

  const toggleFormType = (formType) => {
    setActiveForm(formType);
  };

  return (
    <div className="App">
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="flex flex-col">
          {isAuthenticated ? (
            // Profile view after login
            <Profile user={user} onLogout={handleLogout} />
          ) : (
            // Login/Signup form
            <AuthForm
              formType={activeForm}
              onSubmit={activeForm === 'login' ? handleLogin : handleSignup}
              toggleFormType={toggleFormType}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
