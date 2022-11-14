import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import logoText from '../../assets/img/logos/logo-blue-name.png';

import Button from '../../components/button/button.component';
import FormGroup from '../../components/formGroup/formGroup.component';

type LoginFormInputValues = {
  email: string;
  password: string;
};

const defaultLoginFormValue: LoginFormInputValues = {
  email: '',
  password: '',
};

const Login = (): JSX.Element => {
  const [formFields, setFormFields] = useState<LoginFormInputValues>(defaultLoginFormValue);

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const loginHandler: React.FormEventHandler = e => {
    e.preventDefault();

    console.log('Login');
  };

  return (
    <form className='login-form' onSubmit={loginHandler}>
      <div className='auth-form-details'>
        <img className='logo-img' src={logoText} alt='Peppy Logo' />

        <div className='form-message'>
          Welcome back! <br /> Log in to continue
        </div>
      </div>

      <FormGroup
        label='Email'
        id='email'
        otherInputAttributes={{ placeholder: 'Type your email', onChange: inputChangeHandler, name: 'email' }}
      />
      <FormGroup
        label='Password'
        id='password'
        otherInputAttributes={{ placeholder: 'Type your password', onChange: inputChangeHandler, name: 'password' }}
      />

      <Button variant='blue' className='btn-full'>
        Login
      </Button>

      <div className='auth-page-redirect'>
        <Link to='/signup'>Register instead?</Link>
      </div>
    </form>
  );
};

export default Login;
