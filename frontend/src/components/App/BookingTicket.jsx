// BookingTicket.jsx
import React from 'react';

const BookingTicket = ({ bookingDetails }) => {
  // Check if there are selected seats
  const hasSelectedSeats = bookingDetails.selectedSeats.length > 0;

  return (
    <div className={`my-4 rounded-lg mx-auto ${hasSelectedSeats ? 'bg-blue-500' : 'hidden' } w-full md:w-[500px] text-white p-4 text-start`}>
      {hasSelectedSeats && (
        <>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-4 text-center">Booking Ticket</h2>

          <div className="mb-4 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">
            <h3 className="text-2xl font-bold mb-2 text-center md:text-left m-4 md:m-0">Passenger Information</h3>
            <p className="mb-2 md:mb-1">Name: {bookingDetails.name}</p>
            <p>Phone: {bookingDetails.phone}</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Selected Seats</h3>
            <p>{bookingDetails.selectedSeats.join(', ')}</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Bus Transport Details</h3>
            <p>Bus Name: {bookingDetails.busName}</p>
            <p>Departure: {bookingDetails.departure}</p>
            <p>Destination: {bookingDetails.destination}</p>
          </div>

          <p className="text-gray-200">Booking Confirmed! Your ticket details:</p>
          {/* Display additional ticket information here */}
        </>
      )}
    </div>
  );
};

export default BookingTicket;
