import React, {useState} from 'react';
import logo from '../../assets/logo.svg';
import {Link, useLocation} from 'react-router-dom';
import search from '../../assets/header/search.svg';
import bookmark from '../../assets/header/bookmark.svg';
import notification from '../../assets/header/notification.svg';
import profilePhoto from '../../assets/header/woman.png';
import exitSession from '../../services/exitSession';


const Header = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);
  const accessToken = localStorage.getItem('accessToken');
  return (
    <>
      <header className="header">
        <div className="header__container">
          <Link to={`${accessToken ? '/home' : ''}`}>
            <img src={logo} alt="" />
          </Link>
          {
            accessToken &&
            <>
              <nav className="header__nav">
                <ul className="list__page">
                  <li className="page__item">
                    <Link to="/home"
                          className={`page__link ${location.pathname === '/home' ? 'page__link--active' : ''}`}>
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
                    <Link to="/events"
                          className={`page__link ${location.pathname === '/events' ? 'page__link--active' : ''}`}>
                      Events
                    </Link>
                  </li>
                  <li className="page__item">
                    <Link to="/profile"
                          className={`page__link ${location.pathname === '/profile' ? 'page__link--active' : ''}`}>
                      Profile
                    </Link>
                  </li>
                </ul>
              </nav>
              <ul className="profile-list">
                <li className="list-icons">
                  <img src={search} alt="" />
                </li>
                <li className="list-icons">
                  <img src={bookmark} alt="" />
                </li>
                <li className="list-icons">
                  <img src={notification} alt="" />
                </li>
                <li className="list-ico0ns">
                  <img src={profilePhoto} alt="" onClick={() => setOpenMenu(!openMenu)} />
                  {
                    openMenu && (
                      <div className="logout">
                        <Link to="/" onClick={() => exitSession()}>Logout</Link>
                      </div>
                    )
                  }
                </li>
              </ul>
            </>
          }
        </div>
      </header>
    </>
  );
};
export default Header;