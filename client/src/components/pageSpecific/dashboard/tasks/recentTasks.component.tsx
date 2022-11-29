import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

import { tasksTableHeadCells, tasksTableDummyData } from '../../../taskTable/tasksTableData';
import Table from '../../../table/table.component';
import TaskTableRow from '../../../taskTable/taskTableRow.component';

import './recentTasks.styles.scss';

const RecentTasks = (): JSX.Element => {
  return (
    <>
      <div className='tasks-heading'>
        <h2>Tasks Due Soon</h2>

        <Link to='/tasks'>
          View All &nbsp;
          <BsArrowRight />
        </Link>
      </div>

      <Table headCells={tasksTableHeadCells} TableBody={<TaskTableRow rowsData={tasksTableDummyData} />} />
    </>
  );
};

export default RecentTasks;
