import React, {useEffect, useState} from 'react';
import logo from '../../assets/logo.svg';
import {Link, useLocation} from 'react-router-dom';
import search from '../../assets/header/search.svg';
import bookmark from '../../assets/header/bookmark.svg';
import notification from '../../assets/header/notification.svg';
import profilePhoto from '../../assets/header/woman.png';
import {exitSession, getUserIdFromToken} from '../../services/utils';


const Header = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);
  const [userId, setUserId] = useState<number>();
  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    const getData = async () => {
      const userId = await getUserIdFromToken();
      setUserId(userId);
    };
    getData();
  }, []);
  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} alt="" />
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
                {/*<li className="page__item">*/}
                {/*  <Link to="/categories"*/}
                {/*        className={`page__link ${location.pathname === '/categories' ? 'page__link--active' : ''}`}>*/}
                {/*    Follow*/}
                {/*  </Link>*/}
                {/*</li>*/}
                <li className="page__item">
                  <Link to="/events"
                        className={`page__link ${location.pathname === '/events' ? 'page__link--active' : ''}`}>
                    Events
                  </Link>
                </li>
                <li className="page__item">
                  <Link to={`/profile/${userId}`}
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
  );
};
export default Header;