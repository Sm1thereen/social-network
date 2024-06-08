import React, {useEffect, useState} from 'react';
import woman from '../../../assets/home/cards/woman.png';
import {CardUserProfileProps} from '../../../interfaces/interfaces';
import '../style.css';
import {Link} from 'react-router-dom';
import Button from '../../shared/Button';
import {postDataRequest} from '../../../services/api';

const CardInfoUser: React.FC<CardUserProfileProps> = (props) => {

  const onSubmit = async () => {
    const followerId = props.user?.id;
    if (props.textButton === 'Follow') {
      const response = await postDataRequest({followerId: followerId}, '/follow');
      if (response.success) {
        const newButtonText = props.textButton === 'Follow' ? 'UnFollow' : 'Follow';
        props.setTextButton(newButtonText);
      }
      console.log('response', response);
    } else if (props.textButton === 'Unfollow') {
      const response = await postDataRequest({followerId: followerId}, '/unfollow');
      if (response.success) {
        const newButtonText = props.textButton === 'Unfollow' ? 'Follow' : 'UnFollow';
        props.setTextButton(newButtonText);
      }
      console.log('response', response);
    }
  };
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
      <Button text={props.textButton} style="primary__btn" onClick={onSubmit} />
    </div>
  );
};
export default CardInfoUser;