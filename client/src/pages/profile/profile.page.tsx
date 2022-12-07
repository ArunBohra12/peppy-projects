import { useState } from 'react';

import { updatePageAndPath } from '../../hooks/updatePageAndPath.hook';

// import UserDetails from '../../components/pages/profile/userDetails.component';
// import UserSettings from '../../components/pages/profile/userSettings.component';
import ChangePassword from '../../components/pageSpecific/profile/changePassword.component';
import UserDetails from '../../components/pageSpecific/profile/userDetails.component';

import './profile.styles.scss';
import UserSettings from '../../components/pageSpecific/profile/userSettings.component';

const Profile = (): JSX.Element => {
  updatePageAndPath();
  const [selectedUserAction, setUserAction] = useState<string>('settings');

  return (
    <div className='profile-page'>
      <div className='profile-actions'>
        <div
          className={`profile-action-btn ${selectedUserAction === 'settings' ? 'active' : ''}`}
          onClick={() => setUserAction('settings')}>
          Settings
        </div>
        <div
          className={`profile-action-btn ${selectedUserAction === 'change-password' ? 'active' : ''}`}
          onClick={() => setUserAction('change-password')}>
          Change Password
        </div>
      </div>

      <div className='user-details-actions'>
        <UserDetails />

        <div className='user-actions'>{selectedUserAction === 'settings' ? <UserSettings /> : <ChangePassword />}</div>
      </div>
    </div>
  );
};

export default Profile;
