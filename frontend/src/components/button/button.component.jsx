const Button = props => {
  const { value, className, ...otherBtnAttributes } = props;
  return (
    <button className={`btn ${className ?? ''}`} {...otherBtnAttributes}>
      {value}
    </button>
  );
};

export default Button;
