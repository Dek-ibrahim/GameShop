// BookingProcess.jsx
import React, { useState } from 'react';
import BookingForm from './BookingForm';
import BusProcess from './BusProcess';
import Seats from './Seats';
import BookingCard from './BookingCard';
import BookingTicket from './BookingTicket';
import BusDetails from './BusDetails';

const BookingProcess = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [formData, setFormData] = useState({});
  const [selectedBus, setSelectedBus] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
    setCurrentStep(2); // Move to the bus selection step
  };

  const handleBusSelect = (bus) => {
    setSelectedBus(bus);
    setCurrentStep(3); // Move to the seat selection step
  };

  const handleSeatSelect = (seatNumber) => {
    setSelectedSeats((prevSeats) => [...prevSeats, seatNumber]);
  };

  const handleSeatSubmit = () => {
    setCurrentStep(4); // Move to the booking card step
  };

  const handleBookingSubmit = () => {
    setLoading(true);

    // Simulate asynchronous operation (e.g., submitting data to a server)
    setTimeout(() => {
      // For simplicity, assume the booking is successful
      const bookingDetails = {
        user,
        ...formData,
        selectedBus,
        selectedSeats,
        // Add more details as needed
      };
      setBookingDetails(bookingDetails);
      setError(null);
      setLoading(false);
      setCurrentStep(5); // Move to the booking ticket step
    }, 2000);
  };

  const resetBooking = () => {
    setUser({
      name: '',
      email: '',
      phone: '',
    });
    setFormData({});
    setSelectedBus(null);
    setSelectedSeats([]);
    setBookingDetails(null);
    setCurrentStep(1); // Reset to the first step
  };

  const isFormValid = () => {
    // Add your form validation logic here
    // For simplicity, checking if name, email, and phone are filled
    // Also, ensure that bus details are selected
    return (
      user.name &&
      user.email &&
      user.phone &&
      formData.name &&
      formData.email &&
      formData.phone &&
      selectedBus && // Added check for selectedBus
      selectedBus.name &&
      selectedBus.number &&
      selectedBus.departureTime
    );
  };

  return (
    <div className="my-4 mt-32 m-6">
      {error && <div className="text-red-500 mb-4">{error}</div>}

      <div className="mb-4 -translate-y-16">
        <h2 className="text-xl font-bold mb-2 text-center  ">Booking Process</h2>
        <div className="flex items-center justify-center text-[20px] ">
          <div className={`mr-4 ${currentStep >= 1 ? 'text-blue-500 font-bold' : 'text-gray-500'}`}> Fill Form</div>
          <div className={`mr-4 ${currentStep >= 2 ? 'text-blue-500 font-bold' : 'text-gray-500'}`}> Select Bus </div>
          <div className={`mr-4 ${currentStep >= 3 ? 'text-blue-500 font-bold' : 'text-gray-500'}`}> Select Seats</div>
          <div className={`mr-4 ${currentStep >= 4 ? 'text-blue-500 font-bold' : 'text-gray-500'}`}> Booking Card</div>
          <div className={`mr-4 ${currentStep >= 5 ? 'text-blue-500 font-bold' : 'text-gray-500'}`}> Booking Ticket</div>
        </div>
      </div>

      {currentStep === 1 && <BookingForm onSubmit={handleFormSubmit} />}
      {currentStep === 2 && <BusProcess onSelectBus={handleBusSelect} />}
      {selectedBus && selectedBus.name && selectedBus.number && selectedBus.departureTime && (
        <BusDetails bus={selectedBus} />
      )}
      {currentStep === 3 && <Seats totalSeats={30} onSelectSeat={handleSeatSelect} onSubmit={handleSeatSubmit} />}
      {currentStep === 4 && (
        <BookingCard
          user={user}
          formData={formData}
          selectedBus={selectedBus}
          selectedSeats={selectedSeats}
          onBack={resetBooking}
          onSubmit={handleBookingSubmit}
        />
      )}
      {currentStep === 5 && (
        <BookingTicket bookingDetails={bookingDetails} />
      )}

      {/* Add navigation buttons */}
      {currentStep !== 1 && (
        <button onClick={() => setCurrentStep(currentStep - 1)} className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2">
          Back
        </button>
      )}
      {currentStep === 1 && isFormValid() && (
        <button onClick={() => setCurrentStep(currentStep + 1)} className="bg-blue-500 text-white px-4 py-2 rounded">
          Next to Bus Selection
        </button>
      )}
      {currentStep === 3 && (
        <button
          onClick={handleBookingSubmit}
          className={`bg-blue-500 text-white px-4 py-2 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Book Ticket'}
        </button>
      )}
    </div>
  );
};

export default BookingProcess;
