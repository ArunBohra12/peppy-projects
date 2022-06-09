import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// Link

import LoginPage from './pages/loginPage/login.page';
import RegisterPage from './pages/registerPage/register.page';
import ProjectPage from './pages/projectsPage/projects.page';
import DashboardPage from './pages/dashboard/dashboard.page';
import TasksPage from './pages/tasks/tasks.page';
import Sidebar from './components/sidebar/sidebar.component';

import './App.styles.scss';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: 'sd',
    };
  }

  handleLogin(e) {
    e.preventDefault();
    console.log('submit login form');
  }

  handleRegister(e) {
    e.preventDefault();
    console.log('submit register form');
  }

  render() {
    return (
      <div className='App'>
        {!this.state.currentUser ? (
          <Switch>
            <Route path='/register' render={() => <RegisterPage handleSubmit={this.handleRegister} />} />
            <Route path='/' render={() => <LoginPage handleSubmit={this.handleLogin} />} />
            <Redirect to='/login' />
          </Switch>
        ) : (
          <main className='main'>
            <Sidebar />
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
        )}
      </div>
    );
  }
}

export default App;
