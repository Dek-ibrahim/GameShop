// BusInput.jsx
import React, { useState } from 'react';

const BusInput = ({ onCreateBus }) => {
  const [busName, setBusName] = useState('');
  const [capacity, setCapacity] = useState('');

  const handleBusNameChange = (event) => {
    setBusName(event.target.value);
  };

  const handleCapacityChange = (event) => {
    setCapacity(event.target.value);
  };

  const handleSubmit = () => {
    // Validate input fields
    if (!busName || !capacity || isNaN(parseInt(capacity, 10)) || parseInt(capacity, 10) <= 0) {
      alert('Please provide valid bus information');
      return;
    }

    // Create bus object
    const newBus = {
      busName,
      capacity: parseInt(capacity, 10), // Convert capacity to integer
    };

    // Pass the new bus object to the onCreateBus callback
    onCreateBus(newBus);

    // Reset input fields
    setBusName('');
    setCapacity('');
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Enter Bus Information</h2>
      <div className="mb-4">
        <label htmlFor="busName" className="block text-sm font-semibold mb-2">Bus Name:</label>
        <input
          type="text"
          id="busName"
          value={busName}
          onChange={handleBusNameChange}
          className="border px-2 py-1 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="capacity" className="block text-sm font-semibold mb-2">Capacity:</label>
        <input
          type="number"
          id="capacity"
          value={capacity}
          onChange={handleCapacityChange}
          className="border px-2 py-1 w-full"
        />
      </div>
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit Bus Information
      </button>
    </div>
  );
};

export default BusInput;
