import Button from '../../button/button.component';
import Input from '../../input/input.component';
import Select from '../../select/select.component';

import { IoFlagOutline } from 'react-icons/io5';

const CraeteTaskFooter = props => {
  const { priorityOptionsList, handlePrioritySelection, handleDueDateSelection, submitHandler } = props;
  return (
    <div className='task-create-footer'>
      <Button className='btn-blue' id='create-task-btn' value={'Create'} onClick={submitHandler} />

      <div className='task-options'>
        <Select options={priorityOptionsList} openDirection='top' handleSelection={handlePrioritySelection}>
          <div className='priority-selector' title='Priority'>
            <IoFlagOutline />
          </div>
        </Select>
        <div className='due-date-selector'>
          <Input
            className='due-date-input'
            type='date'
            title='Due Date'
            onChange={event => handleDueDateSelection(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default CraeteTaskFooter;
