// Example usage in another component
import React from 'react';
import BusProcess from './BusProcess';
import Seats from './Seats';

const busesData = [
  { id: 1, name: 'Bus A', capacity: 50, currentLocation: 'City A', status: 'Available' },
  { id: 2, name: 'Bus B', capacity: 40, currentLocation: 'City B', status: 'Available' },
  // Add more buses as needed
];

const seatsData = {
  totalSeats: 30,
  onSelectSeat: (seatNumber) => {
    // Handle seat selection logic
    console.log(`Seat ${seatNumber} selected.`);
  },
  onSubmit: (selectedSeats) => {
    // Handle seat submission logic
    console.log('Selected seats:', selectedSeats);
  },
};

const YourComponent = () => {
  return (
    <div>
      <BusProcess buses={busesData} onSelectBus={() => console.log('Bus selected.')} />
      <Seats {...seatsData} />
    </div>
  );
};

export default YourComponent;
