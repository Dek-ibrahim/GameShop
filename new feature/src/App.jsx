import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Account from './components/App/BusInput';
import Home from './components/Home';
import Bus from './components/App/Bus';

// import AppRouter from './components/AppRouter';
import logo from './asset/logo.png';

function BookingCard({ destination, departureTime, price }) {
  return (
    <div className="p-4 bg-white shadow-md rounded-md mb-4">
      <h2 className="text-xl font-semibold mb-2">{destination}</h2>
      <p className="text-gray-500 mb-2">Departure Time: {departureTime}</p>
      <p className="text-green-500 font-semibold">Price: ${price}</p>
      <button className="bg-blue-500 text-white rounded-md p-2 mt-2">Book Now</button>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-8 text-center text-gray-500">
      <p>&copy; 2024 HURIYE BUS. All rights reserved.</p>
    </footer>
  );
}

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prevIsNavOpen) => !prevIsNavOpen);
  };

  return (
    <>
      <div className="max-w-screen-xl mx-auto p-4">
        <BrowserRouter>
          <div className="mb-4">
            <button
              className="block lg:hidden text-black bg-gray-500 p-2 rounded"
              onClick={toggleNav}
            >
              {isNavOpen ? (
                <i className="fas-regular fa-bars"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>

          <div className=' flex  justify-between items-center'>
          

            <i className="mr-4">
                <Link
                  to="/"
                  className="text-blue-500 hover:text-blue-700"
                  onClick={() => setIsNavOpen(false)}
                >
                   <img src={logo} alt=""  className='w-[120px]'/>
                </Link>
              </i>
          <ul
              className={`${
                isNavOpen ? 'block' : 'hidden'
              } lg:flex flex-wrap list-none`}
            >
              <li className="mr-4">
                <Link
                  to="/"
                  className="text-blue-500 hover:text-blue-700"
                  onClick={() => setIsNavOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className="mr-4">
                <Link
                  to="/bus"
                  className="text-blue-500 hover:text-blue-700"
                  onClick={() => setIsNavOpen(false)}
                >
                  Bus
                </Link>
              </li>

              <li>
                <Link
                  to="/account"
                  className="px-6 py-3 rounded text-white bg-blue-500 hover:bg-blue-700"
                  onClick={() => setIsNavOpen(false)}
                >
                  Account
                </Link>
              </li>
            </ul>
          </div>
          </div>
          <div className="background">
            <div className=" rounded-full stroke-blue-500 mt-[50]"></div>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bus" element={<Bus />} />
            <Route path="/account" element={<Account />} />
          </Routes>

          
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
