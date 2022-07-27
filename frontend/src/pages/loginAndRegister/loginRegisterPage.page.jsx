import LoginForm from '../../components/pages/loginAndRegister/loginForm';
import RegisterForm from '../../components/pages/loginAndRegister/registerForm';

import { Switch, Route, Link } from 'react-router-dom';
import Card from '../../components/card/card.component';

import imageLeft from '../../assets/img/login-image-left.png';
import imageRight from '../../assets/img/login-image-right.png';
import logoImg from '../../assets/img/logo.png';

import './loginRegisterPage.styles.scss';

const handleLogin = e => {
  e.preventDefault();
  console.log('login');
};

const handleRegister = e => {
  e.preventDefault();
  console.log('register');
};

const LoginRegisterPage = () => {
  return (
    <div className='login-register-page'>
      <div className='login-images'>
        <img src={imageLeft} alt='PeppyProjects' className='login-image login-image--left' />
        <img src={imageRight} alt='PeppyProjects' className='login-image login-image--right' />
      </div>

      <Card className='login-register-card'>
        <img src={logoImg} alt='PeppyProjects' className='logo' />
        <Switch>
          <Route path='/register'>
            <div className='welcome-message'>
              Manage tasks better
              <br />
              Register to PeppyProjects
            </div>
            <form className='form' onSubmit={handleRegister}>
              <RegisterForm />
            </form>

            <div className='page-redirect'>
              <Link to='/login'>Login instead?</Link>
            </div>
          </Route>
          <Route path='/'>
            <div className='welcome-message'>
              Welcome back! <br />
              Log in to continue
            </div>
            <form className='form' onSubmit={handleLogin}>
              <LoginForm />
            </form>

            <div className='page-redirect'>
              <Link to='/register'>Register instead?</Link>
            </div>
          </Route>
        </Switch>
      </Card>

      <div className='copyright-text'>&copy; 2022 PeppyProjects</div>
    </div>
  );
};

export default LoginRegisterPage;
