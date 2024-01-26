// BusProcess.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BusProcess = ({ onSelectBus }) => {
  const [buses, setBuses] = useState([]);
  const [selectedBus, setSelectedBus] = useState(null);

  useEffect(() => {
    // Fetch bus data from the API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setBuses(data.slice(0, 12))); // Adjust the data as needed
  }, []);

  const handleBusSelect = (bus) => {
    setSelectedBus(bus);
    onSelectBus(); // Trigger the next step in the process
  };

  const handleSelectButtonClick = (bus) => {
    setSelectedBus(bus);
    onSelectBus(); // Trigger the next step in the process
  };

  return (
    <div className="my-8">
      <h2 className="text-xl font-bold mb-4">Select a Bus</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 justify-center text-center p-16  ">
        {buses.map((bus) => (
          <div key={bus.id} className={`p-4 border ${selectedBus === bus ? 'border-blue-500' : 'border-gray-300 bg-blue-500 text-white h-[160px]  w-48'} rounded`}>
            <img src="../public/12.png" alt="network error" className=' w-[100px] ml-[15px] -mt-20 rounded-full  '/>
            {/* <img src={`https://example.com/bus-images/${bus.id}.jpg`} alt={`Bus ${bus.id}`} className="mb-2 rounded-md w-full h-32 object-cover" /> */}
            {/* <h3 className="text-lg font-bold mb-2">{bus.title}</h3> */}
            <p className=''><strong>Bus Name:</strong> {bus.busName}</p>
            {/* <p><strong>Capacity:</strong> {bus.capacity}</p> */}
            {/* <p><strong>Current Location:</strong> {bus.currentLocation}</p> */}
            {/* <p><strong>Status: </strong> {bus.status}</p> */}
            <button onClick={() => handleSelectButtonClick(bus)} className="bg-white text-blue-500 px-4 py-2 rounded mt-4">
              Select Bus
            </button>
          </div>
        ))}
      </div>

      {selectedBus && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Bus Selected</h2>
          <p>{selectedBus.title} has been selected for booking.</p>
          <Link to={`/bus/booking/${selectedBus.id}`} className="bg-blue-500 text-white px-4 py-2 rounded mt-4 inline-block">
            Start Booking Process
          </Link>
        </div>
      )}

      {!selectedBus && (
        <p className="mt-4">Please select a bus to start the booking process.</p>
      )}
    </div>
  );
};

export default BusProcess;
 