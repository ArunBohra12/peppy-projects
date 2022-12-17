import { useState } from 'react';
import Select from 'react-select';
import { StylesConfig } from 'react-select/dist/declarations/src/styles';

import './tasksFilterDropdown.styles.scss';

type TaskFilterOption = {
  value: string;
  label: string;
};

const options: TaskFilterOption[] = [
  { value: '', label: 'Select...' },
  { value: 'all-open', label: 'All Open' },
  { value: 'my-open', label: 'My Open' },
  { value: 'my-reported', label: 'My Reported' },
  { value: 'done', label: 'Done' },
  { value: 'created-recently', label: 'Created Recently' },
  { value: 'updated-recently', label: 'Updated Recently' },
];

const TasksFilterDropdown = (): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState<TaskFilterOption>(options[0]);

  const handleSelectionChange: () => void = (currentSelectedOption?: TaskFilterOption) => {
    currentSelectedOption && setSelectedOption(currentSelectedOption);
  };

  const customStyles: StylesConfig = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px solid #eeebf2',
      color: state.isSelected ? '#2929ff' : '#333333',
      background: state.isSelected ? 'rgba(73, 73, 199, .08)' : '',
      padding: '1rem 2rem',
      cursor: 'pointer',
    }),
    control: () => ({
      display: 'flex',
      background: '#fff',
      borderRadius: '5px',
      cursor: 'pointer',
    }),
    singleValue: provided => ({ ...provided }),
  };

  return (
    <Select
      styles={customStyles}
      className='task-filter-dropdown'
      defaultValue={options[0]}
      onChange={handleSelectionChange}
      options={options}
    />
  );
};

export default TasksFilterDropdown;
