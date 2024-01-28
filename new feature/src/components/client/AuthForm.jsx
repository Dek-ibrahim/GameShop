// src/App.js
import React, { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    // Simulate authentication (you might want to replace this with actual authentication logic)
    setUser(userData);
  };

  const handleSignup = (userData) => {
    // Simulate user registration (you might want to replace this with actual registration logic)
    setUser(userData);
  };

  return (
    <div>
      {!user ? (
        <>
          <Login onLogin={handleLogin} />
          <Signup onSignup={handleSignup} />
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Welcome, {user.email}!</h2>
          <button
            className="bg-red-500 text-white p-2 rounded-md"
            onClick={() => setUser(null)}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
