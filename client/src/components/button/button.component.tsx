import './button.styles.scss';

type ButtonProps = {
  children: React.ReactNode;
  variant?: string;
  class?: string;
  otherButtonAttributes?: React.HTMLAttributes<object>;
};

type ButtonTypes = { [key: string]: string };

// Needed to add more button types in the future
const BUTTON_TYPES: ButtonTypes = {
  blue: 'blue',
  default: 'blue',
};

const Button = ({ children, variant = 'default' }: ButtonProps): JSX.Element => {
  const buttonType = BUTTON_TYPES[variant];

  return <button className={`btn ${buttonType}`}>{children}</button>;
};

export default Button;
