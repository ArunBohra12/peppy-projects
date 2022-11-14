import { Routes, Route } from 'react-router-dom';
import Auth from './pages/auth/auth.page';

import './scss/global.scss';
import './scss/app.scss';

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path='*' element={<Auth />} />
    </Routes>
  );
};

export default App;
