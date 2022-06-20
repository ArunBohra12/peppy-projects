import { useState } from 'react';
import { FormControl, Select, InputLabel, MenuItem } from '@mui/material';
const CreateTaskBody = props => {
  const projectOptions = [
    {
      text: 'arun bohra1',
      value: 1223,
    },
    {
      text: 'arun bohra2',
      value: 1224,
    },
    {
      text: 'arun bohra3',
      value: 121,
    },
    {
      text: 'arun bohra4',
      value: 1222,
    },
  ];

  const assigneeOptions = [
    {
      text: 'arun bohra1',
      value: 5454,
    },
    {
      text: 'Test',
      value: 8465,
    },
    {
      text: 'Arun test',
      value: 65465,
    },
    {
      text: 'arun bohra4',
      value: 5654654,
    },
  ];

  const { handleAssigneeSelection, handleProjectSelection } = props;
  const [project, setProject] = useState(projectOptions[0].value);
  const [assignee, setAssignee] = useState(assigneeOptions[0].value);

  const handleProjectChange = event => {
    setProject(event.target.value);
    handleProjectSelection(event.target.value);
  };

  const handleAssigneeChange = event => {
    setAssignee(event.target.value);
    handleAssigneeSelection(event.target.value);
  };

  return (
    <div className='task-create-body'>
      <div className='select-project-options'>
        <FormControl className='project-select'>
          <InputLabel id='project-select-label'>Task Type</InputLabel>
          <Select label='Project' labelId='project-select-label' value={project} onChange={handleProjectChange}>
            {projectOptions.map((option, i) => (
              <MenuItem key={i} value={option.value}>
                {option.text}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <div className='assign-btn'>Assign to</div>

        <FormControl className='assignee-select'>
          <InputLabel id='project-select-label'>Assignee</InputLabel>
          <Select label='Project' labelId='project-select-label' value={assignee} onChange={handleAssigneeChange}>
            {assigneeOptions.map((option, i) => (
              <MenuItem key={i} value={option.value}>
                {option.text}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className='task-description'>
        <textarea className='textarea' placeholder='Description...'></textarea>
      </div>
    </div>
  );
};

export default CreateTaskBody;
