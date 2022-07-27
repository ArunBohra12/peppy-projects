import Button from '../../button/button.component';
import FormGroup from '../../formGroup/formGroup.component';

const RegisterForm = () => {
  return (
    <>
      <FormGroup label='Organization Name' id='register-organization-name' inputType='text' placeholder='Organization name' />
      <FormGroup label='Email' id='register-email' inputType='email' placeholder='Your email' />
      <FormGroup label='Password' id='register-password' inputType='password' placeholder='Your password' />
      <Button value={'Register'} className='btn--blue' />
    </>
  );
};

export default RegisterForm;
