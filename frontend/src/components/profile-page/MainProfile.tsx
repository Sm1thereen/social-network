import React, {useEffect, useState} from 'react';
import profileImg from '../../assets/profile/profileImg.jpg';
import './style.css';
import Following from '../follow-page/follow/Following';
import Followers from '../follow-page/follow/Followers';
import CardPost from '../home-page/post-card/CardPost';
import {getUserById} from '../../services/api';
import getHeader from '../../services/getHeader';
import {IUser} from '../../interfaces/interfaces';


const MainProfile = () => {
  const [page, setPage] = useState<'posts' | 'following' | 'followers'>('posts');
  const [dataUser, setDataUser] = useState<IUser | null>({firstName: '', lastName: ''});

  useEffect(() => {
    const fetchData = async () => {
      const headerProps = await getHeader();
      if (headerProps !== undefined) {
        setDataUser(headerProps);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <section className="profile-page">
        <div className="profile__header">
          <div className="profile__container">
            <div className="header__info">
              <img src={profileImg} alt="" className="profile__header__img" />
              <div className="header__info__contact">
                <h1 className="header__title">{dataUser?.firstName} {dataUser?.lastName}</h1>
                <p className="header__job">Ux Designer at Divim Technology</p>
                <p className="header__location">Jaipur, India</p>
              </div>
              <div className="button__list">
                <button className="connect__btn header__btn">
                  Connect
                </button>
                <button className="email__btn header__btn">
                  Send an email
                </button>
                <button className="follow__btn header__btn">
                  Follow
                </button>
              </div>
            </div>
          </div>
          <div className="profile__info__container">
            <div className="profile__info__wrapper">
              <nav className="profile__nav">
                <button className={`follow__nav__btn ${page === 'posts' ? 'btn-active' : ''}`}
                        onClick={() => setPage('posts')}>Posts
                </button>
                <button className={`follow__nav__btn ${page === 'following' ? 'btn-active' : ''}`}
                        onClick={() => setPage('following')}>Following
                </button>
                <button className={`follow__nav__btn ${page === 'followers' ? 'btn-active' : ''}`}
                        onClick={() => setPage('followers')}>Followers
                </button>
              </nav>
              {
                page === 'posts' &&
                <div className="posts__content">
                  <CardPost />
                  <CardPost />
                </div>
              }
              <div className="follow__content">
                {page === 'following' &&
                  <div className="following__content">
                    <Following />
                  </div>
                }{page === 'followers' &&
                <div className="following__content">
                  <Followers />
                </div>
              }
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default MainProfile;
