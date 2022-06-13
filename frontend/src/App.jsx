import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// Link

import LoginPage from './pages/loginPage/login.page';
import RegisterPage from './pages/registerPage/register.page';
import ProjectPage from './pages/projectsPage/projects.page';
import DashboardPage from './pages/dashboard/dashboard.page';
import TasksPage from './pages/tasks/tasks.page';
import Sidebar from './components/sidebar/sidebar.component';

import './Main.styles.scss';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: 'ds',
    };
  }

  closeSidebar = () => {
    const sidebarMenu = document.querySelector('.sidebar');
    const sidebarOverlay = document.querySelector('.sidebar-overlay');

    sidebarMenu.classList.remove('sidebar-show');
    sidebarOverlay.classList.remove('show-sidebar-overlay');
  };

  render() {
    if (!this.state.currentUser) {
      return (
        <div className='App'>
          <Switch>
            <Route path='/register' render={() => <RegisterPage handleSubmit={this.handleRegister} />} />
            <Route path='/' render={() => <LoginPage handleSubmit={this.handleLogin} />} />
            <Redirect to='/login' />
          </Switch>
        </div>
      );
    }

    return (
      <div className='App'>
        <main className='main'>
          <Sidebar />
          <div className='sidebar-overlay' onClick={this.closeSidebar}></div>
          <div className='app-screen'>
            <Switch>
              <Route path='/projects' component={ProjectPage} />
              <Route path='/dashboard' component={DashboardPage} />
              <Route path='/tasks' component={TasksPage} />
              <Route path='/profile' component={ProjectPage} />
              <Redirect to='/dashboard' />
            </Switch>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
