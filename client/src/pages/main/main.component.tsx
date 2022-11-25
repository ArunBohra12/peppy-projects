import { Route, Routes } from 'react-router-dom';
import Header from '../../components/header/header.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import Dashboard from '../dashboard/dashboard.page';

import './main.styles.scss';

const Main = (): JSX.Element => {
  return (
    <main className='app'>
      <Header />
      <Sidebar />
      <div className='panel'>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='*' element={<Dashboard />} />
        </Routes>
      </div>
    </main>
  );
};

export default Main;
