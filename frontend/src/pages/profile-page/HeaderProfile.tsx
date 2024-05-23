import React from 'react';
import profileImg from '../../assets/profile/profileImg.jpg';
import {User} from '../../interfaces/interfaces';

interface HeaderProfileProps {
  user: User | null;
}

const HeaderProfile: React.FC<HeaderProfileProps> = (props) => {
  return (
    <div className="profile__container">
      <div className="header__info">
        <img src={profileImg} alt="" className="profile__header__img" />
        <div className="header__info__contact">
          <h1 className="header__title">{props.user?.first_name} {props.user?.last_name}</h1>
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
  );
};

export default HeaderProfile;