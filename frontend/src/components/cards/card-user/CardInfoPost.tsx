import React, {useEffect, useState} from 'react';
import testPost from '../../../assets/home/cards/test-post.png';
import {CardInfoPostProps, Likes, User} from '../../../interfaces/interfaces';
import {formatDate, getUserIdFromToken} from '../../../services/utils';
import {Controller, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {createCommentSchema} from '../../../services/schema';
import {getDataRequest, postDataRequest} from '../../../services/api';
import CardProfileInfo from './CardProfileInfo';
import {Link} from 'react-router-dom';
import woman from '../../../assets/home/cards/woman.png';
import comment from '../../../assets/home/cards/comment.png';
import likeImg from '../../../assets/home/cards/like-outline.png';
import likeImgFill from '../../../assets/home/cards/like-fill.png';


interface CommentData {
  content: string;
  user_id: string;
  post_id: string;
}


const CardInfoPost: React.FC<CardInfoPostProps> = (props) => {
  const {
    handleSubmit,
    formState: {errors},
    control,
  } = useForm<CommentData>({
    resolver: zodResolver(createCommentSchema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
    shouldFocusError: true,
  });
  const [formattedDate, setFormattedDate] = useState<string>();
  const [showComments, setShowComments] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [comments, setComments] = useState<[]>([]);
  const [like, setLike] = useState<boolean>(false);
  const [likesArray, setLikesArray] = useState<Likes[]>(props.post.likes);

  const onSubmit = async (data: CommentData) => {
    try {
      const myId = await getUserIdFromToken();
      const myData = {
        content: data.content,
        user_id: myId,
        post_id: props.post.id,
      };
      const response = await postDataRequest(myData, '/createComment');
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const setLikePost = async () => {
    try {
      const myId: number = await getUserIdFromToken();
      const myData = {user_id: myId, post_id: props.post.id};
      const response = await postDataRequest(myData, '/createLike');
    } catch (error) {
      console.error('error', error);
    }
  };

  useEffect(() => {
    const fetchFormattedDate = async () => {
      try {
        const date = await formatDate(props.post.createdAt);
        setFormattedDate(date);
      } catch (error) {
        console.error('Error formatting date:', error);
      }
    };
    const getData = async () => {
      try {
        const data = await getDataRequest('/getUser');
        setUser(data.user);
        const getComments = await getDataRequest(`/getCommentsByPostId/${props.post.id}`);
        setComments(getComments.data);
      } catch (error) {
        console.error('Error', error);
      }
    };
    const checkLikes = async () => {
      const myId = await getUserIdFromToken();
      const someState = likesArray[0].user_id == myId ? setLike(true) : setLike(false);
      console.log('someState', someState);
      console.log('likesArray', likesArray);
      console.log('like', like);

    };
    fetchFormattedDate();
    getData();
    checkLikes();
  }, []);

  return (
    <div className="card-news__post">
      <div className="card-profile__info">
        <img src={woman} alt="" />
        <div className="card-user__info">
          <Link to={`/profile/${props.post.user.id}`} style={{color: 'black'}}>
            <h2 className="card-user__name">{props.post.user.first_name + ' ' + props.post.user.last_name}</h2>
          </Link>
          <p className="card-user__job">Ux Designer at Divim Technology</p>
          <p className="card-user__data">{formattedDate}</p>
        </div>
      </div>
      <div className="card-post__text">
        <p>
          {
            props.post.text
          }
        </p>
      </div>
      <div className="card-post__img">
        <img className="post__img" src={testPost} alt="" />
        <ul className="post-analytics">
          <li className="post-analytics__item">
            <button className="post-analytics__btn" onClick={() => setLikePost()}>
              {
                like ? <img src={likeImgFill} alt="" /> : (
                  <img src={likeImg} alt="" />

                )
              }
              <p style={{fontSize: 16}}>{props.post.likes.length}</p>
            </button>
          </li>
          <li className="post-analytics__item">
            <button className="post-analytics__btn" onClick={() => setShowComments(!showComments)}>
              <img src={comment} alt="" />
              <p style={{fontSize: 16}}>{comments.length}</p>
            </button>
          </li>
        </ul>
      </div>
      {
        showComments && (
          <form className="post-create-comment__wrapper" onSubmit={handleSubmit(onSubmit)}>
            {
              user && (
                <CardProfileInfo user={user} />
              )
            }
            <Controller
              name="content"
              control={control}
              render={({field}) => (
                <textarea
                  className="create-comment__input"
                  placeholder="Create comment"
                  {...field}
                />
              )}
            />
            <button className="create-comment__btn" type="submit">Send</button>
          </form>
        )
      }
    </div>
  );
};
export default CardInfoPost;