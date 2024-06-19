import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todolist from './Todolist';
import Clock from './Timer';
import MyWeather from './MyWeather';

function App() {
  return (
    <div className="container">
      <Clock></Clock>
      <p></p>
      <Todolist></Todolist>
      <MyWeather weather='맑음'>일기예보</MyWeather>
    </div>
  );
}

export default App;
