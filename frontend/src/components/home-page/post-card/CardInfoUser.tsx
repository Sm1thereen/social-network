import React from 'react';
import woman from '../../../assets/header/woman.png';

export default function CardInfoUser() {
  return (
    <div className="card-profile__info">
      <img src={woman} alt="" />
      <div className="card__info">
        <h2 className="user__name">Vishnu Kumar Agrawal</h2>
        <p className="user__job">Ux Designer at Divim Technology</p>
        <p className="data__card">25 Nov at 12:24 PM</p>
      </div>
    </div>
  );
}
