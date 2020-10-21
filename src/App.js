import React from 'react';
import { HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Routes from './Routes';
import './style/App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes />
      </HashRouter>
    </div>
  );
}

export default App;
