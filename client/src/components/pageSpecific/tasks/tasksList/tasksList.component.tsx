import Table from '../../../table/table.component';
import { tasksTableDummyData, tasksTableHeadCells } from '../../../taskTable/tasksTableData';
import TaskTableRow from '../../../taskTable/taskTableRow.component';

const TasksList = (): JSX.Element => {
  return <Table headCells={tasksTableHeadCells} TableBody={<TaskTableRow rowsData={tasksTableDummyData} />} />;
};

export default TasksList;
