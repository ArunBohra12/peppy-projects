import CreateTaskBody from './createTaskBody.component';
import CraeteTaskFooter from './createTaskFooter.component';
import CreateTaskHeader from './createTaskHeader.component';

const priorityOptions = [
  {
    text: 'High',
    value: 1,
  },
  {
    text: 'Medium',
    value: 2,
  },
  {
    text: 'Low',
    value: 3,
  },
];

const taskTypeOptions = [
  {
    text: 'Task',
    value: 1,
  },
  {
    text: 'Subtask',
    value: 2,
  },
  {
    text: 'Bug',
    value: 3,
  },
];

const CreateTask = () => {
  let selectedPriority, selectedDueDate, selectedTaskType, selectedProject, selectedAssignee;
  const handlePrioritySelection = selectedIndex => {
    selectedPriority = priorityOptions[selectedIndex]?.value;
    console.log(selectedPriority);
  };

  const handleDueDateSelection = dueDate => {
    selectedDueDate = dueDate;
    console.log(selectedDueDate);
  };

  const handleTaskTypeSelection = value => {
    selectedTaskType = taskTypeOptions[value - 1]?.value;
  };

  const handleProjectSelection = value => {
    selectedProject = value;
    console.log(selectedProject);
  };

  const handleAssigneeSelection = value => {
    selectedAssignee = value;
    console.log(selectedAssignee);
  };

  const handleSubmit = () => {
    console.log(selectedPriority, selectedDueDate, selectedTaskType, selectedProject, selectedAssignee);
  };

  return (
    <div className='task-create'>
      <CreateTaskHeader taskTypeOptions={taskTypeOptions} handleTaskTypeSelection={handleTaskTypeSelection} />
      <CreateTaskBody handleProjectSelection={handleProjectSelection} handleAssigneeSelection={handleAssigneeSelection} />
      <CraeteTaskFooter
        priorityOptionsList={priorityOptions}
        handlePrioritySelection={handlePrioritySelection}
        handleDueDateSelection={handleDueDateSelection}
        submitHandler={handleSubmit}
      />
    </div>
  );
};

export default CreateTask;
