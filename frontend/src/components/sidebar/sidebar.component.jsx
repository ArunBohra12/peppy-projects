import { useState } from 'react';
import SidebarLinksMenu from './sidebarLinksMenu.component';
import { toggleSidebarOpen } from '../../utils/sidebar';
import Modal from '../modal/modal.component';

import logo from '../../assets/img/white-icon.png';
import textLogo from '../../assets/img/white-logo.png';
import { Link } from 'react-router-dom';
import { ReactComponent as CreateTaskIcon } from '../../assets/svg/icons/add-icon.svg';

import './sidebar.styles.scss';

const Sidebar = () => {
  const [createTaskModalState, setCreateTaskModalState] = useState(false);
  const closeModal = () => setCreateTaskModalState(false);

  return (
    <>
      <div className='sidebar-overlay' onClick={toggleSidebarOpen}></div>

      <Modal state={createTaskModalState} closeModal={closeModal}>
        arun bohra
      </Modal>

      <aside className='sidebar'>
        <div className='sidebar-logo'>
          <picture>
            <source media='(max-width: 760px)' srcSet={textLogo} />
            <source media='(min-width: 760px)' srcSet={logo} />
            <img className='sidebar-logo-icon' src={logo} alt='Logo' />
          </picture>
        </div>
        <div className='sidebar-options'>
          <SidebarLinksMenu />
        </div>
        <div className='actions'>
          <div className='create-task' onClick={() => setCreateTaskModalState(prev => !prev.createTaskModalState)}>
            <CreateTaskIcon />
            <div className='actions-title'>Create Task</div>
          </div>

          <Link className='user-profile' to='/profile' onClick={toggleSidebarOpen}>
            <div className='user-profile-icon'>AB</div>

            <div className='actions-title'>Arun Bohra</div>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
