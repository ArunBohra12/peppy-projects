import { useEffect, useState } from 'react';
import ApiFeatures from '../../api/apiFeatures';
import { ReactComponent as PriorityIcon } from '../../assets/svg/icons/priority-flag.svg';
import { ReactComponent as TaskIcon } from '../../assets/svg/icons/task.svg';
import { ReactComponent as CalenderIcon } from '../../assets/svg/icons/calender-icon.svg';

function camelize(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
}

const TaskList = props => {
  const { taskList } = props;
  const [statusColors, setStatusColors] = useState({});

  useEffect(() => {
    const api = new ApiFeatures();

    const brandDesignInfo = api.getBrandDesignInfo();
    setStatusColors(brandDesignInfo.statusColors);
  }, []);

  return (
    <>
      <div className='task-list-container'>
        <table className='task-list-table'>
          <thead className='task-list-table-header'>
            <tr>
              <th className='task-list-table-header-cell id-col'>ID</th>
              <th className='task-list-table-header-cell title-col'>Title</th>
              <th className='task-list-table-header-cell assignee-col'>Assignee</th>
              <th className='task-list-table-header-cell status-col'>Status</th>
              <th className='task-list-table-header-cell priority-col'>Priority</th>
              <th className='task-list-table-header-cell due-date-col'>Due Date</th>
            </tr>
          </thead>
          <tbody className='task-list-table-body'>
            {taskList.map((task, index) => {
              const taskStatus = camelize(task.status);
              const [taskStatusColor, statusBackground] = [statusColors[taskStatus], statusColors[taskStatus] + '21'];

              return (
                <tr key={index} className='task-list-table-body-row'>
                  <td className='task-list-table-body-cell id-col'>
                    <TaskIcon className='task-icon' /> {task.id}
                  </td>
                  <td className='task-list-table-body-cell title-cell title-col'>{task.title}</td>
                  <td className='task-list-table-body-cell assignee-col'>{task.assignee.name}</td>
                  <td className='task-list-table-body-cell status-col'>
                    <span className='task-status-box' style={{ color: taskStatusColor, backgroundColor: statusBackground }}>
                      {task.status}
                    </span>
                  </td>
                  <td className='task-list-table-body-cell priority-cell priority-col'>
                    <PriorityIcon className={`${task.priority.toLowerCase()} priority-icon`} title={task.priority} />
                  </td>
                  <td className='task-list-table-body-cell due-date-cell due-date-col'>
                    <CalenderIcon />
                    {task.dueDate}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TaskList;
