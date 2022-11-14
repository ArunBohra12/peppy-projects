import { useLocation } from 'react-router-dom';

import authImageLeft from '../../assets/img/others/loginImageLeft.png';
import authImageRight from '../../assets/img/others/loginImageRight.png';

import Login from './login';
import Signup from './signup';
import Card from '../../components/card/card.component';

import './authPage.styles.scss';

const Auth = (): JSX.Element => {
  const { pathname } = useLocation();

  return (
    <div className='auth-page'>
      <div className='auth-page-images'>
        <img src={authImageLeft} alt='Peppy Projects' />
        <img src={authImageRight} alt='Peppy Projects' />
      </div>

      <Card cardClass='auth-form-container'>{pathname === '/auth/signup' ? <Signup /> : <Login />}</Card>
    </div>
  );
};

export default Auth;
