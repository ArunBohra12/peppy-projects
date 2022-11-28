import { updatePageAndPath } from '../../hooks/updatePageAndPath.hook';

const Profile = (): JSX.Element => {
  updatePageAndPath();

  return <div>Profile page</div>;
};

export default Profile;
