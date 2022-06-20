import { useState } from 'react';

const Select = props => {
  const { children, options, openDirection, handleSelection, setSelectedOptionHandler } = props;

  const [isDropdownOpen, setDropdownState] = useState(false);
  const className = openDirection === 'top' ? 'opens-top' : 'opens-down';

  const selectOption = index => {
    setDropdownState(!isDropdownOpen);
    if (setSelectedOptionHandler) {
      setSelectedOptionHandler(options[index].text);
    }

    handleSelection(index);
  };

  const openCloseDropdown = () => setDropdownState(!isDropdownOpen);
  return (
    <div className='select'>
      <div className='select-btn' onClick={openCloseDropdown}>
        {children}
      </div>
      <div className={`select-options ${isDropdownOpen ? 'dropdown-opened' : 'dropdown-closed'} ${className}`}>
        {options &&
          options.map((option, index) => (
            <div key={index} className='select-option' title={option.text} onClick={() => selectOption(index)}>
              {option.text}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Select;
