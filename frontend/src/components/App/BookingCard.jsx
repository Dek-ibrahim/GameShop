// BookingCard.jsx
/* eslint-disable react/prop-types */
import React from 'react';

const BookingCard = ({ user, formData, selectedSeats, selectedBus, onBack, onSubmit }) => {
  return (
    <div className="my-4">
      <h2 className="text-xl font-bold mb-4">Booking Summary</h2>
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">Passenger Information</h3>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">Selected Seats</h3>
        <p>{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None'}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">Bus Transport Details</h3>
        <p>Bus Name: {selectedBus.name}</p>
        <p>Bus Number: {selectedBus.number}</p>
        <p>Departure Time: {selectedBus.departureTime}</p>
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
