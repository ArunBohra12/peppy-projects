import { Route, Routes } from 'react-router-dom';

import ErrorBoundary from '../../components/errors/ErrorBoundary.component';
import Header from '../../components/header/header.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import Dashboard from '../dashboard/dashboard.page';
import Projects from '../projects/projects.page';
import Tasks from '../tasks/tasks.page';
import Settings from '../settings/settings.page';
import Profile from '../profile/profile.page';

import './main.styles.scss';

const Main = (): JSX.Element => {
  return (
    <main className='app'>
      <Header />
      <Sidebar />
      <div className='panel'>
        <ErrorBoundary>
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/tasks' element={<Tasks />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='*' element={<Dashboard />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </main>
  );
};

export default Main;
