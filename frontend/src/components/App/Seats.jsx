// Seats.jsx
import React, { useState, useEffect } from 'react';

const Seats = ({ totalSeats, onSelectSeat, onSubmit, seatTypes, numberOfPassengers }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [error, setError] = useState(null);

  const handleSeatClick = (index) => {
    const seatNumber = index + 1;
    if (!selectedSeats.includes(seatNumber)) {
      setSelectedSeats((prevSeats) => [...prevSeats, seatNumber]);
      onSelectSeat(seatNumber);
      setError(null);
    } else {
      setError(`Seat ${seatNumber} is already selected.`);
    }
  };

  const handleSeatSubmit = () => {
    if (selectedSeats.length === 0) {
      setError('Please select at least one seat.');
    } else if (selectedSeats.length > numberOfPassengers) {
      setError(`You can only select up to ${numberOfPassengers} seats.`);
    } else {
      onSubmit(selectedSeats);
      setError(null);
    }
  };

  const handleClearSelection = () => {
    setSelectedSeats([]);
    setError(null);
  };

  useEffect(() => {
    // Cleanup function to remove side effects
    return () => {
      setSelectedSeats([]);
      setError(null);
    };
  }, []);

  return (
    <div className="my-4">
      {error && <div className="text-red-500 mb-4">{error}</div>}

      <h2 className="text-2xl font-bold mb-4">Seat Selection</h2>
      <div className="flex flex-wrap">
        {Array(totalSeats).fill().map((_, index) => (
          <button
            key={index}
            onClick={() => handleSeatClick(index)}
            disabled={selectedSeats.includes(index + 1) || selectedSeats.length >= numberOfPassengers}
            className={`
              seat-button
              bg-${selectedSeats.includes(index + 1) ? 'gray-400' : 'green-500'} 
              text-white 
              p-3 
              m-1 
              cursor-${selectedSeats.includes(index + 1) ? 'not-allowed' : 'pointer'}
              hover:bg-${selectedSeats.includes(index + 1) ? 'gray-300' : 'green-600'}
            `}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <p className="mt-3">
        Selected Seats: {selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None'}
      </p>
      <div className="mt-6">
        <button
          onClick={handleSeatSubmit}
          className="bg-blue-500 text-white px-5 py-3 rounded mr-3"
        >
          Submit
        </button>
        <button
          onClick={handleClearSelection}
          className="bg-red-500 text-white px-12 py-3 rounded"
        >
          Clear Selection
        </button>
      </div>
    </div>
  );
};

export default Seats;
