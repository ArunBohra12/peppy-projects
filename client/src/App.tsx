import { Routes, Route } from 'react-router-dom';
import Auth from './pages/auth/auth.page';
import Main from './pages/main/main.component';

import './scss/global.scss';
import './scss/app.scss';

const App = (): JSX.Element => {
  const isLoggedIn = true; // only for development purposes

  return (
    <Routes>
      {/* Need to change the paths based on logged in status of the user */}
      {
        // prettier-ignore
        isLoggedIn === true ? (
          <Route path='*' element={<Main />} />
        ) : (
          <Route path='*' element={<Auth />} />
        )
      }
    </Routes>
  );
};

export default App;
