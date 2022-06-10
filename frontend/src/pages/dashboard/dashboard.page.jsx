import Header from '../../components/header/header.component';
import QuickInfo from '../../components/quickInfo/quickInfo.component';
import TaskList from '../../components/taskList/taskList.component';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

import greetingImg from '../../assets/svg/welcome.svg';
import projectsImg from '../../assets/svg/projects.svg';
import tasksImg from '../../assets/svg/total-tasks.svg';
import pendingImg from '../../assets/svg/pending.svg';
import dueDateImg from '../../assets/svg/due-date.svg';

const DashboardPage = () => {
  const quickInfoCards = [
    {
      id: 1,
      number: 23,
      type: 'Projects',
      image: projectsImg,
    },
    {
      id: 2,
      number: 354,
      type: 'Total Tasks',
      image: tasksImg,
    },
    {
      id: 3,
      number: 11,
      type: 'Pending',
      image: pendingImg,
    },
    {
      id: 4,
      number: 23,
      type: 'Due tasks',
      image: dueDateImg,
    },
  ];

  return (
    <>
      <Header page='Dashboard' />

      <section className='dashboard panel'>
        <div className='greeting-container'>
          <div className='greeting-user'>
            <div className='greeting-name'>Hi , Arun!</div>
            <div className='greeting-text'>Check out any upcoming tasks and recent projects below!</div>
          </div>

          <div className='greeting-img'>
            <img src={greetingImg} alt='Welcome' />
          </div>
        </div>

        <QuickInfo quickInfoCards={quickInfoCards} />

        <div className='tasks-list-heading'>
          <h2>Tasks Due Soon</h2>
          <Link className='all-tasks-link' to='/tasks'>
            View All <IoIosArrowForward />
          </Link>
        </div>

        <div className='tasks-list'>
          <TaskList name='arun' />
        </div>
      </section>
    </>
  );
};

export default DashboardPage;
