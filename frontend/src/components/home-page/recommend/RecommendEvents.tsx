import React from 'react';
import '../style.css';
import {Link} from 'react-router-dom';
import arrow from '../../../assets/home/recommend/arrow-right.svg';


const RecommendEvents: React.FC<{title: string}> = ({title}) => {
  return (
    <div className="recommend__events recommend-card">
      <h2 className="recommend__events recommend-title">{title}</h2>
      <ul className="recommend__card">
        <li className="recommend__events__card">
          <div className="events__calendar">
            <div className="events__calendar__data">
              <p style={{color: '#807e7e'}}>15</p>
            </div>
            <div className="events__calendar__month">
              <p style={{fontWeight: 500}}>Dec</p>
            </div>
          </div>
          <div className="events__info">
            <p className="events__info__name">Design Thinking</p>
            <p className="events__creator__name">Creative Town Hall</p>
            <Link to="" className="events__info__link">
              Details
            </Link>
          </div>
        </li>
        <li className="recommend__events__card">
          <div className="events__calendar">
            <div className="events__calendar__data">
              <p style={{color: '#807e7e'}}>15</p>
            </div>
            <div className="events__calendar__month">
              <p style={{fontWeight: 500}}>Dec</p>
            </div>
          </div>
          <div className="events__info">
            <p className="events__info__name">Design Thinking</p>
            <p className="events__creator__name">Creative Town Hall</p>
            <Link to="" className="events__info__link">
              Details
            </Link>
          </div>
        </li>
        <li className="recommend__events__card">
          <div className="events__calendar">
            <div className="events__calendar__data">
              <p style={{color: '#807e7e'}}>15</p>
            </div>
            <div className="events__calendar__month">
              <p style={{fontWeight: 500}}>Dec</p>
            </div>
          </div>
          <div className="events__info">
            <p className="events__info__name">Design Thinking</p>
            <p className="events__creator__name">Creative Town Hall</p>
            <Link to="" className="events__info__link">
              Details
            </Link>
          </div>
        </li>
      </ul>
      <Link to="/home" className="recommend__card__link">
        View more <img src={arrow} alt="" />{' '}
      </Link>
    </div>
  );
};

export default RecommendEvents;