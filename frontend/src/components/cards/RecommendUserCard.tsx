import React from 'react';
import recommend from '../../assets/home/recommend/recommend.png';

const RecommendUserCard = () => {
  return (
    <li className="recommend__card__item">
      <div className="recommend__card__user">
        <img src={recommend} alt="" />
        <div className="recommend__card__info">
          <h2 className="user__name recommend__card__text">
            Vishnu Kumar Agrawal
          </h2>
          <p className="user__job recommend__card__text">
            Ux Designer
          </p>
          <p className="data__card recommend__card__text">
            25 Nov at 12:24 PM
          </p>
        </div>
      </div>
      <button className="recommend__card__btn">Follow</button>
    </li>
  );
};

export default RecommendUserCard;