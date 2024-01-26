// BookingProcess.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BusProcess from './BusProcess';
import BookingForm from './BookingForm';
import Seats from './Seats';
import BookingConfirmation from './BookingConfirmation';

const BookingProcess = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingDetails, setBookingDetails] = useState({
    formData: {},
    selectedSeats: [],
    busTransportDetails: {},
  });

  const handleBusSelect = (busDetails) => {
    setBookingDetails((prevDetails) => ({ ...prevDetails, busTransportDetails: busDetails }));
    setCurrentStep(2);
  };

  const handleFormSubmit = (formData) => {
    setBookingDetails((prevDetails) => ({ ...prevDetails, formData }));
    setCurrentStep(3);
  };

  const handleSeatSelect = (selectedSeats) => {
    setBookingDetails((prevDetails) => ({ ...prevDetails, selectedSeats }));
    setCurrentStep(4);
  };

  const handleBookingConfirmationBack = () => {
    setCurrentStep(3);
  };

  const handleBookingConfirmationComplete = () => {
    // Add logic to handle the completion of the booking (e.g., sending data to the server)
    // You can also redirect the user to a confirmation page
    alert('Booking completed!');
  };

  return (
    <Router>
      <div className="container mx-auto mt-8">
        <Switch>
          <Route path="/bus" exact>
            <BusProcess onSelectBus={handleBusSelect} />
          </Route>
          <Route path="/bus/form">
            <BookingForm onSubmit={handleFormSubmit} />
          </Route>
          <Route path="/bus/seats">
            <Seats totalSeats={10} onSelectSeat={handleSeatSelect} onSubmit={() => {}} />
          </Route>
          <Route path="/bus/confirmation">
            <BookingConfirmation
              bookingDetails={bookingDetails}
              onBack={handleBookingConfirmationBack}
              onComplete={handleBookingConfirmationComplete}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default BookingProcess;
