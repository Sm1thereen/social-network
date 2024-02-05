import React from 'react';
import {Link} from 'react-router-dom';
import recommend from '../../../assets/home/recommend/recommend.jpg';
import arrow from '../../../assets/home/recommend/arrow-right.svg';

export default function RecommendAccount() {
  return (
    <>
      <div className="recommend__people recommend-card">
        <h2 className="recommend__people__title recommend-title">
          People you might know
        </h2>
        <ul className="recommend__card">
          <li className="recommend__card__item">
            <div className="recommend__card__user">
              <img src={recommend} alt="" />
              <div className="recommend__card__info">
                <h2 className="user__name recommend__card__text">
                  Vishnu Kumar Agrawal
                </h2>
                <p className="user__job recommend__card__text">
                  Ux Designer at Divim Technology
                </p>
                <p className="data__card recommend__card__text">
                  25 Nov at 12:24 PM
                </p>
              </div>
            </div>
            <button className="recommend__card__btn">Follow</button>
          </li>
          <li className="recommend__card__item">
            <div className="recommend__card__user">
              <img src={recommend} alt="" />
              <div className="recommend__card__info">
                <h2 className="user__name recommend__card__text">
                  Vishnu Kumar Agrawal
                </h2>
                <p className="user__job recommend__card__text">
                  Ux Designer at Divim Technology
                </p>
                <p className="data__card recommend__card__text">
                  25 Nov at 12:24 PM
                </p>
              </div>
            </div>
            <button className="recommend__card__btn">Follow</button>
          </li>
          <li className="recommend__card__item">
            <div className="recommend__card__user">
              <img src={recommend} alt="" />
              <div className="recommend__card__info">
                <h2 className="user__name recommend__card__text">
                  Vishnu Kumar Agrawal
                </h2>
                <p className="user__job recommend__card__text">
                  Ux Designer at Divim Technology
                </p>
                <p className="data__card recommend__card__text">
                  25 Nov at 12:24 PM
                </p>
              </div>
            </div>
            <button className="recommend__card__btn">Follow</button>
          </li>
        </ul>
        <Link to="/" className="recommend__card__link">
          View all recommendations <img src={arrow} alt="" />{' '}
        </Link>
      </div>
    </>
  );
}
