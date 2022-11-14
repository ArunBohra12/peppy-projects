import Input from '../input/input.component';

import './formGroup.styles.scss';

type FormGroupProps = {
  label: string;
  id: string;
  otherLabelAttributes?: React.HTMLAttributes<object>;
  otherInputAttributes?: React.InputHTMLAttributes<object>;
};

const FormGroup = ({ label, id, otherInputAttributes, otherLabelAttributes }: FormGroupProps): JSX.Element => {
  return (
    <div className='form-group'>
      <label htmlFor={id} {...otherLabelAttributes}>
        {label}
      </label>
      <Input otherInputAttributes={{ ...otherInputAttributes, id }} />
    </div>
  );
};

export default FormGroup;
