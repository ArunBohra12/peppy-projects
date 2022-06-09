import './formGroup.styles.scss';

import Input from '../input/input.component';

const FormGroup = props => {
  const { label, handleChange, ...otherProps } = props;

  return (
    <div className='form-group'>
      {label ? <label className='form-group-label'>{label}</label> : ''}

      <Input className='form-group-input' {...otherProps} />
    </div>
  );
};

export default FormGroup;
