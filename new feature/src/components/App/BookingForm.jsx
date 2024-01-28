// BookingForm.jsx
import React, { useState } from 'react';

const BookingForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    from: '',
    to: '',
    passengers: '',
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

  const locations = ['Location A', 'Location B', 'Location C', 'Location D']; // Add your locations here

  return (
    <form onSubmit={handleSubmit} className="my-4 mx-auto max-w-md bg-blue-500 text-center p-6 rounded-md">
      <h2 className="text-xl font-bold mb-4">Booking Form</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <label className="block mb-2">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded px-2 py-1 w-full"
          />
        </label>
        {/* <label className="block mb-2">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded px-2 py-1 w-full"
            required
          />
        </label> */}
        <label className="block mb-2">
          <input
            type="tel"
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="border rounded px-2 py-1 w-full"
          />
        </label>
        <label className="block mb-2">
          <select
            name="from"
            placeholder="From"
            value={formData.from}
            onChange={handleChange}
            className="border rounded px-2 py-1 w-full"
          >
            <option value="">Select From</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </label>
        <label className="block mb-2">
          <select
            name="to"
            placeholder="To"
            value={formData.to}
            onChange={handleChange}
            className="border rounded px-2 py-1 w-full"
          >
            <option value="">Select To</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </label>
        <label className="block mb-2">
          <input
            type="number"
            placeholder="Passengers"
            name="passengers"
            value={formData.passengers}
            onChange={handleChange}
            className="border rounded px-2 py-1 w-full"
          />
        </label>
      </div>
      <button type="submit" className="bg-white text-black px-4 py-2 rounded mt-4">
        Submit Form
      </button>
    </form>
  );
};

export default BookingForm;
