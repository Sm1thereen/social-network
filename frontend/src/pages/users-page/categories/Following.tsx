import React, {useEffect, useState} from 'react';
import {getDataRequest} from '../../../services/api';
import {getUserIdFromToken} from '../../../services/utils';
import CardInfoUser from '../../../components/cards/card-user/CardInfoUser';
import {User} from '../../../interfaces/interfaces';

const Following = () => {
  const [followings, setFollowings] = useState<User[]>();
  const [textButton, setTextButton] = useState('Unfollow');
  const countFollow = 176;

  useEffect(() => {
    const getData = async () => {
      const myId = await getUserIdFromToken();
      const user = await getDataRequest(`/following/${myId}`);
      if (Array.isArray(user.data)) {
        setFollowings(user.data);
      }
    };
    getData();
  }, []);

  return (
    <>
      <h2 className="following__title">You are following {countFollow} people</h2>
      {
        followings !== undefined && followings.map((user, index) => (
          <CardInfoUser key={index} user={user} textButton={textButton} setTextButton={setTextButton} />
        ))
      }
    </>
  );
};

export default Following;
