import React, { useState } from 'react';
import Button from '../../button/button.component';
import FormGroup from '../../formGroup/formGroup.component';

const UserSettings = () => {
  const [name, setName] = useState('Arun');
  const email = 'arunbohra@gmail.com';

  const handleChangeSettings = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Settings updated');
  };

  return (
    <form onSubmit={handleChangeSettings}>
      <FormGroup
        id='full-name'
        label='Full Name'
        otherInputAttributes={{
          value: name,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value),
        }}
      />

      <FormGroup
        id='update-email'
        label='Email'
        otherInputAttributes={{ type: 'email', value: email, readOnly: true }}
      />

      <Button>Update Profile</Button>
    </form>
  );
};

export default UserSettings;
