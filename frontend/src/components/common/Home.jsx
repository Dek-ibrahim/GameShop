import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BusProcess from '../App/Bus'; // Adjust the import based on your project structure

const HomePage = () => {
  const [isButtonVisible, setButtonVisible] = useState(false);

  useEffect(() => {
    const currentTime = new Date().getHours();
    // Enable the button only if it's between 6 AM and 6 PM
    const isButtonVisible = currentTime >= 6 && currentTime < 18;
    setButtonVisible(isButtonVisible);
  }, []); // Run this effect only once when the component mounts

  const getGreetingMessage = () => {
    const currentTime = new Date().getHours();
    if (currentTime < 12) {
      return 'Good Morning';
    } else if (currentTime < 18) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="flex  flex-col items-center justify-center h-screen  bg-[url(../public/bus.jpg)]    "
    >
      <div className='-translate-y-32 text-center'>
        <h1 className="text-4xl font-bold mb-6 text-black  ">
          <span className='text-blue-600 '>{getGreetingMessage()},👋</span> Welcome to Our Bus Booking System
        </h1>
        <p className="text-lg mb-8 text-black font-medium ">Book your bus and start your journey today!</p>
        {isButtonVisible && (
          <Link
            to="/bus"
            className="bg-blue-500 text-white font-bold shadow-lg px-12 py-6 text-2xl uppercase rounded-tr-[50px] rounded-bl-[50px] rounded  hover:bg-blue-600 transition duration-300"
          >
            Start Booking
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default HomePage;
