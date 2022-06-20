const InputText = props => {
  const { labelText, labelClass = '', inputClass = '', inputAttrs } = props;
  return (
    <div className='input-text'>
      <label className={`text-label ${labelClass}`}>{labelText}</label>
      <input className={`text-input ${inputClass}`} {...inputAttrs} />
    </div>
  );
};

export default InputText;
