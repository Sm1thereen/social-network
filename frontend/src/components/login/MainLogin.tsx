import React from 'react';
import meerkat from '../../assets/login/meerkat.svg';
import zod from 'zod';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {IRegistration} from '../../interfaces/interfaces';
import {registrationUser} from '../../services/api';

const RegistrationShema = zod.object({
  name: zod.string().min(3).max(25),
  email: zod.string().email(),
  password: zod.string().min(6).max(48),
});

export default function MainLogin() {
  const onSumbit = async (data: IRegistration) => {
    try {
      const response = await registrationUser(
        data.name,
        data.email,
        data.password
      );
      console.log('response:', response);
    } catch (error) {
      console.error('Error', error);
    }
  };
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<IRegistration>({
    resolver: zodResolver(RegistrationShema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
    shouldFocusError: true,
  });
  return (
    <>
      <main className="main">
        <section className="login__page registration-section">
          <div className="registration-section__container">
            <div className="registration-section__content">
              <h1 className="title__registration">
                <span style={{color: 'gray'}}>Welcome to</span>{' '}
                <span style={{color: '#35c7e4'}}>goAvido</span>
              </h1>
              <img src={meerkat} alt="" />
            </div>
            <div className="registration-section__form">
              <form
                action=""
                className="registration__form"
                onSubmit={handleSubmit(onSumbit)}
              >
                <h1 className="form__title">Registration</h1>
                <input
                  type="text"
                  className="registration__name input-registration"
                  placeholder="Enter name"
                  {...register('name')}
                />
                {errors.name && (
                  <p style={{color: 'red', fontWeight: '500'}}>
                    Name 3 between 25 symbols
                  </p>
                )}
                <input
                  type="text"
                  className="registration__email input-registration"
                  placeholder="Enter email"
                  {...register('email')}
                />
                {errors.email && (
                  <p style={{color: 'red', fontWeight: '500'}}>
                    {errors.email.message}
                  </p>
                )}
                <input
                  type="password"
                  className="registration__password input-registration"
                  placeholder="Enter password"
                  {...register('password')}
                />
                {errors.password && (
                  <p style={{color: 'red', fontWeight: '500'}}>
                    Password 6 between 48 symbols
                  </p>
                )}
                <button className="registration__button" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
