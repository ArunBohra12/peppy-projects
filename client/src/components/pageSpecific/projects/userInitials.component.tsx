type UserInitialsProps = {
  users: any[];
  totalUsers: number;
};

const UserInitials = ({ users, totalUsers }: UserInitialsProps) => {
  const userCircleColors = ['#bfa8fb', '#fba7a8', '#bbd690', '#aaceec', '#f6e7a9', '#999999'];

  const getInitials = (name: string): string => {
    return name
      .split(' ')
      .map(word => word[0].toUpperCase())
      .join('');
  };

  let totalUserCircles = 0;

  return (
    <>
      {users
        .filter((el, i) => i < 5)
        .map((user, i) => {
          totalUserCircles++;
          return (
            <div className='user-initials-circle' style={{ background: userCircleColors[i] }} key={i} title={user.name}>
              {getInitials(user.name)}
            </div>
          );
        })}

      {totalUsers > 5 && (
        <div className='user-initials-circle' style={{ background: userCircleColors[5] }}>
          +{totalUsers - totalUserCircles}
        </div>
      )}
    </>
  );
};

export default UserInitials;
