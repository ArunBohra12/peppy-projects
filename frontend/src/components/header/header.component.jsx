import { useEffect } from 'react';
import { IoMdMenu as MenuIcon } from 'react-icons/io';
import logOutIcon from '../../assets/svg/logout-icon.svg';

const Header = props => {
  const { page } = props;

  useEffect(() => {
    document.title = 'PeppyProjects - ' + page;
  });

  const openSidebar = () => {
    const sidebarMenu = document.querySelector('.sidebar');
    const sidebarOverlay = document.querySelector('.sidebar-overlay');

    sidebarMenu.classList.add('sidebar-show');
    sidebarOverlay.classList.add('show-sidebar-overlay');
  };

  const handleLogout = () => {
    console.log('logout');
  };

  return (
    <header className='header'>
      <div className='header-title'>{page}</div>
      <div className='logout-btn' onClick={handleLogout}>
        <img src={logOutIcon} alt='Logout' title='Logout' />
      </div>
      <div className='sidebar-btn' onClick={openSidebar}>
        <MenuIcon />
      </div>
    </header>
  );
};

export default Header;
