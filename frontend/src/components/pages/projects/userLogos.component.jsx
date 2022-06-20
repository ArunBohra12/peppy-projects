const userLogoColors = new Map([
  [0, 'purple'],
  [1, 'pink'],
  [2, 'green'],
  [3, 'sky-blue'],
  [4, 'yellow'],
]);

const UserLogos = props => {
  const { users, totalUsers } = props;

  return (
    <>
      {users.map((user, i) => {
        return (
          <div key={i} className={`user-logo user-logo-${userLogoColors.get(i)}`} title={user}>
            {user.split(' ').map(name => name[0].toUpperCase())}
          </div>
        );
      })}
      {totalUsers > 5 ? <div className='user-logo user-logo-gray'>+{totalUsers - 5}</div> : ''}
    </>
  );
};

export default UserLogos;
