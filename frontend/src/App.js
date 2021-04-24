import React from 'react';

import './App.css';

import logo from './assets/logo.svg';

import Routes from './routes'; 

function App() {
  return (
    <div className="container"> 
      <a href ='http://localhost:3000'><img src={logo} alt="logo"  /></a>
    
      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
