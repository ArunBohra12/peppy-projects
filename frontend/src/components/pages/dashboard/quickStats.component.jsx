import Card from '../../card/card.component';

import projectsImg from '../../../assets/svg/images/projects.svg';
import tasksImg from '../../../assets/svg/images/total-tasks.svg';
import pendingImg from '../../../assets/svg/images/pending.svg';
import dueDateImg from '../../../assets/svg/images/due-date.svg';

const quickInfoCards = [
  {
    number: 23,
    type: 'Projects',
    image: projectsImg,
  },
  {
    number: 354,
    type: 'Total Tasks',
    image: tasksImg,
  },
  {
    number: 11,
    type: 'Pending',
    image: pendingImg,
  },
  {
    number: 23,
    type: 'Due tasks',
    image: dueDateImg,
  },
];

const QuickStats = () => {
  return (
    <>
      {quickInfoCards.map((cardInfo, i) => (
        <Card key={i} className='quick-stats-box-card'>
          <div className='quick-stat-stats'>
            <h3 className='stat-number'>{cardInfo.number}</h3>
            <div className='stat-title'>{cardInfo.type}</div>
          </div>

          <div className='quick-stat-image'>
            <img src={cardInfo.image} alt={cardInfo.type} />
          </div>
        </Card>
      ))}
    </>
  );
};

export default QuickStats;
