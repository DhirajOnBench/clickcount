import React, { useState, useEffect } from 'react';

function Dropdown() {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000\colors')
      .then(response => response.json())
      .then(data => setColors(data));
  }, []);

  return (
    <select>
      {colors.map((color, index) => (
        <option key={index}>{color}</option>
      ))}
    </select>
  );
}

export default Dropdown;