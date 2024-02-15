import React from 'react';
import profileImg from '../../assets/profile/profileImg.jpg';
import './style.css';

const MainProfile = () => {
  return (
    <>
      <section className="profile-page">
        <div className="profile__header">
          <div className="profile__container">
            <div className="header__info">
              <img src={profileImg} alt="" className="profile__header__img" />
              <div className="header__info__contact">
                <h1 className="header__title">Vishnu Kumar Agrawal</h1>
                <p className="header__job">Ux Designer at Divim Technology</p>
                <p className="header__location">Jaipur, India</p>
              </div>
              <div className="button__list">
                <button className="connect__btn header__btn">
                  Connect
                </button>
                <button className="email__btn header__btn">
                  Send an email
                </button>
                <button className="follow__btn header__btn">
                  Follow
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default MainProfile;
