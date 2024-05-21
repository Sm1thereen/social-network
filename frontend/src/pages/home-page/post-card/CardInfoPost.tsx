import React from 'react';
import testPost from '../../../assets/home/cards/test-post.png';
import like from '../../../assets/home/cards/like.svg';
import bookmark from '../../../assets/header/bookmark.svg';
import {Post} from '../../../interfaces/interfaces';
import woman from '../../../assets/home/cards/woman.png';

interface CardInfoPostProps {
  post: Post;
}

const CardInfoPost: React.FC<CardInfoPostProps> = (props) => {
  return (
    <div className="card-news__post">
      <div className="card-profile__info">
        <img src={woman} alt="" />
        <div className="card-user__info">
          <h2 className="card-user__name">Vishnu Kumar Agrawal</h2>
          <p className="card-user__job">Ux Designer at Divim Technology</p>
          <p className="card-user__data">25 Nov at 12:24 PM</p>
        </div>
      </div>
      <div className="card-post__text">
        <p>
          {
            props.post.text
          }
        </p>
      </div>
      <div className="card-post__img">
        <img className="post__img" src={testPost} alt="" />
        <ul className="post-analytics">
          <li className="post-analytics__item">
            <img src={like} alt="" />
            <p className="post-analytics__count">15</p>
          </li>
          <li className="post-analytics__item">
            <img src={bookmark} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default CardInfoPost;