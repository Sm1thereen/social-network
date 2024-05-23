import React from 'react';
import SignUp from '../../components/authorization-form/SignUp';
import SignIn from '../../components/authorization-form/SignIn';
import meerkat from '../../assets/login/meerkat.svg';
import './style.css';

export default function MainLogin() {
  const [formData, setFormData] = React.useState('login');

  const toggleForm = () => {
    setFormData((prevForm) => (prevForm === 'login' ? 'signup' : 'login'));
  };
  return (
    <>
      <section className="login__page registration-section">
        <div className="registration-section__container">
          <div className="registration-section__content">
            <h1 className="title__registration">
              <span style={{color: 'gray'}}>Welcome to</span>{' '}
              <span style={{color: '#35c7e4'}}>goAvido</span>
            </h1>
            <img src={meerkat} alt="" />
          </div>
          <div className="authorization-section__form">
            {
              formData === 'login' ? (
                <SignIn toggleForm={toggleForm} />
              ) : <SignUp toggleForm={toggleForm} />
            }
          </div>
        </div>
      </section>
    </>
  );
}