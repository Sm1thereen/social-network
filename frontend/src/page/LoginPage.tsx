import React from 'react';
import HeaderLogin from '../components/login/HeaderLogin';
import MainLogin from '../components/login/MainLogin';

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
