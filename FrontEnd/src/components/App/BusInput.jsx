import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';

const Loginsignup = () => {
  const [action, setAction] = useState('Sign up');

  return (
    <div className="bg-rose-500 min-h-screen flex items-center justify-center">
      <div className="bg-pink-300 p-8 w-96 rounded-lg">
        <div className="flex flex-col items-center gap-9 mt-8">
          <div className="text-4xl font-bold text-rose-500">{action}</div>
          <div className="w-16 h-2 bg-rose-500 rounded-md"></div>
        </div>
        <div className="mt-14 flex flex-col gap-8">
          {action === 'Log in' ? null : (
            <div className="flex justify-center items-center mx-auto w-80 h-16 bg-gray-200 rounded-md">
              <div className="mr-8">
                <FaUser className="text-gray-600 text-lg" />
              </div>
              <input
                className="h-12 w-full bg-transparent outline-none border-none text-gray-600 text-lg"
                type="text"
                placeholder="Name"
              />
            </div>
          )}

          <div className="flex justify-center items-center mx-auto w-80 h-16 bg-gray-200 rounded-md">
            <div className="mr-8">
              <MdEmail className="text-gray-600 text-lg" />
            </div>
            <input
              className="h-12 w-full bg-transparent outline-none border-none text-gray-600 text-lg"
              type="email"
              placeholder="Email"
            />
          </div>

          <div className="flex justify-center items-center mx-auto w-80 h-16 bg-gray-200 rounded-md">
            <div className="mr-8">
              <RiLockPasswordFill className="text-gray-600 text-lg" />
            </div>
            <input
              className="h-12 w-full bg-transparent outline-none border-none text-gray-600 text-lg"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="pl-16 mt-2 text-gray-600 text-lg">Forget Password</div>
        <div className="flex gap-8 mx-auto mt-16">
          <div
            className={`${
              action === 'Log in' ? 'bg-gray-500' : 'bg-rose-500'
            } submit flex justify-center items-center w-48 h-16 text-white cursor-pointer font-bold text-lg rounded-full`}
            onClick={() => {
              setAction('Sign up');
            }}
          >
            Sign up
          </div>
          <div
            className={`${
              action === 'Sign up' ? 'bg-gray-500' : 'bg-rose-500'
            } submit flex justify-center items-center w-48 h-16 text-white cursor-pointer font-bold text-lg rounded-full`}
            onClick={() => {
              setAction('Log in');
            }}
          >
            Log In
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginsignup;
