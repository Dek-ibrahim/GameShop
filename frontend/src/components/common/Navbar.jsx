// HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import BusProcess from './App/Bus'; // Adjust the import based on your project structure

const HomePage = () => {
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
      className="flex flex-col items-center justify-center h-screen  lg:bg-[url(../public/bus.jpg)] md:bg-[url(../public/bus.jpg)] bg-cover bg-center bg-no-repeat sm:bg-gradient-to-t bg-gradient-to-t from-[#cc313d]  to-[#fea4b9]"
    >
      <div className='-mt-[170px]'>
      <h1 className="text-4xl font-bold mb-6 hover:text-[#ee4e34]"><span className=' uppercase font-bold text-[#ee4e34] hover:text-black text-4xl'>{getGreetingMessage()},👋</span> Welcome to Our Bus Booking System</h1>
      <p className=" mb-8 hover:text-[#ee4e34] text-3xl">Book your bus and start your journey today!</p>
     <div className=' mt-[70px]'>
     <Link
        to="/bus"
        className="bg-white  text-black px-6 py-3 rounded hover:bg-[#ee4e34] transition duration-300"
      >
        Start Booking
      </Link>
     </div>
      </div>

      
    </motion.div>
    
  );
};

export default HomePage;
