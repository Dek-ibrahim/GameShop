// src/components/Profile.js

import React from 'react';

const Profile = ({ user, onLogout }) => {
  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Profile</h2>
      <p>Welcome, {user.fullName}!</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      {user.image && <img src={user.image} alt="Profile" className="mt-4 rounded-full h-20 w-20" />}
      <button
        className="mt-4 bg-red-500 text-white p-2 rounded-md hover:bg-opacity-80"
        onClick={onLogout}
      >
        Logout
      </button>
      {/* Add additional profile information or features here */}
    </div>
  );
};

export default Profile;
