import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import './style.css';
import woman from '../../assets/home/cards/woman.png';
import recomend from '../../assets/home/recomend/recomend.jpg';
import arrow from '../../assets/home/recomend/arrow-right.svg';

import {zodResolver} from '@hookform/resolvers/zod';
import zod from 'zod';
import CardPost from './post-card/CardPost';
import {Link} from 'react-router-dom';

const createPostShema = zod.object({
  createpost: zod.string().min(10).max(500),
});

type FormData = {
  createPost: string;
};

export default function MainHome() {
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
              <CardPost />
            </div>
            <div className="recomend__wrapper">
              <div className="recomend__people">
                <h1 className="recomend__people__title">
                  People you might know
                </h1>
                <ul className="recomend__card">
                  <li className="recomend__card__item">
                    <div className="recomend__card__user">
                      <img src={recomend} alt="" />
                      <div className="recomend__card__info">
                        <h2 className="user__name recomend__card__text">
                          Vishnu Kumar Agrawal
                        </h2>
                        <p className="user__job recomend__card__text">
                          Ux Designer at Divim Technology
                        </p>
                        <p className="data__card recomend__card__text">
                          25 Nov at 12:24 PM
                        </p>
                      </div>
                    </div>
                    <button className="recomend__card__btn">Follow</button>
                  </li>
                  <li className="recomend__card__item">
                    <div className="recomend__card__user">
                      <img src={recomend} alt="" />
                      <div className="recomend__card__info">
                        <h2 className="user__name recomend__card__text">
                          Vishnu Kumar Agrawal
                        </h2>
                        <p className="user__job recomend__card__text">
                          Ux Designer at Divim Technology
                        </p>
                        <p className="data__card recomend__card__text">
                          25 Nov at 12:24 PM
                        </p>
                      </div>
                    </div>
                    <button className="recomend__card__btn">Follow</button>
                  </li>
                  <li className="recomend__card__item">
                    <div className="recomend__card__user">
                      <img src={recomend} alt="" />
                      <div className="recomend__card__info">
                        <h2 className="user__name recomend__card__text">
                          Vishnu Kumar Agrawal
                        </h2>
                        <p className="user__job recomend__card__text">
                          Ux Designer at Divim Technology
                        </p>
                        <p className="data__card recomend__card__text">
                          25 Nov at 12:24 PM
                        </p>
                      </div>
                    </div>
                    <button className="recomend__card__btn">Follow</button>
                  </li>
                </ul>
                <Link to="/" className="recommend__card__link">
                  View all recomendations <img src={arrow} alt="" />{' '}
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
