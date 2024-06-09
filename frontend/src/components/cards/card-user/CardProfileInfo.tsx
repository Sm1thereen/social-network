import React from 'react';
import woman from '../../../assets/home/cards/woman.png';
import {User} from '../../../interfaces/interfaces';

interface CardProfileInfoProps {
  user: User;
}

const CardProfileInfo: React.FC<CardProfileInfoProps> = ({user}) => {
  return (
    <div className="card-profile__info">
      <img src={woman} alt="" />
      <div className="card-user__info">
        <h2 className="card-user__name">{user?.first_name + ' ' + user.last_name}</h2>
        <p className="card-user__job">Ux Designer at Divim Technology</p>
      </div>
    </div>
  );
};

export default CardProfileInfo;