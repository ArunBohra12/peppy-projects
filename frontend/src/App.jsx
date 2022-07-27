import { Component } from 'react';

import LoginRegisterPage from './pages/loginAndRegister/loginRegisterPage.page';
import Header from './components/header/header.component';
import Sidebar from './components/sidebar/sidebar.component';
import Main from './components/main/main.component';

import './components.scss';
import './app.styles.scss';

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: 'ss',
    };
  }

  render() {
    if (!this.state.user) {
      return <LoginRegisterPage />;
    }

    return (
      <div className='root'>
        <Header />
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default App;
