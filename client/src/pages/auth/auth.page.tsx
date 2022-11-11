import { Route, Routes } from 'react-router-dom';
import Login from './login';
import Signup from './signup';

const Auth = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </>
  );
};

export default Auth;
