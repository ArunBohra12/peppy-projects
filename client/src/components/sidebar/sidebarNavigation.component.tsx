import { Link } from 'react-router-dom';
import { PageContext } from '../../context/page.context';
import sidebarNavigationItems from './sidebarNavItems';

const SidebarNavigation = (): JSX.Element => {
  const { currentPage } = PageContext();

  return (
    <div className='sidebar-navigation'>
      {sidebarNavigationItems.map(navItem => {
        const isActive = currentPage.pagePath === navItem.path;

        return (
          <Link
            to={navItem.path}
            key={navItem.name}
            className={`sidebar-navigation-item sidebar-tooltip ${isActive ? 'active' : ''}`}
            data-name={navItem.name}>
            <navItem.icon />
            <div className='sidebar-link-text'>{navItem.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default SidebarNavigation;
