import './input.styles.scss';

type InputProps = {
  className?: string;
  otherInputAttributes?: React.InputHTMLAttributes<object>;
};

const Input = (props: InputProps) => {
  const { className, otherInputAttributes } = props;

  return <input className={`input ${className || ''}`} {...otherInputAttributes} />;
};

export default Input;
