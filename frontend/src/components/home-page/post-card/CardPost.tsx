import React from 'react';

import CardInfoUser from './CardInfoUser';
import CardInfoPost from './CardInfoPost';

export default function CardPost() {
  return (
    <div className="card-post__wrapper">
      <CardInfoUser />
      <CardInfoPost />
    </div>
  );
}
