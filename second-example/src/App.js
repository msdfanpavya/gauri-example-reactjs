import React from 'react';
import logo from './logo.svg';
import './App.css';
import Second from './components/Second';
import Parent from './components/Parent';
import Child2 from './components/Child2';

function App() {
  return (
    <div className="App">
      {/* <Second ></Second> */}
    <Parent></Parent>
    {/* <Child2></Child2> */}
    </div>
  );
}

export default App;
