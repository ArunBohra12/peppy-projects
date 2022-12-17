import { useState } from 'react';
import { BsSearch as SearchIcon } from 'react-icons/bs';

import Button from '../../../button/button.component';
import Input from '../../../input/input.component';

import './taskSearch.styles.scss';

type TaskSearchProps = {
  handleFilter: (key: string, value: string) => void;
};

const TaskSearch = (): JSX.Element => {
  const [searchField, setSearchField] = useState<string>('');

  const handleSearch = (): void => {
    console.log(searchField);
  };

  const searchFieldChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchField(e.target.value);
  };

  return (
    <div className='search-task-container'>
      <Input
        className='search-task-input'
        otherInputAttributes={{
          type: 'search',
          placeholder: 'Search...',
          value: searchField,
          onChange: searchFieldChangeHandler,
        }}
      />
      <Button className='search-task-btn' otherButtonAttributes={{ onClick: handleSearch }}>
        <SearchIcon />
      </Button>
    </div>
  );
};

export default TaskSearch;
