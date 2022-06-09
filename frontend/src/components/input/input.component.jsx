import './input.styles.scss';

const Input = props => {
  const { className, ...otherProps } = props;
  return <input className={`input ${props.className ?? ''}`} {...otherProps} />;
};

export default Input;
