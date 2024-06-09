import React, {useEffect, useState} from 'react';
import {getDataRequest} from '../../../services/api';
import {User} from '../../../interfaces/interfaces';
import CardInfoUser from '../../../components/cards/card-user/CardInfoUser';

const Recommend = () => {
  const [recommendUsers, setRecommendUsers] = useState<User[]>([]);
  const [textButton, setTextButton] = useState('Follow');
  useEffect(() => {
    const getData = async () => {
      const getData = await getDataRequest('/getAllUsers');
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
        <CardInfoUser key={recommendUser.id} user={recommendUser} textButton={textButton}
                      setTextButton={setTextButton} />
      ))}
    </>
  );
};

export default Recommend;