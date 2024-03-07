import React from 'react';
import logo from '../../assets/logo.svg';
import './style.css';
import zod from 'zod';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {ILogin} from '../../interfaces/interfaces';
import {loginUser} from '../../services/api';
import setAccessToken from '../../services/setAccessToken';
import {useNavigate} from 'react-router-dom';

const LoginShema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6).max(48),
});

export default function HeaderLogin() {
  const navigate = useNavigate();
  const onSumbit = async (data: ILogin) => {
    try {
      const response = await loginUser(data.email, data.password);
      await setAccessToken(response);
      console.log('test');
      navigate('/home');
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
      <header className="header-login">
        <div className="header-login__container">
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
                  className={`login__email input-login ${errors.email ? 'error-input' : ''}`}
                  placeholder="Email"
                  {...register('email')}
                />
                <input
                  type="password"
                  className={`login__password input-login ${errors.password ? 'error-input' : ''}`}
                  placeholder="Password"
                  {...register('password')}
                />
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
