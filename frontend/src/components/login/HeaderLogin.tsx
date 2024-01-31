import React from 'react';
import logo from '../../assets/logo.svg';
import './style.css';
export default function HeaderLogin() {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__logo">
            <img src={logo} alt="" />
          </div>
          <div className="header__body">
            <nav className="nav__form">
              <form action="" className="form__login">
                <input
                  type="text"
                  className="login__email input-login"
                  placeholder="Email"
                />
                <input
                  type="text"
                  className="login__password input-login"
                  placeholder="Password"
                />
                <button className="login__button" type="submit">
                  Login
                </button>
              </form>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
