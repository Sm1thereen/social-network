import React, {useState} from 'react';
import CardInfoUser from '../../../components/cards/CardInfoUser';

const Following = () => {
  const [isFollow, setIsFollow] = useState(true);
  const countFollow = 176;
  return (
    <>
      <h2 className="following__title">You are following {countFollow} people</h2>
      <ul className="following__list">
        <li className="following__item">
          <div className="following__info__user">
            <CardInfoUser />
          </div>
          <button className={`following__btn ${isFollow ? 'follow__btn' : 'unfollow__btn'}`}
                  onClick={() => setIsFollow(!isFollow)}>
            {isFollow ? 'Unfollow' : 'Follow'}
          </button>
        </li>
        <li className="following__item">
          <div className="following__info__user">
            <CardInfoUser />
          </div>
          <button className={`following__btn ${isFollow ? 'follow__btn' : 'unfollow__btn'}`}
                  onClick={() => setIsFollow(!isFollow)}>
            {isFollow ? 'Unfollow' : 'Follow'}
          </button>
        </li>
        <li className="following__item">
          <div className="following__info__user">
            <CardInfoUser />
          </div>
          <button className={`following__btn ${isFollow ? 'follow__btn' : 'unfollow__btn'}`}
                  onClick={() => setIsFollow(!isFollow)}>
            {isFollow ? 'Unfollow' : 'Follow'}
          </button>
        </li>
        <li className="following__item">
          <div className="following__info__user">
            <CardInfoUser />
          </div>
          <button className={`following__btn ${isFollow ? 'follow__btn' : 'unfollow__btn'}`}
                  onClick={() => setIsFollow(!isFollow)}>
            {isFollow ? 'Unfollow' : 'Follow'}
          </button>
        </li>
        <li className="following__item">
          <div className="following__info__user">
            <CardInfoUser />
          </div>
          <button className={`following__btn ${isFollow ? 'follow__btn' : 'unfollow__btn'}`}
                  onClick={() => setIsFollow(!isFollow)}>
            {isFollow ? 'Unfollow' : 'Follow'}
          </button>
        </li>
      </ul>
    </>
  );
};

export default Following;