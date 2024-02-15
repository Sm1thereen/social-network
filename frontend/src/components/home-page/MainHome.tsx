import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import './style.css';
import woman from '../../assets/home/cards/woman.png';

import {zodResolver} from '@hookform/resolvers/zod';
import zod from 'zod';
import CardPost from './post-card/CardPost';
import RecommendAccount from './recommend/RecommendAccount';
import RecommendEvents from './recommend/RecommendEvents';

const createPostShema = zod.object({
  createpost: zod.string().min(10).max(500),
});

type FormData = {
  createPost: string;
};

const MainHome = () => {
  const {
    handleSubmit,
    formState: {errors},
    control,
  } = useForm<FormData>({
    resolver: zodResolver(createPostShema),
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
              <div className="create-post__wrapper">
                <div className="create-post__photo">
                  <img src={woman} alt="" />
                </div>
                <Controller
                  name="createPost"
                  control={control}
                  render={({field}) => (
                    <textarea
                      className="create__post"
                      placeholder="What's on your mind?"
                      {...field}
                    />
                  )}
                />
              </div>
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