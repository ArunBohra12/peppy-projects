import { useEffect } from 'react';
import logOutIcon from '../../assets/svg/logout-icon.svg';

const Header = props => {
  const { page } = props;

  useEffect(() => {
    document.title = 'PeppyProjects - ' + page;
  });

  const handleLogout = () => {
    console.log('logout');
  };

  return (
    <header className='header'>
      <div className='header-title'>{page}</div>
      <div className='logout-btn' onClick={handleLogout}>
        <img src={logOutIcon} alt='Logout' title='Logout' />
      </div>
    </header>
  );
};

export default Header;
