// Seats.jsx
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Seats = ({ totalSeats, onSelectSeat, onSubmit, seatDataEndpoint }) => {
  const [availableSeats, setAvailableSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch seat availability data from the specified API endpoint
    fetch(seatDataEndpoint)
      .then((response) => response.json())
      .then((data) => setAvailableSeats(data.slice(0, totalSeats))); // Adjust the data as needed
  }, [totalSeats, seatDataEndpoint]);

  const handleSeatClick = (seat) => {
    const seatNumber = seat.id; // Assuming seat numbering is present in the data
    if (!selectedSeats.includes(seatNumber)) {
      setSelectedSeats((prevSeats) => [...prevSeats, seatNumber]);
      onSelectSeat(seatNumber);
      setAvailableSeats((prevSeats) => {
        const updatedSeats = prevSeats.filter((s) => s.id !== seat.id);
        return updatedSeats;
      });
      setError(null); // Clear any previous errors
    } else {
      setError(`Seat ${seatNumber} is already selected.`);
    }
  };

  const handleSeatSubmit = () => {
    if (selectedSeats.length === 0) {
      setError('Please select at least one seat.');
    } else {
      onSubmit(selectedSeats);
      setError(null); // Clear any previous errors
    }
  };

  return (
    <div className="my-4">
      {error && <div className="text-red-500 mb-4">{error}</div>}

      <h2 className="text-xl font-bold mb-2">Seat Selection</h2>
      <div className="flex flex-wrap">
        {availableSeats.map((seat) => (
          <button
            key={seat.id}
            onClick={() => handleSeatClick(seat)}
            className={`bg-${seat.completed ? 'gray' : 'blue'} 
                        text-white 
                        p-2 
                        mr-2 
                        mb-2 
                        cursor-${seat.completed ? 'not-allowed' : 'pointer'}
                        hover:bg-${seat.completed ? 'gray' : 'lightBlue'}`}
            disabled={seat.completed}
          >
            {seat.id}
          </button>
        ))}
      </div>
      <p className="mt-2">
        Selected Seats: {selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None'}
      </p>
      <div className="mt-4">
        <button
          onClick={handleSeatSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Submit Seats
        </button>
        {/* Add a button to clear selection if needed */}
      </div>
    </div>
  );
};

Seats.propTypes = {
  totalSeats: PropTypes.number.isRequired,
  onSelectSeat: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  seatDataEndpoint: PropTypes.string.isRequired,
};

export default Seats;
