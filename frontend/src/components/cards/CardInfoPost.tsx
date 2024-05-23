import React, {useEffect, useState} from 'react';
import testPost from '../../../assets/home/cards/test-post.png';
import like from '../../../assets/home/cards/like.svg';
import bookmark from '../../../assets/header/bookmark.svg';
import {Post} from '../../../interfaces/interfaces';
import woman from '../../../assets/home/cards/woman.png';
import {formatDate} from '../../../services/utils';

interface CardInfoPostProps {
  post: Post;
}

const CardInfoPost: React.FC<CardInfoPostProps> = (props) => {
  const [formattedDate, setFormattedDate] = useState<string>();

  useEffect(() => {
    const fetchFormattedDate = async () => {
      try {
        const date = await formatDate(props.post.createdAt);
        setFormattedDate(date);
      } catch (error) {
        console.error('Error formatting date:', error);
      }
    };
    fetchFormattedDate();
  }, [props.post.createdAt]);


  return (
    <div className="card-news__post">
      <div className="card-profile__info">
        <img src={woman} alt="" />
        <div className="card-user__info">
          <h2 className="card-user__name">{props.post.user.first_name + ' ' + props.post.user.last_name}</h2>
          <p className="card-user__job">Ux Designer at Divim Technology</p>
          <p className="card-user__data">{formattedDate}</p>
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