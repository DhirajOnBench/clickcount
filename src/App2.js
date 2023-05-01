import React,{useState,useEffect} from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Color Selector</h1>
      {Dropdown()}
    </div>
  );
}

export default App;

function Dropdown1() {
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

function Dropdown() {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000\colors');
      const result = await response.json();
      setColors(result);
    };
    fetchData();
  }, []);

  return (
    <div>
        <ul><li>sadfs
        </li>
        
        </ul>
       
    </div> );
      
}




