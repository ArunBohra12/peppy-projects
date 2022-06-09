import { useState } from 'react';
import sidebarLogo from '../../assets/img/white-icon.png';
import sidebarLogoWithTitle from '../../assets/img/white-logo.png';
import dashboardIcon from '../../assets/svg/dashboard-icon.svg';
import projectIcon from '../../assets/svg/project-icon.svg';
import taskIcon from '../../assets/svg/task-icon.svg';
import addTaskIcon from '../../assets/svg/add-icon.svg';

import { Link } from 'react-router-dom';

import './sidebar.styles.scss';
import SidebarLinksMenu from './sidebarLinksMenu.component';

const Sidebar = () => {
  const path = window.location.pathname.split('/')[1].toLowerCase();
  const [sidebarMenuObj, setSidebarMenu] = useState([
    {
      id: 1,
      link: '/dashboard',
      title: 'Dashboard',
      icon: dashboardIcon,
      active: path === 'dashboard',
    },
    {
      id: 2,
      link: '/projects',
      title: 'Projects',
      icon: projectIcon,
      active: path === 'projects',
    },
    {
      id: 3,
      link: '/tasks',
      title: 'Tasks',
      icon: taskIcon,
      active: path === 'tasks',
    },
  ]);

  const handleCreateTask = () => {
    console.log('task created');
  };

  const activeLinkHandler = e => {
    const selectedItem = e.target.closest('.sidebar-menu-item').getAttribute('title');
    setSidebarMenu([
      {
        id: 1,
        link: '/dashboard',
        title: 'Dashboard',
        icon: dashboardIcon,
        active: selectedItem === 'Dashboard',
      },
      {
        id: 2,
        link: '/projects',
        title: 'Projects',
        icon: projectIcon,
        active: selectedItem === 'Projects',
      },
      {
        id: 3,
        link: '/tasks',
        title: 'Tasks',
        icon: taskIcon,
        active: selectedItem === 'Tasks',
      },
    ]);
  };

  return (
    <aside className='sidebar'>
      <picture>
        <source media='(min-width: 768px)' srcSet={sidebarLogo} />
        <source media='(max-width: 768px)' srcSet={sidebarLogoWithTitle} />
        <img src={sidebarLogo} alt='PeppyProjects' className='sidebar-logo-desktop' />
      </picture>
      <SidebarLinksMenu sidebarMenuObj={sidebarMenuObj} handleMenuChange={activeLinkHandler} />

      <div className='sidebar-menu-bottom'>
        <div className='sidebar-task-add' onClick={handleCreateTask}>
          <img src={addTaskIcon} alt='Add Task' title='Add Task' />
        </div>

        <div>
          <Link to='/profile' className='sidebar-menu-bottom-profile'>
            AB
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
