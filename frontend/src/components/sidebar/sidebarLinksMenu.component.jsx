import { useState } from 'react';
import { Link } from 'react-router-dom';
import dashboardIcon from '../../assets/svg/dashboard-icon.svg';
import projectIcon from '../../assets/svg/project-icon.svg';
import taskIcon from '../../assets/svg/task-icon.svg';

const SidebarLinksMenu = () => {
  const path = window.location.pathname.split('/')[1] ? window.location.pathname.split('/')[1].toLowerCase() : '/';
  const [sidebarMenuObj, setSidebarMenu] = useState([
    {
      id: 1,
      link: '/dashboard',
      title: 'Dashboard',
      icon: dashboardIcon,
      active: path === 'dashboard' || path === '/',
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
    <div className='sidebar-menu'>
      {sidebarMenuObj.map(menuItem => (
        <Link key={menuItem.id} to={menuItem.link} className={`sidebar-menu-item ${menuItem.active ? 'active' : ''}`} title={menuItem.title} onClick={activeLinkHandler}>
          <img src={menuItem.icon} alt={menuItem.title} />
          <span className='sidebar-menu-item-title'>{menuItem.title}</span>
        </Link>
      ))}
    </div>
  );
};

export default SidebarLinksMenu;
