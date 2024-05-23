import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import arrow from '../../assets/events/chevron-right.svg';
import RecommendEvents from '../home-page/recommend/RecommendEvents';
import EventsCard from './events-card/EventsCard';

const EventsMain = () => {

  return (
    <>
      <main className="main-events">
        <div className="events__container">
          <div className="search__events">
            <input type="text" className="search__event" placeholder="Search events here" />
            {/*<button className="find-events__btn">Find Events</button>*/}
          </div>
          <div className="events">
            <div className="events__general">
              <div className="create__event">
                <button className="create__event__btn">
                  + Create event
                </button>
              </div>
              <div className="general__events">
                <h2 className="general__title">General</h2>
                <ul className="general__list">
                  <li className="general__events__list">
                    <Link className="general__events__link" to="#">
                      Recommended
                      <img src={arrow} alt="" />
                    </Link>
                  </li>
                  <li className="general__events__list">
                    <Link className="general__events__link" to="#">
                      Interested
                      <img src={arrow} alt="" />
                    </Link>
                  </li>
                  <li className="general__events__list">
                    <Link className="general__events__link" to="#">
                      Your Events
                      <img src={arrow} alt="" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="scheduled__events">
                <RecommendEvents title="Sheduled Events" />
              </div>
            </div>
            <div className="events__card">
              <ul className="events__card__list">
                <EventsCard />
                <EventsCard />
                <EventsCard />
                <EventsCard />
                <EventsCard />
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default EventsMain;