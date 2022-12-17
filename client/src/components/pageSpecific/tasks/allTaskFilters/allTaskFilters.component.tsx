import { tasksFilters } from './taskFilterOptions';

import SingleTaskFilter from './singleTaskFilter.component';

import './allTaskFilters.styles.scss';

const AllTaskFilters = (): JSX.Element => {
  const handleChange = (val: any) => {
    console.log(val);
  };

  return (
    <div className='task-filter-slider-content'>
      <div className='filter-head'>
        <h3>Filter</h3>

        <p className='reset-filters'>Reset</p>
      </div>
      <div className='task-filters-container'>
        {tasksFilters.map((option, i) => (
          <SingleTaskFilter key={i} option={option} />
        ))}
      </div>
    </div>
  );
};

export default AllTaskFilters;
