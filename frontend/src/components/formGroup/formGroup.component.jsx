import Input from '../input/input.component';

const FormGroup = props => {
  const { id, label, inputType, ...otherInputAttributes } = props;
  return (
    <div className='form-group'>
      <label htmlFor={id}>{label}</label>
      <Input type={inputType} id={id} {...otherInputAttributes} />
    </div>
  );
};

export default FormGroup;
