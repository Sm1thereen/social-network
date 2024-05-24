import React, {useEffect, useState} from 'react';
import {getDataRequest} from '../../../services/api';
import {User} from '../../../interfaces/interfaces';
import CardInfoUser from '../../../components/cards/CardInfoUser';

const Recommend = () => {
  const [recommendUsers, setRecommendUsers] = useState<User[]>([]);

  useEffect(() => {
    const getData = async () => {
      const getData = await getDataRequest('/v1/getAllUsers');
      if (Array.isArray(getData.users)) {
        setRecommendUsers(getData.users);
      }
      console.log('getData:', getData.users);
    };
    getData();
  }, []);
  return (
    <>
      {recommendUsers !== undefined && recommendUsers.map((recommendUser) => (
        <CardInfoUser key={recommendUser.id} user={recommendUser} />
      ))}
    </>
  );
};

export default Recommend;