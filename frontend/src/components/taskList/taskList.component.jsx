import { Component } from 'react';
import { ReactComponent as PriorityIcon } from '../../assets/svg/priority-flag.svg';

import TaskIcon from '../../assets/svg/task.svg';
import BugIcon from '../../assets/svg/bug.svg';
import SubtaskIcon from '../../assets/svg/subtask.svg';
import Modal from '../modal/modal.component';
import ShowTask from './showTask.component';

import { IoIosCalendar } from 'react-icons/io';

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: props.tasks ?? [],
      showTask: false,
    };
  }

  taskToOpen = [];

  openTask = task => {
    this.taskToOpen = task;
    this.setState({ showTask: true });
  };
  handleCloseModal = () => this.setState({ showTask: false });

  render() {
    return (
      <>
        <table className='task-list-table'>
          <thead className='task-list-header'>
            <tr>
              <th className='task-id'>ID</th>
              <th className='task-name'>Title</th>
              <th className='task-assignee'>Assignee</th>
              <th className='task-status'>Status</th>
              <th className='task-priority'>Priority</th>
              <th className='task-due-date'>Due Date</th>
            </tr>
          </thead>
          <tbody className='task-list-body'>
            {this.state.tasks.map((task, i) => {
              const taskIcon =
                task.taskType === 1 ? TaskIcon : task.taskType === 2 ? SubtaskIcon : task.taskType === 3 ? BugIcon : '';
              const taskPriority =
                task.taskPriority === 1
                  ? 'Low'
                  : task.taskPriority === 2
                  ? 'Medium'
                  : task.taskPriority === 3
                  ? 'High'
                  : task.taskPriority === 4
                  ? 'Urgent'
                  : '';

              let taskStatus, taskColor;

              switch (task.taskStatus) {
                case 1:
                  taskStatus = 'Todo';
                  taskColor = 'yellow';
                  break;

                case 2:
                  taskStatus = 'In Progress';
                  taskColor = 'blue';
                  break;

                case 3:
                  taskStatus = 'In Review';
                  taskColor = 'red';
                  break;

                case 4:
                  taskStatus = 'Done';
                  taskColor = 'green';
                  break;

                default:
                  taskStatus = '';
                  taskColor = '';
                  break;
              }

              return (
                <tr key={i} onClick={() => this.openTask(task)}>
                  <td className='task-id'>
                    <span className='task-icon'>
                      <img src={taskIcon} alt='Task' />
                    </span>
                    &nbsp; {task.taskId}
                  </td>
                  <td className='task-name'>{task.taskName}</td>
                  <td className='task-assignee'>{task.taskAssignee.name}</td>
                  <td className='task-status'>
                    <span className={`priority-background ${taskColor}`}>{taskStatus}</span>
                  </td>
                  <td className='task-priority'>
                    <PriorityIcon className={`task-list-icon ${taskColor}`} title={taskPriority} />
                  </td>
                  <td className='task-due-date'>
                    <IoIosCalendar className='task-list-icon' />
                    &nbsp;{task.taskDueDate}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Modal closeModal={this.handleCloseModal} state={this.state.showTask}>
          {this.state.showTask && <ShowTask task={this.taskToOpen} />}
        </Modal>
      </>
    );
  }
}

export default TaskList;
