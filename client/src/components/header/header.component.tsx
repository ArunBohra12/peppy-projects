import { FiLogOut as LogOutBtn, FiMenu as MenuBtn } from 'react-icons/fi';

import { PageContext } from '../../context/page.context';
import { toggleSidebar } from '../sidebar/sidebar.component';

import './header.styles.scss';

const Header = (): JSX.Element => {
  const { currentPage } = PageContext();

  return (
    <header className='header'>
      <div className='header-title'>{currentPage.pageName}</div>
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
