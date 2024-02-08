import React from 'react';

import CardInfoUser from './CardInfoUser';
import CardInfoPost from './CardInfoPost';

const CardPost = () => {
  return (
    <div className="card-post__wrapper">
      <CardInfoUser />
      <CardInfoPost />
    </div>
  );
};
export default CardPost;
