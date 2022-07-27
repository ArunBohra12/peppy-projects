import { Link, useLocation } from 'react-router-dom';
import { toggleSidebarOpen } from '../../utils/sidebar';
import dashboardIcon from '../../assets/svg/icons/dashboard-icon.svg';
import projectIcon from '../../assets/svg/icons/project-icon.svg';
import taskIcon from '../../assets/svg/icons/task-icon.svg';
import settingsIcon from '../../assets/svg/icons/settings-icon.svg';

const SidebarLinksMenu = () => {
  const { pathname } = useLocation();

  const links = [
    {
      link: '/dashboard',
      title: 'Dashboard',
      icon: dashboardIcon,
      active: pathname === '/dashboard',
    },
    {
      link: '/projects',
      title: 'Projects',
      icon: projectIcon,
      active: pathname === '/projects',
    },
    {
      link: '/tasks',
      title: 'Tasks',
      icon: taskIcon,
      active: pathname === '/tasks',
    },
    {
      link: '/settings',
      title: 'Settings',
      icon: settingsIcon,
      active: pathname === '/settings',
    },
  ];

  const changePage = () => {
    toggleSidebarOpen();
  };

  return (
    <>
      {links.map((link, i) => (
        <Link key={i} className={`sidebar-options-link ${link.active ? 'active-page' : ''}`} to={link.link} onClick={() => changePage(i)} data-title={link.title}>
          <img className='sidebar-options-link-logo' src={link.icon} alt={link.title} />
          <div className='sidebar-options-link-text'>{link.title}</div>
        </Link>
      ))}
    </>
  );
};

export default SidebarLinksMenu;
