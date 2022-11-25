import { FiLogOut as LogOutBtn, FiMenu as MenuBtn } from 'react-icons/fi';

import { toggleSidebar } from '../sidebar/sidebar.component';

import './header.styles.scss';

const Header = (): JSX.Element => {
  return (
    <header className='header'>
      <div className='header-title'>Dashboard</div>
      <div className='header-menu'>
        <div className='logout-btn'>
          <LogOutBtn className='header-icon' />
        </div>

        <div className='toggle-sidebar-btn' onClick={toggleSidebar}>
          <MenuBtn className='header-icon' />
        </div>
      </div>
    </header>
  );
};

export default Header;
