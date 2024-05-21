import React, {useState} from 'react';
import './style.css';
import Following from './follow/Following';
import Followers from './follow/Followers';

const FollowMain = () => {
  const [page, setPage] = useState<'following' | 'followers'>('following');
  const [isFollow, setIsFollow] = useState(true);


  const handleFollowingClick = () => {
    setPage('following');
  };
  const handleFollowersClick = () => {
    setPage('followers');
  };
  return (
    <>
      <main className="main-content">
        <div className="follow__container">
          <nav className="follow__nav">
            <button className={`follow__nav__btn ${page === 'following' ? 'btn-active' : ''}`}
                    onClick={handleFollowingClick}>Following
            </button>
            <button className={`follow__nav__btn ${page === 'followers' ? 'btn-active' : ''}`}
                    onClick={handleFollowersClick}>Followers
            </button>
          </nav>
          <div className="follow__content">
            {page === 'following' &&
              <div className="following__content">
                <Following />
              </div>
            }{page === 'followers' &&
            <div className="following__content">
              <Followers />
            </div>
          }
          </div>
        </div>
      </main>
    </>
  );
};

export default FollowMain;