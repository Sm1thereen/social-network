import React from 'react';
import meerkat from '../../assets/login/meerkat.svg';
export default function MainLogin() {
  return (
    <>
      <main className="main">
        <section className="login__page registration-section">
          <div className="registration-section__container">
            <div className="registration-section__content">
              <h1 className="title__registration">
                <span style={{color: 'gray'}}>Welcome to</span>{' '}
                <span style={{color: '#35c7e4'}}>goAvido</span>
              </h1>
              <img src={meerkat} alt="" />
            </div>
            <div className="registration-section__form">
              <form action="" className="registration__form">
                <h1 className="form__title">Registration</h1>
                <input
                  type="text"
                  className="registration__name input-registration"
                  placeholder="Enter name"
                />
                <input
                  type="text"
                  className="registration__email input-registration"
                  placeholder="Enter email"
                />
                <input
                  type="password"
                  className="registration__password input-registration"
                  placeholder="Enter password"
                />
                <button className="registration__button" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
