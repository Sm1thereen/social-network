import React from 'react';
import {Link} from 'react-router-dom';
import arrow from '../../../assets/home/recommend/arrow-right.svg';
import RecommendUserCard from '../../../components/cards/RecommendUserCard';

const RecommendAccount = () => {
  return (
    <>
      <div className="recommend__people recommend-card">
        <h2 className="recommend__people__title recommend-title">
          People you might know
        </h2>
        <ul className="recommend__card">
          <RecommendUserCard />
        </ul>
        <Link to="/users" className="recommend__card__link">
          View all recommendations <img src={arrow} alt="" />{' '}
        </Link>
      </div>
    </>
  );
};

export default RecommendAccount;
