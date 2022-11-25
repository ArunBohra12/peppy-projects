import { Link } from 'react-router-dom';
import { BsFillPlusSquareFill as CreateBtn } from 'react-icons/bs';

import logoWhite from '../../assets/img/logos/logo-white.png';
import logoWhiteName from '../../assets/img/logos/logo-white-name.png';

import SidebarNavigation from './sidebarNavigation.component';

import './sidebar.styles.scss';

export const toggleSidebar = (): void => {
  const sidebar = document.querySelector('aside.sidebar') as HTMLElement;
  const sidebarOverlay = document.querySelector('.sidebar-overlay') as HTMLElement;

  sidebar.classList.toggle('open');
  sidebarOverlay.classList.toggle('open');
};

const Sidebar = (): JSX.Element => {
  return (
    <>
      <div className='sidebar-overlay' onClick={toggleSidebar}></div>
      <aside className='sidebar'>
        <div className='sidebar-logo'>
          <picture>
            <source media='(max-width: 768px)' srcSet={logoWhiteName} />
            <img src={logoWhite} alt='PeppyProjects' />
          </picture>
        </div>

        <SidebarNavigation />

        <div className='sidebar-actions'>
          <div className='create-task-action'>
            <CreateBtn />
            <div className='sidebar-link-text'>Create Task</div>
          </div>

          <Link to='/profile' className='profile-page-link'>
            <div className='user-logo'>AB</div>
            <div className='sidebar-link-text'>Arun Bohra</div>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
