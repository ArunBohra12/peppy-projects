import { updatePageAndPath } from '../../hooks/updatePageAndPath.hook';

import GreetingContainer from '../../components/pageSpecific/dashboard/greetingsContainer/greetingsContainer.component';
import UserCards from '../../components/pageSpecific/dashboard/userInfoCards/userInfoCards.component';
import RecentTasks from '../../components/pageSpecific/dashboard/tasks/recentTasks.component';

const Dashboard = (): JSX.Element => {
  updatePageAndPath();

  return (
    <div className='dashboard'>
      <GreetingContainer />
      <UserCards />
      <RecentTasks />
    </div>
  );
};

export default Dashboard;
