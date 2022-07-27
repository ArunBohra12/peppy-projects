import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import welcomeImage from '../../assets/svg/images/welcome.svg';
import QuickStats from '../../components/pages/dashboard/quickStats.component';
import TaskList from '../../components/taskList/taskList.component';
import ApiFeatures from '../../api/apiFeatures';

import './dashboard.styles.scss';
import Modal from '../../components/modal/modal.component';

const Dashboard = () => {
  const [tasksList, setTasksList] = useState([]);

  useEffect(() => {
    const api = new ApiFeatures();
    const tasksDetails = api.getTaskList();
    const { tasks } = tasksDetails;
    setTasksList(tasks);
  }, []);

  return (
    <>
      <div className='welcome-box'>
        <div className='welcome-box-text'>
          <h2 className='greeting-heading'>Hi Arun Bohra,</h2>
          <p className='greeting-text'>Check out any upcoming tasks and recent projects below!</p>
        </div>

        <div className='welcome-box-image'>
          <img src={welcomeImage} alt='Welcome' />
        </div>
      </div>

      <div className='quick-stats-box'>
        <QuickStats />
      </div>

      <div className='quick-tasks-box'>
        <div className='quick-tasks-box-heading'>
          <h2 className='view-tasks-heading'>Tasks Due Soon</h2>
          <Link className='view-tasks-link' to='/tasks'>
            View All &#65310;
          </Link>
        </div>
      </div>

      <div className='task-quick-view'>
        <TaskList taskList={tasksList} />
      </div>
    </>
  );
};

export default Dashboard;
