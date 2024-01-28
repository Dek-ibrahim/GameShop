// BookingConfirmation.jsx
import React from 'react';
import PropTypes from 'prop-types';

const BookingConfirmation = ({ bookingDetails, onBack, onComplete }) => {
  const { formData, selectedSeats, busTransportDetails } = bookingDetails;

  return (
    <div className="my-4">
      <h2 className="text-xl font-bold mb-4">Booking Confirmation</h2>

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
        <p>Bus Name: {busTransportDetails.busName}</p>
        <p>Departure: {busTransportDetails.departure}</p>
        <p>Destination: {busTransportDetails.destination}</p>
      </div>

      <div className="flex items-center">
        <button onClick={onBack} className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2">
          Back
        </button>
        <button onClick={onComplete} className="bg-green-500 text-white px-4 py-2 rounded">
          Complete Booking
        </button>
      </div>
    </div>
  );
};

BookingConfirmation.propTypes = {
  bookingDetails: PropTypes.shape({
    formData: PropTypes.object,
    selectedSeats: PropTypes.array,
    busTransportDetails: PropTypes.object,
  }).isRequired,
  onBack: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default BookingConfirmation;
