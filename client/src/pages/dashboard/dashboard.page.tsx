import { updatePageAndPath } from '../../hooks/updatePageAndPath.hook';

const Dashboard = (): JSX.Element => {
  updatePageAndPath();

  return <div className='dashboard'>dashboard</div>;
};

export default Dashboard;
