import './card.styles.scss';

type CardProps = {
  children: React.ReactNode;
  cardClass?: string;
};

const Card = ({ children, cardClass = '' }: CardProps): JSX.Element => {
  return <div className={`card ${cardClass}`}>{children}</div>;
};

export default Card;
