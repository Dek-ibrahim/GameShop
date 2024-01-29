// BusDetails.jsx
import React from 'react';

const BusDetails = ({ bus }) => {
  return (
    <div className="my-4">
      <h2 className="text-xl font-bold mb-4">Bus Details</h2>
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">Bus Information</h3>
        <p><strong>Bus Name:</strong> {bus.name}</p>
        <p><strong>Bus Number:</strong> {bus.number}</p>
        <p><strong>Departure Time:</strong> {bus.departureTime}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default BusDetails;
