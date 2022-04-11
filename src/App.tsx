import React from 'react';
import logo from './logo.svg';
import './App.css';
import FamousQuotes from './components/Quotes';
import WeatherForecast from './components/Weather';

function App() {
  return (
    <div className="App">
      <WeatherForecast />
      <FamousQuotes />
    </div>
  );
}

export default App;
