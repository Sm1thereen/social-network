import React from 'react';
import logo from '../assets/logo.svg';
import {Link, useLocation} from 'react-router-dom';
import './home-page/style.css';
import search from '../assets/header/search.svg';
import bookmark from '../assets/bookmark.svg';
import notification from '../assets/header/notification.png';
import profilePhoto from '../assets/header/woman.png';


const Header = () => {
  const location = useLocation();
  return (
    <>
      <header className="header">
        <div className="header__container">
          <Link to="/home">
            <img src={logo} alt="" />
          </Link>
          <nav className="header__nav">
            <ul className="list__page">
              <li className="page__item">
                <Link to="/home" className={`page__link ${location.pathname === '/home' ? 'page__link--active' : ''}`}>
                  Home
                </Link>
              </li>
              <li className="page__item">
                <Link to="/follow"
                      className={`page__link ${location.pathname === '/follow' ? 'page__link--active' : ''}`}>
                  Follow
                </Link>
              </li>
              <li className="page__item">
                <Link to="/create"
                      className={`page__link ${location.pathname === '/events' ? 'page__link--active' : ''}`}>
                  Events
                </Link>
              </li>
            </ul>
          </nav>
          <ul className="profile-list">
            <li className="list-icons">
              <img className="header-icons" src={search} alt="" />
            </li>
            <li className="list-icons">
              <img src={bookmark} alt="" />
            </li>
            <li className="list-icons">
              <img className="header-icons" src={notification} alt="" />
            </li>
            <li className="list-icons">
              <img src={profilePhoto} alt="" />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};
export default Header;