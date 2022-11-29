type QuickInfoProps = {
  label: string;
  count: string | number;
  image: string;
};

const QuickInfo = ({ label, count, image }: QuickInfoProps): JSX.Element => {
  return (
    <>
      <div className='quick-info'>
        <div className='quick-info-number'>{count}</div>
        <div className='quick-info-title'>{label}</div>
      </div>
      <img className='quick-info-image' src={image} alt={label} />
    </>
  );
};

export default QuickInfo;
