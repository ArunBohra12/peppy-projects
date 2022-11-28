import { updatePageAndPath } from '../../hooks/updatePageAndPath.hook';

const Settings = (): JSX.Element => {
  updatePageAndPath();

  return <div>Settings page</div>;
};

export default Settings;
