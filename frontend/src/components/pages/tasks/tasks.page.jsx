import { useEffect, useState } from 'react';
import ApiFeatures from '../../../api/apiFeatures';
import PaginationButtons from '../../paginationButtons/paginationButtons.component';
import TaskList from '../../taskList/taskList.component';

const Tasks = () => {
  const [tasksList, setTasksList] = useState([]);

  useEffect(() => {
    const api = new ApiFeatures();
    const tasksDetails = api.getTaskList();
    const { tasks } = tasksDetails;
    setTasksList(tasks);
  }, []);

  return (
    <>
      <TaskList taskList={tasksList} />
      <PaginationButtons />
    </>
  );
};

export default Tasks;
