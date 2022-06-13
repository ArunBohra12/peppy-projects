import sidebarLogo from '../../assets/img/white-icon.png';
import sidebarLogoWithTitle from '../../assets/img/white-logo.png';
import addTaskIcon from '../../assets/svg/add-icon.svg';

import { Link } from 'react-router-dom';

import SidebarLinksMenu from './sidebarLinksMenu.component';

const Sidebar = () => {
  const handleCreateTask = () => {
    console.log('task created');
  };

  return (
    <aside className='sidebar'>
      <picture>
        <source media='(min-width: 768px)' srcSet={sidebarLogo} />
        <source media='(max-width: 768px)' srcSet={sidebarLogoWithTitle} />
        <img src={sidebarLogo} alt='PeppyProjects' className='sidebar-logo' />
      </picture>
      <SidebarLinksMenu />

      <div className='sidebar-menu-bottom'>
        <div className='sidebar-task-add' onClick={handleCreateTask}>
          <img src={addTaskIcon} alt='Add Task' title='Add Task' />
          <span className='sidebar-menu-item-title'>Create Task</span>
        </div>

        <div className='sidebar-menu-bottom-profile'>
          <Link to='/profile' className='sidebar-menu-bottom-profile-icon'>
            AB
          </Link>
          <span className='sidebar-menu-item-title'>Arun Bohra</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
