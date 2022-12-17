/**
 * It's a dropdown component that takes in an array of options and renders them in a dropdown menu
 * @param {SingleTaskFilterProps}  - options - an array of objects that contain the value and label for
 * each option
 * @returns A JSX element
 */

import { useState } from 'react';
import { BsFunnel as FilterIcon, BsPlusLg as CrossIcon } from 'react-icons/bs';

import Dropdown from '../../../dropdown/dropdown.component';

type TaskFilterOption = {
  value: string;
  label: string;
};

type Filter = {
  name: string;
  options: TaskFilterOption[];
};

type SingleTaskFilterProps = {
  option: Filter;
};

const SingleTaskFilter = ({ option }: SingleTaskFilterProps): JSX.Element => {
  const handleChange = (e: any) => {
    // console.log(e);
  };

  return (
    <div className='task-filter-option'>
      <div className='task-filter-label'>
        <p>{option.name}</p>

        <div className='single-filter-reset'>
          <FilterIcon />
          <CrossIcon className='cross-icon' />
        </div>
      </div>
      <Dropdown options={option.options} controlStyles={{ border: `1px solid #eeebf2` }} handleChange={handleChange} />
    </div>
  );
};

export default SingleTaskFilter;
