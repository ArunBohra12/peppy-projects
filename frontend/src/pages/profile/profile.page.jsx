import { useState } from 'react';
import { ReactComponent as UserIcon } from '../../assets/svg/icons/user-icon.svg';
import Button from '../../components/button/button.component';
import Input from '../../components/input/input.component';
import './profile.styles.scss';

const Profile = () => {
  const [profileOption, setProfileOption] = useState(1);

  const updateProfile = e => {
    e.preventDefault();

    console.log('update profile');
  };

  const updatePassword = e => {
    e.preventDefault();
    console.log('update password');
  };

  return (
    <>
      <div className='profile-options'>
        <div className='brand'>
          Brand: <span className='brand-name'>Test organization</span>
        </div>

        <div className='options-menu'>
          <div className={`options-menu-option ${profileOption === 1 ? 'options-menu-option-active' : ''}`} onClick={() => setProfileOption(1)}>
            Settings
          </div>
          <div className={`options-menu-option ${profileOption === 2 ? 'options-menu-option-active' : ''}`} onClick={() => setProfileOption(2)}>
            Change Password
          </div>
        </div>
      </div>

      <div className='profile-content'>
        <div className='profile-card'>
          <div className='profile-card-user'>
            <div className='profile-card-user-image'>
              <UserIcon />
            </div>
            <h3 className='profile-card-user-name'>Arun Bohra</h3>
          </div>

          <div>
            <div className='profile-label'>Email address</div>
            <div className='profile-card-value'>arunbohra12@gmail.com</div>
          </div>

          <div>
            <div className='profile-label'>Created at</div>
            <div className='profile-card-value'>06 Jun 2019 05:05 AM</div>
          </div>
        </div>

        {profileOption === 1 ? (
          <form className='profile-settings' onSubmit={updateProfile}>
            <div className='profile-detail'>
              <div className='profile-label'>Full Name</div>
              <Input type='text' className='profile-detail-input' defaultValue='Arun Bohra' placeholder='Your full name' />
            </div>

            <div className='profile-detail'>
              <div className='profile-label'>Email</div>
              <Input type='text' disabled className='profile-detail-input' value='arunbohra12@gmail.com' placeholder='Email' readOnly />
            </div>

            <Button value='Update Profile' className='btn--blue profile-btn' />
          </form>
        ) : (
          <form className='profile-change-password' onSubmit={updatePassword}>
            <div className='profile-detail'>
              <div className='profile-label'>
                Old Password<sup>*</sup>
              </div>
              <Input type='password' className='profile-detail-input' placeholder='Your old password' defaultValue='2' />
            </div>

            <div className='profile-detail'>
              <div className='profile-label'>
                New Password<sup>*</sup>
              </div>
              <Input type='password' className='profile-detail-input' placeholder='New Password' minLength='8' defaultValue='2' />
            </div>

            <div className='profile-detail'>
              <div className='profile-label'>
                New Password Confirm<sup>*</sup>
              </div>
              <Input type='password' className='profile-detail-input' placeholder='New Password Confirm' minLength='8' defaultValue='2' />
            </div>

            <Button value='Update Password' className='btn--blue profile-btn' />
          </form>
        )}
      </div>
    </>
  );
};

export default Profile;
