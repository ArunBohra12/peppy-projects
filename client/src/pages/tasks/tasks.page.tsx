import { useState } from 'react';
import { BsFunnel as FilterIcon } from 'react-icons/bs';

import { updatePageAndPath } from '../../hooks/updatePageAndPath.hook';

import Button from '../../components/button/button.component';
import Slider from '../slider/slider.component';
import TaskSearch from '../../components/pageSpecific/tasks/tasksSearch/taskSearch.component';
import TasksFilterDropdown from '../../components/pageSpecific/tasks/tasksFilterDropdown/tasksFilterDropdown.component';
import TasksList from '../../components/pageSpecific/tasks/tasksList/tasksList.component';
import AllTaskFilters from '../../components/pageSpecific/tasks/allTaskFilters/allTaskFilters.component';

import './tasks.styles.scss';

const Tasks = (): JSX.Element => {
  updatePageAndPath();
  const [showCustomFilter, setShowCustomFilter] = useState<boolean>(false);

  const toggleCustomFilter = () => setShowCustomFilter(sliderState => !sliderState);

  return (
    <div>
      <div className='filter-options'>
        <TaskSearch />
        <Button otherButtonAttributes={{ onClick: toggleCustomFilter }}>
          <FilterIcon />
        </Button>
        <Slider
          sliderState={showCustomFilter}
          toggleSliderState={toggleCustomFilter}
          sliderClass='tasks-filter-slider'
          overlayBackground='transparent'>
          <AllTaskFilters />
        </Slider>
        <TasksFilterDropdown />
      </div>
      <TasksList />
    </div>
  );
};

export default Tasks;
