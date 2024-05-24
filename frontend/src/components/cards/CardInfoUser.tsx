import React from 'react';
import woman from '../../assets/home/cards/woman.png';
import {CardUserProfileProps} from '../../interfaces/interfaces';
import PrimaryButton from '../shared/buttons/PrimaryButton';
import './style.css';
import {Link} from 'react-router-dom';


const CardInfoUser: React.FC<CardUserProfileProps> = (props) => {
  return (
    <div className="card-profile-user__wrapper">
      <Link to={`/profile/${props.user?.id}`}>
        <div className="card-profile__user">
          <img src={woman} alt="" />
          <div className="card-info">
            <h2 className="card-profile__name">{props.user?.first_name + ' ' + props.user?.last_name}</h2>
            <p className="card-profile__job">Ux Designer at Divim Technology</p>
          </div>
        </div>
      </Link>

      <PrimaryButton />
    </div>
  );
};
export default CardInfoUser;