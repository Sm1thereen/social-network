import React from 'react';
import Input from '../shared/Input';
import {AuthorizationProps, Registration} from '../../interfaces/interfaces';
import {registrationUser} from '../../services/api';
import setAccessToken from '../../services/setAccessToken';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {RegistrationShema} from '../../validationSchema/schema';
import Button from '../shared/Button';

const SignUp: React.FC<AuthorizationProps> = ({toggleForm}) => {
  const onSumbit = async (data: Registration) => {
    try {
      const response = await registrationUser(
        data.firstName,
        data.lastName,
        data.email,
        data.password,
      );
      await setAccessToken(response);
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
    resolver: zodResolver(RegistrationShema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
    shouldFocusError: true,
  });
  return (
    <div>
      <form
        action=""
        className="registration__form"
        onSubmit={handleSubmit(onSumbit)}
      >
        <h1 className="form__title">Registration</h1>
        <Input name="firstName" register={register} error={errors.firstName} placeholder="First Name" />
        <Input name="lastName" register={register} error={errors.lastName} placeholder="Last Name" />
        <Input name="email" register={register} error={errors.email} placeholder="Email" />
        <Input name="password" error={errors.password} register={register} type="password"
               placeholder="Password" />
        <Button text="Continue" style="authorization__btn" padding={'12px 50px'} />
        <p className="p-1"> Don't have an account? <span
          style={{color: '#1C836D', cursor: 'pointer', fontWeight: 700}} onClick={toggleForm}>Sign up</span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;