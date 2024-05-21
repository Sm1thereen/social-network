import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import woman from '../../assets/home/cards/woman.png';
import {zodResolver} from '@hookform/resolvers/zod';
import zod from 'zod';
import CardPost from './post-card/CardPost';
import RecommendAccount from './recommend/RecommendAccount';
import RecommendEvents from './recommend/RecommendEvents';
import {createPost} from '../../services/api';
import './style.css';


const createPostSchema = zod.object({
  postText: zod.string().min(10).max(500),
});

type FormData = {
  postText: string
};

const onSubmit = async (data: FormData) => {
  try {
    const response = await createPost(data.postText);
    console.log('response', response);

  } catch (error) {
    console.error('Error:', error);
  }
};

const MainHome = () => {
  const {
    handleSubmit,
    formState: {errors},
    control,
  } = useForm<FormData>({
    resolver: zodResolver(createPostSchema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
    shouldFocusError: true,
  });
  return (
    <>
      <main className="main">
        <div className="home__container">
          <section className="main__home">
            <div className="posts__wrapper">
              <form className="create-post__wrapper" onSubmit={handleSubmit(onSubmit)}>
                <div className="create-post__photo">
                  <img src={woman} alt="" />
                </div>
                <Controller
                  name="postText"
                  control={control}
                  render={({field}) => (
                    <textarea
                      className="create__post"
                      placeholder="What's on your mind?"
                      {...field}
                    />
                  )}
                />
                <button className="create__post__btn" type="submit">Public</button>
              </form>
              <div className="card-post__wrapper">
                <CardPost />
              </div>
            </div>
            <div className="recomend__wrapper">
              <RecommendAccount />
              <RecommendEvents title={'Upcoming Events'} />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};
export default MainHome;