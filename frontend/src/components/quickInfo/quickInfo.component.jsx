import Card from '../card/card.component';

const QuickInfo = props => {
  const { quickInfoCards } = props;
  return (
    <div className='quick-info'>
      {quickInfoCards.map(cardInfo => (
        <Card key={cardInfo.id} className='quick-info-card'>
          <div className='card-text'>
            <div className='number'>{cardInfo.number}</div>
            <div className='info-type'>{cardInfo.type}</div>
          </div>

          <div className='card-image'>
            <img src={cardInfo.image} alt={cardInfo.type} />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default QuickInfo;
