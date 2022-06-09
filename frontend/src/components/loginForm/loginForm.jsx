import Button from '../button/button.component';
import Card from '../card/card.component';
import FormGroup from '../formGroup/formGroup';
import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';

const LoginForm = ({ handleSubmit }) => {
  return (
    <Card className='login-form-card'>
      <img src={logo} alt='PeppyProjects' className='login-logo' />
      <h3 className='login-heading'>
        Welcome back!
        <br />
        Log in to continue
      </h3>

      <form className='login-form' onSubmit={handleSubmit}>
        <FormGroup
          label='Registration Code'
          name='registration-code'
          id='registration-code'
          type='text'
          placeholder='Enter registration code'
          required
        />

        <FormGroup label='Email' name='email' id='email' type='email' placeholder='Type your email ' required />

        <FormGroup label='Password' name='password' id='password' type='password' placeholder='Password' required />

        <Button className='btn-blue full-width' value='Login' />
      </form>

      <Link to='/register' className='login-redirect'>
        Register instead?
      </Link>
    </Card>
  );
};

export default LoginForm;
