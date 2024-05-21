import React, {useState, useEffect} from 'react';
import CardInfoPost from './CardInfoPost';
import {getDataRequest} from '../../../services/api';
import {Post} from '../../../interfaces/interfaces';

const CardPost: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getData = async () => {
      const posts = await getDataRequest('/api/posts');
      if (Array.isArray(posts.data)) {
        const reverseData = posts.data.reverse();
        setPosts(reverseData);
      }
    };
    getData();
    console.log('posts:', posts);
  }, []);

  return (
    <>
      {posts &&
        posts.map((post) => (
          <CardInfoPost key={post.id} post={post} />
        ))
      }
    </>
  );
};

export default CardPost;
