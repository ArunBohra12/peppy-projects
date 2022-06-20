import loginImgLeft from '../../assets/img/login-image-left.png';
import loginImgRight from '../../assets/img/login-image-right.png';

import RegisterForm from '../../components/pages/registerForm/registerFrom.component';

const RegisterPage = ({ handleSubmit }) => {
  return (
    <div className='login'>
      <img src={loginImgLeft} alt='LoginPage' className='login-image login-image-left' />
      <img src={loginImgRight} alt='LoginPage' className='login-image login-image-right' />
      <RegisterForm handleSubmit={handleSubmit} />

      <div className='copyright'>&copy; Copyright PeppyProjects 2022</div>
    </div>
  );
};

export default RegisterPage;
