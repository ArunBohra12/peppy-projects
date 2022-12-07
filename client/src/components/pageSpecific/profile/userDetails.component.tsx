import { BsFillPersonFill as UserIcon } from 'react-icons/bs';

const UserDetails = () => {
  return (
    <div className='user-details-container'>
      <div className='user-photo'>
        <UserIcon />
      </div>
      <h3 className='user-name'>Arun Bohra</h3>

      <div className='user-email'>
        <p>Email address</p>
        <p className='email-value'>guest@gmail.com</p>
      </div>

      <div className='created-at'>
        <p>Created At</p>
        <p className='created-at-date'>23-06-2003</p>
      </div>
    </div>
  );
};

export default UserDetails;
