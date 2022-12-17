import { useState, useEffect } from 'react';
import Select from 'react-select';
import { StateManagerProps } from 'react-select/dist/declarations/src/stateManager';
import { StylesConfig } from 'react-select/dist/declarations/src/styles';

/**
 * @property {string} value - The value of the option.
 * @property {string} label - The label of the dropdown
 */
type DropdownOpion = {
  value: string;
  label: string;
};

type DropdownProps = {
  options: DropdownOpion[];
  handleChange?: (currentSelectedOption?: DropdownOpion) => void;
  className?: string;
  otherDropdownProps?: StateManagerProps;
  stylesConfig?: StylesConfig;
  controlStyles?: React.CSSProperties;
  optionStyles?: React.CSSProperties;
  resetDropdown?: () => void;
};

/**
 * @param {DropdownProps} props - DropdownProps
 * component.
 * @returns A React select component
 */
const Dropdown = (props: DropdownProps): JSX.Element => {
  const {
    options,
    className,
    otherDropdownProps,
    stylesConfig,
    controlStyles,
    optionStyles,
    handleChange,
    resetDropdown,
  } = props;

  const [selectValue, setSelectValue] = useState<DropdownOpion>(options[0]);

  useEffect(() => {
    handleChange && handleChange(selectValue);
  }, [selectValue]);

  const handleSelectionChange: () => void = (currentSelectedOption?: DropdownOpion) => {
    currentSelectedOption && setSelectValue(currentSelectedOption);
  };

  /* A custom style object for the dropdown. */
  const customStyles: StylesConfig = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px solid #eeebf2',
      color: state.isSelected ? '#2929ff' : '#333333',
      background: state.isSelected ? 'rgba(73, 73, 199, .08)' : '',
      padding: '1rem 2rem',
      cursor: 'pointer',
      ...optionStyles,
    }),
    control: () => ({
      display: 'flex',
      background: '#fff',
      borderRadius: '5px',
      cursor: 'pointer',
      ...controlStyles,
    }),
    singleValue: provided => ({ ...provided }),
    ...stylesConfig,
  };

  const resetValue = (): void => setSelectValue(options[0]);

  return (
    <Select
      styles={customStyles}
      className={className}
      defaultValue={options[0]}
      value={selectValue}
      onChange={handleSelectionChange}
      options={options}
      menuPlacement='auto'
      {...otherDropdownProps}
    />
  );
};

export default Dropdown;
