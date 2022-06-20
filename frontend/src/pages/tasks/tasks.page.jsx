import { Component } from 'react';
import Header from '../../components/header/header.component';
import TaskList from '../../components/taskList/taskList.component';

class TasksPage extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
    };
  }

  UNSAFE_componentWillMount() {
    const sampleTask = {
      taskId: 2333,
      taskName: 'Test task',
      taskType: 1,
      taskAssignee: {
        name: 'Arun',
        id: '3w92kfsjdflskf',
      },
      taskStatus: 2,
      taskPriority: 1,
      taskDueDate: '23 Sept 2022',
    };

    const sampleTask2 = {
      taskId: 2333,
      taskName: 'Test task',
      taskType: 1,
      taskAssignee: {
        name: 'Arun',
        id: '3w92kfsjdflskf',
      },
      taskStatus: 3,
      taskPriority: 3,
      taskDueDate: '23 Sept 2022',
    };

    this.setState({ tasks: [sampleTask, sampleTask2, sampleTask, sampleTask2] });
  }

  render() {
    return (
      <>
        <Header page='Tasks' />

        <section className='tasks panel'>
          <h2>All Tasks</h2>
          <br />

          <TaskList tasks={this.state.tasks} />
        </section>
      </>
    );
  }
}

export default TasksPage;
