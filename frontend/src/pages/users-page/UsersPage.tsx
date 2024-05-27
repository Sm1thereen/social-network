import React, {useState} from 'react';
import './style.css';
import Following from './categories/Following';
import HeaderNav from '../../components/shared/HeaderNav';
import Recommend from './categories/Recommend';

const UsersPage = () => {
  const [page, setPage] = useState<string>('recommend');
  const buttons = [
    {label: 'Recommend', value: 'recommend'},
    {label: 'Following', value: 'following'},
    {label: 'Followers', value: 'followers'},
  ];
  return (
    <>
      <main className="main-content">
        <div className="users __container">
          <HeaderNav buttons={buttons} page={page} setPage={setPage} />
          <div className="users__content">
            {page === 'recommend' && <Recommend />}
            {page === 'following' && <Following />}
            {page === 'followers' && <Following />}
          </div>
        </div>
      </main>
    </>
  );
};

export default UsersPage;