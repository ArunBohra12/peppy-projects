import projectImage from '../../../../assets/img/others/project.svg';
import pendingImage from '../../../../assets/img/others/pending.svg';
import totalTasksImage from '../../../../assets/img/others/total-tasks.svg';
import dueTodayImage from '../../../../assets/img/others/due-today.svg';

import Card from '../../../card/card.component';
import QuickInfo from './quickInfo.component';

import './userInfoCards.styles.scss';

const UserCards = (): JSX.Element => {
  return (
    <div className='user-quick-info'>
      <Card>
        <QuickInfo label='Project(s)' count={3} image={projectImage} />
      </Card>
      <Card>
        <QuickInfo label='Total Taks(s)' count={333} image={totalTasksImage} />
      </Card>
      <Card>
        <QuickInfo label='Pending' count={33} image={pendingImage} />
      </Card>
      <Card>
        <QuickInfo label='Due Today' count={45} image={dueTodayImage} />
      </Card>
    </div>
  );
};

export default UserCards;
