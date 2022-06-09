import { Link } from 'react-router-dom';

const SidebarLinksMenu = props => {
  const { sidebarMenuObj, handleMenuChange } = props;

  return (
    <div className='sidebar-menu'>
      {sidebarMenuObj.map(menuItem => (
        <Link key={menuItem.id} to={menuItem.link} className={`sidebar-menu-item ${menuItem.active ? 'active' : ''}`} title={menuItem.title} onClick={handleMenuChange}>
          <img src={menuItem.icon} alt={menuItem.title} />
          <span className='sidebar-menu-item-title'>{menuItem.title}</span>
        </Link>
      ))}
    </div>
  );
};

export default SidebarLinksMenu;
