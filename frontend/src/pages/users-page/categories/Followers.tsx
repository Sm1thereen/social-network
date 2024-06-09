import React, {useEffect, useState} from 'react';
import CardInfoUser from '../../../components/cards/card-user/CardInfoUser';
import {User} from '../../../interfaces/interfaces';
import {getUserIdFromToken} from '../../../services/utils';
import {getDataRequest} from '../../../services/api';

const Followers = () => {
  const [followers, setFollowers] = useState<User[]>();
  const [textButton, setTextButton] = useState('Follow');

  const countFollow = 75;

  useEffect(() => {
    const getData = async () => {
      const myId = await getUserIdFromToken();
      const user = await getDataRequest(`/followers/${myId}`);
      if (Array.isArray(user.data)) {
        setFollowers(user.data);
      }
    };
    getData();
  }, []);
  return (
    <>
      <h2 className="following__title">{countFollow} people are following you</h2>
      {
        followers !== undefined && followers !== undefined && followers.map((user, index) => (
          <CardInfoUser key={index} user={user} textButton={textButton} setTextButton={setTextButton} />
        ))
      }
    </>
  );
};

export default Followers;