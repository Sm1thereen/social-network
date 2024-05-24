import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/header/Header';
import MainHome from './pages/home-page/MainHome';
import MainLogin from './pages/login-page/MainLogin';
import EventsMain from './pages/events-page/EventsMain';
import MainProfile from './pages/profile-page/MainProfile';
import UsersPage from './pages/users-page/UsersPage';

function App() {
  const accessToken = localStorage.getItem('accessToken');
  return (
    <div className="App">
      <>
        <Router>
          <Header />
          <Routes>
            {
              accessToken ?
                (
                  <>
                    <Route path="/home" element={<MainHome />} />
                    <Route path="/users" element={<UsersPage />} />
                    <Route path="/events" element={<EventsMain />} />
                    <Route path="/profile/:id" element={<MainProfile />} />
                  </>
                ) : (
                  <Route path="/" element={<MainLogin />} />
                )
            }
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
