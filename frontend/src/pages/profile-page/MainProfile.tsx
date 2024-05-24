import React, {useEffect, useState} from 'react';
import Following from '../users-page/categories/Following';
import Followers from '../users-page/categories/Followers';
import {Post, User} from '../../interfaces/interfaces';
import {getDataRequest} from '../../services/api';
import CardPostProfile from '../../components/cards/CardPostProfile';
import HeaderProfile from './HeaderProfile';
import {useParams} from 'react-router-dom';
import './style.css';
import HeaderNav from '../../components/shared/HeaderNav';


const MainProfile = () => {
  const {id} = useParams();
  const [page, setPage] = useState<string>('posts');
  const [dataUser, setDataUser] = useState<User | null>({first_name: '', last_name: ''});
  const [posts, setPosts] = useState<Post[]>([]);
  const buttons = [
    {label: 'Posts', value: 'posts'},
    {label: 'Following', value: 'following'},
    {label: 'Followers', value: 'followers'},
  ];
  useEffect(() => {
    const fetchDataUser = async () => {
      const userId = id;
      console.log('userId', userId);
      const data = await getDataRequest(`/v1/getUserById/${userId}`);
      console.log('data.user', data.user);
      setDataUser(data.user);
      const posts = await getDataRequest(`/posts/${userId}`);
      if (Array.isArray(posts.data)) {
        const reverseData = posts.data.reverse();
        setPosts(reverseData);
      }
    };
    fetchDataUser();
  }, [id]);
  return (
    <section className="profile-page">
      <div className="profile__header">
        <HeaderProfile user={dataUser} />
        <div className="profile__info__container">
          <div className="profile__info__wrapper">
            <HeaderNav buttons={buttons} page={page} setPage={setPage} />
            {/*<nav className="profile__nav">*/}
            {/*  <button className={`follow__nav__btn ${page === 'posts' ? 'btn-active' : ''}`}*/}
            {/*          onClick={() => setPage('posts')}>Posts*/}
            {/*  </button>*/}
            {/*  <button className={`follow__nav__btn ${page === 'following' ? 'btn-active' : ''}`}*/}
            {/*          onClick={() => setPage('following')}>Following*/}
            {/*  </button>*/}
            {/*  <button className={`follow__nav__btn ${page === 'followers' ? 'btn-active' : ''}`}*/}
            {/*          onClick={() => setPage('followers')}>Followers*/}
            {/*  </button>*/}
            {/*</nav>*/}
            {
              page === 'posts' &&
              <div className="posts__content">
                {posts &&
                  posts.map((post) => (
                    <CardPostProfile key={post.id} post={post} user={dataUser} />
                  ))
                }
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
  );
};

export default MainProfile;
