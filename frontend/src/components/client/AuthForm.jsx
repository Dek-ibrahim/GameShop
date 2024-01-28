// src/components/AuthForm.js

import React, { useState } from 'react';

const AuthForm = ({ formType, onSubmit, toggleFormType }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">{formType === 'login' ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border rounded-md"
            onChange={(e) => setEmail(e.target.value)}
            required  // Added required attribute
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
            required  // Added required attribute
          />
        </div>
        <button
          type="submit"
          className={`w-full ${
            formType === 'login' ? 'bg-blue-500' : 'bg-green-500'
          } text-white p-2 rounded-md hover:bg-opacity-80`}
        >
          {formType === 'login' ? 'Login' : 'Sign Up'}
        </button>
      </form>
      <div className="mt-4 text-center">
        <span className="text-gray-600">
          {formType === 'login' ? "Don't have an account?" : 'Already have an account?'}
        </span>
        <button
          className="ml-2 text-blue-500 hover:underline"
          onClick={() => toggleFormType(formType === 'login' ? 'signup' : 'login')}
        >
          {formType === 'login' ? 'Sign Up' : 'Login'}
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
