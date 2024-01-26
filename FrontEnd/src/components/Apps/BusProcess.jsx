// BusProcess.jsx
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const BusProcess = ({ onSelectBus, busDataEndpoint, busCount }) => {
  const [buses, setBuses] = useState([]);
  const [selectedBus, setSelectedBus] = useState(null);

  useEffect(() => {
    // Fetch bus data from the specified API endpoint
    fetch(busDataEndpoint)
      .then((response) => response.json())
      .then((data) => setBuses(data.slice(0, busCount))); // Adjust the data as needed
  }, [busDataEndpoint, busCount]);

  const handleBusSelect = (bus) => {
    setSelectedBus(bus);
    onSelectBus(bus); // Trigger the next step in the process
  };

  return (
    <div className="my-4">
      <h2 className="text-xl font-bold mb-4">Select a Bus</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {buses.map((bus) => (
          <div key={bus.id} className={`p-4 border ${selectedBus === bus ? 'border-blue-500' : 'border-gray-300'} rounded cursor-pointer`} onClick={() => handleBusSelect(bus)}>
            <h3 className="text-lg font-bold mb-2">{bus.title}</h3>
            {/* Display other bus details */}
          </div>
        ))}
      </div>

      {selectedBus && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Bus Selected</h2>
          <p>{selectedBus.title} has been selected for booking.</p>
          {/* Add a link or button to proceed to the next step */}
        </div>
      )}

      {!selectedBus && (
        <p className="mt-4">Please select a bus to start the booking process.</p>
      )}
    </div>
  );
};

BusProcess.propTypes = {
  onSelectBus: PropTypes.func.isRequired,
  busDataEndpoint: PropTypes.string.isRequired,
  busCount: PropTypes.number.isRequired,
};

export default BusProcess;
