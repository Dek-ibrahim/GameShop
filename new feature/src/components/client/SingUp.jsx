// src/components/Signup.js
import React, { useState } from 'react';

const Signup = ({ onSignup, error }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (email && password) {
      onSignup({ email, password });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="max-w-sm p-4 bg-white shadow-md rounded-md" onSubmit={handleSignup}>
        <h2 className="text-2xl font-bold mb-4">Signup</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border rounded-md"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border rounded-md"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-green-500 text-white p-2 rounded-md">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
