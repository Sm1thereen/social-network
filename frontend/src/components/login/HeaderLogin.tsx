import React from 'react';
import logo from '../../assets/logo.svg';
import './style.css';
import zod from 'zod';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {ILogin} from '../../interfaces/interfaces';

const LoginShema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6).max(48),
});

export default function HeaderLogin() {
  const onSumbit = async (data: ILogin) => {
    try {
      console.log('data:', data);
    } catch (error) {
      console.error('Error', error);
    }
  };
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<ILogin>({
    resolver: zodResolver(LoginShema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
    shouldFocusError: true,
  });
  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__logo">
            <img src={logo} alt="" />
          </div>
          <div className="header__body">
            <nav className="nav__form">
              <form
                action=""
                className="form__login"
                onSubmit={handleSubmit(onSumbit)}
              >
                <input
                  type="text"
                  className="login__email input-login"
                  placeholder="Email"
                  {...register('email')}
                />
                {errors.email && (
                  <p style={{color: 'red', fontWeight: '500'}}>
                    {errors.email.message}
                  </p>
                )}
                <input
                  type="text"
                  className="login__password input-login"
                  placeholder="Password"
                  {...register('password')}
                />
                {errors.password && (
                  <p style={{color: 'red', fontWeight: '500'}}>
                    Password 6 between 48 symbols
                  </p>
                )}
                <button className="login__button" type="submit">
                  Login
                </button>
              </form>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
