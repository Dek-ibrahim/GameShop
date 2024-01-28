// src/components/AuthForm.js
import React, { useState } from 'react';

const AuthForm = ({ title, onSubmit, buttonText, fields }) => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Clear previous errors
    setError(null);

    // Simulate form validation (you might want to replace this with actual validation logic)
    const requiredFields = fields.filter((field) => field.required);
    const missingFields = requiredFields.filter((field) => !formData[field.name]);

    if (missingFields.length > 0) {
      setError('Please fill in all required fields.');
      return;
    }

    try {
      setLoading(true);
      await onSubmit(formData);
      setLoading(false);
    } catch (error) {
      setError('An error occurred. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="max-w-sm p-4 bg-white shadow-md rounded-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {fields.map((field) => (
          <div key={field.name} className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={field.name}>
              {field.label}
            </label>
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              className="w-full p-2 border rounded-md"
              value={formData[field.name] || ''}
              onChange={handleChange}
            />
          </div>
        ))}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md" disabled={loading}>
          {loading ? 'Loading...' : buttonText}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
