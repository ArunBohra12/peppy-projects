import Button from '../../button/button.component';
import FormGroup from '../../formGroup/formGroup.component';

const LoginForm = () => {
  return (
    <>
      <FormGroup label='Registration Code' id='login-registeration-code' inputType='text' placeholder='Registeration code' />
      <FormGroup label='Email' id='login-email' inputType='email' placeholder='Your Email' />
      <FormGroup label='Password' id='login-password' inputType='password' placeholder='Your Password' />
      <Button value={'Login'} className='btn--blue' />
    </>
  );
};

export default LoginForm;
