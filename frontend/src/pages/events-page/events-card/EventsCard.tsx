import React from 'react';
import defaultImg from '../../../assets/events/defaultImg.png';
import location from '../../../assets/events/card/location.svg';
import clock from '../../../assets/events/card/time.svg';
import members from '../../../assets/events/card/members.svg';

const EventsCard = () => {
  const countInterested = 3.5;
  const countAttending = 1;
  return (
    <>
      <li className="events__card__item">
        <div className="events-img">
          <img className="events__img" src={defaultImg} alt="" />
        </div>
        <div className="events__card__information">
          <div className="events__card__status">
            <p className="events__data">03 Dec 2023</p>
            <div className="events__status">
              <p className="events__status__text">Filling up Fast</p>
            </div>
          </div>
          <ul className="events__info">
            <li className="events__info__item">
              <img src={location} alt="" />
              <p className="events__info__text">
                IIT Delhi, New Delhi
              </p>
            </li>
            <li className="events__info__item">
              <img src={clock} alt="" />
              <p className="events__info__text">
                05:00 PM
              </p>
            </li>
            <li className="events__info__item">
              <img src={members} alt="" />
              <p className="events__info__text">
                {countInterested}K Interested
              </p>
            </li>
            <li className="events__info__item">
              <img src={members} alt="" />
              <p className="events__info__text">
                {countAttending}K Attending
              </p>
            </li>
          </ul>
          <button className="events__button">Interested</button>
        </div>
      </li>
    </>
  );
};

export default EventsCard;
