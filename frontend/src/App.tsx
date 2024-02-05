import React from 'react';
import './App.css';
import LoginPage from './page/LoginPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './page/HomePage';

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
