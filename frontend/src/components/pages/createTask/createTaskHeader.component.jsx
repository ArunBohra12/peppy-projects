import { useState } from 'react';
import { FormControl, Select, InputLabel, MenuItem } from '@mui/material';
import InputText from '../../input/inputText.component';

const CreateTaskHeader = props => {
  const [taskType, setTaskType] = useState(1);
  const { taskTypeOptions, handleTaskTypeSelection } = props;

  const taskTypeSelectHandler = event => {
    setTaskType(event.target.value);
    handleTaskTypeSelection(event.target.value);
  };

  return (
    <div className='task-create-header'>
      <FormControl className='task-create-select'>
        <InputLabel id='task-type-select-label'>Task Type</InputLabel>
        <Select label='Task Type' labelId='task-type-select-label' value={taskType} onChange={taskTypeSelectHandler}>
          {taskTypeOptions.map((option, i) => (
            <MenuItem key={i} value={option.value}>
              {option.text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <InputText labelText={'Task Title'} inputClass='input-white' type='text' />
    </div>
  );
};

export default CreateTaskHeader;
