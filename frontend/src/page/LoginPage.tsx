import React from 'react';
import HeaderLogin from '../components/login-page/HeaderLogin';
import MainLogin from '../components/login-page/MainLogin';

export default function LoginPage() {
  return (
    <>
      <div className="content">
        <HeaderLogin />
        <MainLogin />
      </div>
    </>
  );
}
