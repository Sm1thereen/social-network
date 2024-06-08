import React, {useEffect, useState} from 'react';
import woman from '../../../assets/home/cards/woman.png';
import testPost from '../../../assets/home/cards/test-post.png';
import like from '../../../assets/home/cards/like-outline.png';
import {formatDate} from '../../../services/utils';
import {CardPostProfileProps} from '../../../interfaces/interfaces';
import comment from '../../../assets/home/cards/comment.png';


const CardPostProfile: React.FC<CardPostProfileProps> = (props) => {
  const [formattedData, setFormattedData] = useState<string>();
  useEffect(() => {
    const getData = async () => {
      const date = await formatDate(props.post?.createdAt);
      setFormattedData(date);
    };
    getData();
  }, []);
  return (
    <div className="card-news__post">
      <div className="card-profile__info">
        <img src={woman} alt="" />
        <div className="card-user__info">
          <h2 className="card-user__name">{props.user?.first_name + ' ' + props.user?.last_name}</h2>
          <p className="card-user__job">Ux Designer at Divim Technology</p>
          <p className="card-user__data">{formattedData}</p>
        </div>
      </div>
      <div className="card-post__text">
        {
          props.post.text
        }
      </div>
      <div className="card-post__img">
        <img className="post__img" src={testPost} alt="" />
        <ul className="post-analytics">
          <li className="post-analytics__item">
            <button className="post-analytics__btn">
              <img src={like} alt="" />
            </button>
            <p className="post-analytics__count">15</p>
          </li>
          <li className="post-analytics__item">
            <button className="post-analytics__btn">
              <img src={comment} alt="" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardPostProfile;
