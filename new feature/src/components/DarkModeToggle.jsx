// DarkModeToggle.js
import React, { useContext } from 'react';

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <label>
      Dark Mode
      <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
    </label>
  );
};

export default DarkModeToggle;
