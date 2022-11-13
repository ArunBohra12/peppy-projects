import './formGroup.styles.scss';

type FormGroupProps = {
  label: string;
  id: string;
  otherLabelAttributes?: React.HTMLAttributes<object>;
  otherInputAttributes?: React.HTMLAttributes<object>;
};

const FormGroup = ({ label, id, otherInputAttributes, otherLabelAttributes }: FormGroupProps): JSX.Element => {
  return (
    <div className='form-group'>
      <label htmlFor={id} {...otherLabelAttributes}>
        {label}
      </label>
      <input id={id} {...otherInputAttributes} />
    </div>
  );
};

export default FormGroup;
