import React from 'react';
import Input from '../shared/Input';
import {AuthorizationProps, Registration} from '../../interfaces/interfaces';
import {postDataRequest} from '../../services/api';
import setAccessToken from '../../services/setAccessToken';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {RegistrationSchema} from '../../validationSchema/schema';
import Button from '../shared/buttons/Button';
import {useNavigate} from 'react-router-dom';

const SignUp: React.FC<AuthorizationProps> = ({toggleForm}) => {
  const navigate = useNavigate();
  const onSubmit = async (data: Registration) => {
    try {
      console.log('data', data);
      const response = await postDataRequest(
        data, '/v1/registration',
      );
      console.log('response', response);
      await setAccessToken(response);
      navigate('/home');
      console.log(response);
    } catch (error) {
      console.error('Error', error);
    }
  };
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<Registration>({
    resolver: zodResolver(RegistrationSchema),
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
        <h1 className="form__title">Sign Up</h1>
        <Input name="first_name" register={register} error={errors.first_name} placeholder="First Name" />
        <Input name="last_name" register={register} error={errors.last_name} placeholder="Last Name" />
        <Input name="email" register={register} error={errors.email} placeholder="Email" />
        <Input name="password" error={errors.password} register={register} typeText="password"
               placeholder="Password" />
        <Button text="Continue" style="authorization__btn" padding={'12px 50px'} />
        <p className="p-1"> Already have an account? <span
          style={{color: '#1C836D', cursor: 'pointer', fontWeight: 700}} onClick={toggleForm}>Log in</span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;