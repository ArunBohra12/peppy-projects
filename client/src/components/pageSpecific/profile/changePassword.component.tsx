import React, { useState } from 'react';

import Button from '../../button/button.component';
import FormGroup from '../../formGroup/formGroup.component';

const ChangePassword = (): JSX.Element => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleChangePassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('password changed');
  };

  return (
    <form onSubmit={handleChangePassword}>
      <FormGroup
        id='current-password'
        label='Current Password'
        otherInputAttributes={{
          type: 'password',
          value: currentPassword,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => setCurrentPassword(e.target.value),
        }}
      />

      <FormGroup
        id='new-password'
        label='New Password'
        otherInputAttributes={{
          type: 'password',
          value: newPassword,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value),
        }}
      />

      <FormGroup
        id='confirm-new-password'
        label='Confirm New Password'
        otherInputAttributes={{
          type: 'password',
          value: confirmNewPassword,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => setConfirmNewPassword(e.target.value),
        }}
      />

      <Button>Update Password</Button>
    </form>
  );
};

export default ChangePassword;
