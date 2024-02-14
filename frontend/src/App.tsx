import React from 'react';
import './App.css';
import LoginPage from './page/LoginPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './page/HomePage';
import FollowPage from './page/FollowPage';
import EventsPage from './page/EventsPage';

function App() {
  const accessToken = localStorage.getItem('accessToken');
  return (
    <div className="App">
      <>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            {
              accessToken ?
                (
                  <>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/follow" element={<FollowPage />} />
                    <Route path="/events" element={<EventsPage />} />
                  </>
                )
                : (
                  <></>
                )
            }
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
