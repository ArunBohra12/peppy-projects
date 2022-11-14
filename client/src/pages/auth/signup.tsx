import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import logoText from '../../assets/img/logos/logo-blue-name.png';

import Button from '../../components/button/button.component';
import FormGroup from '../../components/formGroup/formGroup.component';

type SignupFormInputValues = {
  name: string;
  organizationName: string;
  email: string;
  password: string;
};

const defaultSignupFormValue: SignupFormInputValues = {
  name: '',
  organizationName: '',
  email: '',
  password: '',
};

const Signup = (): JSX.Element => {
  const [formFields, setFormFields] = useState<SignupFormInputValues>(defaultSignupFormValue);

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signupHandler: React.FormEventHandler = e => {
    e.preventDefault();

    console.log(formFields);
    console.log('Signup');
  };

  return (
    <form className='signup-form' onSubmit={signupHandler}>
      <div className='auth-form-details'>
        <img className='logo-img' src={logoText} alt='Peppy Logo' />

        <div className='form-message'>
          Welcome back! <br /> Log in to continue
        </div>
      </div>

      <FormGroup
        label='Name'
        id='name'
        otherInputAttributes={{
          placeholder: 'Type your name',
          onChange: inputChangeHandler,
          name: 'name',
          type: 'text',
        }}
      />

      <FormGroup
        label='Organization Name'
        id='organization-name'
        otherInputAttributes={{
          placeholder: 'Type your organization name',
          onChange: inputChangeHandler,
          name: 'organizationName',
          type: 'text',
        }}
      />

      <FormGroup
        label='Email'
        id='email'
        otherInputAttributes={{
          placeholder: 'Type your email',
          onChange: inputChangeHandler,
          name: 'email',
          type: 'email',
        }}
      />
      <FormGroup
        label='Password'
        id='password'
        otherInputAttributes={{
          placeholder: 'Type your password',
          onChange: inputChangeHandler,
          name: 'password',
          type: 'password',
        }}
      />

      <Button variant='blue' className='btn-full'>
        Signup
      </Button>

      <div className='auth-page-redirect'>
        <Link to='/login'>Sign in instead?</Link>
      </div>
    </form>
  );
};

export default Signup;
