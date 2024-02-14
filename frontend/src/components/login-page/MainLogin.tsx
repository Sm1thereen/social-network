import React from 'react';
import meerkat from '../../assets/login/meerkat.svg';
import zod from 'zod';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {IRegistration} from '../../interfaces/interfaces';
import {registrationUser} from '../../services/api';
import setAccessToken from '../../services/setAccessToken';
import {useNavigate} from 'react-router-dom';

const RegistrationShema = zod.object({
  firstName: zod.string().min(3).max(25),
  lastName: zod.string().min(3).max(25),
  email: zod.string().email(),
  password: zod.string().min(6).max(48),
});

export default function MainLogin() {
  const navigate = useNavigate();
  const onSumbit = async (data: IRegistration) => {
    try {
      const response = await registrationUser(
        data.firstName,
        data.lastName,
        data.email,
        data.password,
      );
      await setAccessToken(response);
      navigate('/home');
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
                  className={`registration__name input-registration ${errors.firstName ? 'error-input' : ''}`}
                  placeholder="Enter First Name"
                  {...register('firstName')}
                />
                <input
                  type="text"
                  className={`registration__name input-registration ${errors.lastName ? 'error-input' : ''}`}
                  placeholder="Enter Last Name"
                  {...register('lastName')}
                />
                <input
                  type="text"
                  className={`registration__email input-registration ${errors.email ? 'error-input' : ''}`}
                  placeholder="Enter email"
                  {...register('email')}
                />
                <input
                  type="password"
                  className={`registration__password input-registration ${errors.password ? 'error-input' : ''}`}
                  placeholder="Enter password"
                  {...register('password')}
                />
                {errors.password ? (
                  <p style={{color: 'red', fontWeight: '500'}}>
                    Password 6 between 48 symbols
                  </p>
                ) : errors.email ? (
                    <p style={{color: 'red', fontWeight: '500'}}>
                      {errors.email.message}
                    </p>
                  )
                  :
                  errors.firstName ? (
                      <p style={{color: 'red', fontWeight: '500'}}>
                        FirstName 3 between 25 symbols
                      </p>
                    ) :
                    errors.firstName && (
                      <p style={{color: 'red', fontWeight: '500'}}>
                        FirstName 3 between 25 symbols
                      </p>
                    )
                }
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
