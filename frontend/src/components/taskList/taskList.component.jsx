import { Component } from 'react';
import { ReactComponent as PriorityIcon } from '../../assets/svg/priority-flag.svg';
import TaskIcon from '../../assets/svg/task.svg';
import BugIcon from '../../assets/svg/bug.svg';
import SubtaskIcon from '../../assets/svg/subtask.svg';
import { IoIosCalendar } from 'react-icons/io';

class TaskList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
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
          <tr>
            <td className='task-id'>
              <span className='task-icon'>
                <img src={TaskIcon} alt='Task' />
              </span>{' '}
              578
            </td>
            <td className='task-name'>fsadfasdf</td>
            <td className='task-assignee'>fasdfsd</td>
            <td className='task-status'>
              <span className='priority-background green'>In Review</span>
            </td>
            <td className='task-priority'>
              <PriorityIcon className='task-list-icon green' title='high' />
            </td>
            <td className='task-due-date'>
              <IoIosCalendar className='task-list-icon' />
              &nbsp;28Sept 2020
            </td>
          </tr>
          <tr>
            <td className='task-id'>
              <span className='task-icon'>
                <img src={BugIcon} alt='Task' />
              </span>{' '}
              578
            </td>
            <td className='task-name'>fsadfasdf</td>
            <td className='task-assignee'>fasdfsd</td>
            <td className='task-status'>
              <span className='priority-background red'>In Review</span>
            </td>
            <td className='task-priority'>
              <PriorityIcon className='task-list-icon red' title='high' />
            </td>
            <td className='task-due-date'>
              <IoIosCalendar className='task-list-icon' />
              &nbsp;28Sept 2020
            </td>
          </tr>
          <tr>
            <td className='task-id'>
              <span className='task-icon'>
                <img src={TaskIcon} alt='Task' />
              </span>{' '}
              578
            </td>
            <td className='task-name'>fsadfasdf</td>
            <td className='task-assignee'>fasdfsd</td>
            <td className='task-status'>
              <span className='priority-background yellow'>To Do</span>
            </td>
            <td className='task-priority'>
              <PriorityIcon className='task-list-icon yellow' title='high' />
            </td>
            <td className='task-due-date'>
              <IoIosCalendar className='task-list-icon' />
              &nbsp;28Sept 2020
            </td>
          </tr>
          <tr>
            <td className='task-id'>
              <span className='task-icon'>
                <img src={BugIcon} alt='Task' />
              </span>{' '}
              578
            </td>
            <td className='task-name'>fsadfasdf</td>
            <td className='task-assignee'>fasdfsd</td>
            <td className='task-status'>
              <span className='priority-background green'>In Review</span>
            </td>
            <td className='task-priority'>
              <PriorityIcon className='task-list-icon green' title='high' />
            </td>
            <td className='task-due-date'>
              <IoIosCalendar className='task-list-icon' />
              &nbsp;28Sept 2020
            </td>
          </tr>

          <tr>
            <td className='task-id'>
              <span className='task-icon'>
                <img src={TaskIcon} alt='Task' />
              </span>{' '}
              578
            </td>
            <td className='task-name'>Complete ui for projects PeppyProjects</td>
            <td className='task-assignee'>fasdfsd</td>
            <td className='task-status'>
              <span className='priority-background green'>In Review</span>
            </td>
            <td className='task-priority'>
              <PriorityIcon className='task-list-icon green' title='high' />
            </td>
            <td className='task-due-date'>
              <IoIosCalendar className='task-list-icon' />
              &nbsp;28Sept 2020
            </td>
          </tr>
          <tr>
            <td className='task-id'>
              <span className='task-icon'>
                <img src={SubtaskIcon} alt='Task' />
              </span>{' '}
              578
            </td>
            <td className='task-name'>fsadfasdf</td>
            <td className='task-assignee'>fasdfsd</td>
            <td className='task-status'>
              <span className='priority-background red'>In Review</span>
            </td>
            <td className='task-priority'>
              <PriorityIcon className='task-list-icon red' title='high' />
            </td>
            <td className='task-due-date'>
              <IoIosCalendar className='task-list-icon' />
              &nbsp;28Sept 2020
            </td>
          </tr>
          <tr>
            <td className='task-id'>
              <span className='task-icon'>
                <img src={SubtaskIcon} alt='Task' />
              </span>{' '}
              578
            </td>
            <td className='task-name'>fsadfasdf</td>
            <td className='task-assignee'>fasdfsd</td>
            <td className='task-status'>
              <span className='priority-background blue'>In Progress</span>
            </td>
            <td className='task-priority'>
              <PriorityIcon className='task-list-icon blue' title='high' />
            </td>
            <td className='task-due-date'>
              <IoIosCalendar className='task-list-icon' />
              &nbsp;28Sept 2020
            </td>
          </tr>
          <tr>
            <td className='task-id'>
              <span className='task-icon'>
                <img src={TaskIcon} alt='Task' />
              </span>{' '}
              578
            </td>
            <td className='task-name'>fsadfasdf</td>
            <td className='task-assignee'>fasdfsd</td>
            <td className='task-status'>
              <span className='priority-background green'>Done</span>
            </td>
            <td className='task-priority'>
              <PriorityIcon className='task-list-icon green' title='high' />
            </td>
            <td className='task-due-date'>
              <IoIosCalendar className='task-list-icon' />
              &nbsp;28Sept 2020
            </td>
          </tr>
          <tr>
            <td className='task-id'>
              <span className='task-icon'>
                <img src={SubtaskIcon} alt='Task' />
              </span>{' '}
              578
            </td>
            <td className='task-name'>fsadfasdf</td>
            <td className='task-assignee'>fasdfsd</td>
            <td className='task-status'>
              <span className='priority-background yellow'>In Review</span>
            </td>
            <td className='task-priority'>
              <PriorityIcon className='task-list-icon yellow' title='high' />
            </td>
            <td className='task-due-date'>
              <IoIosCalendar className='task-list-icon' />
              &nbsp;28Sept 2020
            </td>
          </tr>
          <tr>
            <td className='task-id'>
              <span className='task-icon'>
                <img src={TaskIcon} alt='Task' />
              </span>{' '}
              578
            </td>
            <td className='task-name'>fsadfasdf</td>
            <td className='task-assignee'>fasdfsd</td>
            <td className='task-status'>
              <span className='priority-background red'>In Review</span>
            </td>
            <td className='task-priority'>
              <PriorityIcon className='task-list-icon red' title='high' />
            </td>
            <td className='task-due-date'>
              <IoIosCalendar className='task-list-icon' />
              &nbsp;28Sept 2020
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default TaskList;
