import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from '../../pages/dashboard/dashboard.page';
import Profile from '../../pages/profile/profile.page';
import Projects from '../../pages/projects/projects.page';
import Footer from '../footer/footer.component';
import Tasks from '../pages/tasks/tasks.page';

const Main = () => {
  return (
    <div className='panel'>
      <Switch>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>

        <Route path='/projects'>
          <Projects />
        </Route>

        <Route path='/tasks'>
          <Tasks />
        </Route>

        <Route path='/profile'>
          <Profile />
        </Route>

        <Route path='/settings'>settings page</Route>

        <Redirect to='/dashboard' />
      </Switch>

      <Footer />
    </div>
  );
};

export default Main;
