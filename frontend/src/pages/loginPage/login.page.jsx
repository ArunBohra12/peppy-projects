import loginImgLeft from '../../assets/img/login-image-left.png';
import loginImgRight from '../../assets/img/login-image-right.png';

import LoginForm from '../../components/pages/loginForm/loginForm';

const LoginPage = ({ handleSubmit }) => {
  return (
    <div className='login'>
      <img src={loginImgLeft} alt='LoginPage' className='login-image login-image-left' />
      <img src={loginImgRight} alt='LoginPage' className='login-image login-image-right' />
      <LoginForm handleSubmit={handleSubmit} />

      <div className='copyright'>&copy; Copyright PeppyProjects 2022</div>
    </div>
  );
};

export default LoginPage;
