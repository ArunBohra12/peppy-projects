import { ReactComponent as LogoutIcon } from '../../assets/svg/icons/logout-icon.svg';
import { ReactComponent as MenuIcon } from '../../assets/svg/icons/bars-icon.svg';
import { toggleSidebarOpen } from '../../utils/sidebar';

import './header.styles.scss';

const logoutUser = () => {
  console.log('Logout user');
};

const Header = () => {
  return (
    <header className='header'>
      <h2 className='heading'>Dashboard</h2>

      <div className='logout' onClick={logoutUser}>
        <LogoutIcon />
      </div>

      <div className='sidebar-menu-btn' onClick={toggleSidebarOpen}>
        <MenuIcon />
      </div>
    </header>
  );
};

export default Header;
