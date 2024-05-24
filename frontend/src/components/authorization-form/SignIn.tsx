import React from 'react';
import Input from '../shared/Input';
import {AuthorizationProps, Login} from '../../interfaces/interfaces';
import {postDataRequest} from '../../services/api';
import setAccessToken from '../../services/setAccessToken';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {LoginSchema} from '../../validationSchema/schema';
import Button from '../shared/buttons/Button';
import {useNavigate} from 'react-router-dom';


const SignIn: React.FC<AuthorizationProps> = ({toggleForm}) => {
  const navigate = useNavigate();
  const onSubmit = async (data: Login) => {
    try {
      const response = await postDataRequest(data, '/v1/login');
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
  } = useForm<Login>({
    resolver: zodResolver(LoginSchema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
    shouldFocusError: true,
  });
  return (
    <div>
      <form
        action=""
        className="registration__form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="form__title">Log In</h1>
        <Input name="email" register={register} error={errors.email} placeholder="Email" />
        <Input name="password" register={register} error={errors.password} typeText="password"
               placeholder="Password" />
        <Button text="Continue" style="authorization__btn" padding={'12px 50px'} type="submit" />
        <p className="p-1"> Don't have an account? <span
          style={{color: '#1C836D', cursor: 'pointer', fontWeight: 700}} onClick={toggleForm}>Sign up</span>
        </p>
      </form>
    </div>
  );
};

export default SignIn;