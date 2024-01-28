/* eslint-disable react/prop-types */
 
// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const BookingCard = ({ formData, selectedSeats, selectedBus, onBack, onSubmit }) => {
  return (
    <div className="my-4">
      <h2 className="text-xl font-bold mb-4">Booking Summary</h2>
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">Passenger Information</h3>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Phone: {formData.phone}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">Selected Seats</h3>
        <p>{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None'}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">Bus Transport Details</h3>
        <p>Bus Name: {selectedBus.name}</p>
        <p>Departure: {selectedBus.departure}</p>
        <p>Destination: {selectedBus.destination}</p>
        {/* Add more transport details as needed */}
      </div>

      <div className="flex items-center">
        <button onClick={onBack} className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2">
          Back
        </button>
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default BookingCard;
