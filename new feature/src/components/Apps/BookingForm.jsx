// BookingForm.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BookingForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <h2 className="text-xl font-bold mb-2">Booking Form</h2>
      <label className="block mb-2">
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border rounded px-2 py-1"
        />
      </label>
      <label className="block mb-2">
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border rounded px-2 py-1"
          required
        />
      </label>
      <label className="block mb-2">
        Phone:
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="border rounded px-2 py-1"
        />
      </label>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit Form
      </button>
    </form>
  );
};

BookingForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default BookingForm;
