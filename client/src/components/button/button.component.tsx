import './button.styles.scss';

type ButtonProps = {
  children: React.ReactNode;
  variant?: string;
  className?: string;
  otherButtonAttributes?: React.HTMLAttributes<object>;
};

type ButtonTypes = { [key: string]: string };

// Needed to add more button types in the future
const BUTTON_TYPES: ButtonTypes = {
  blue: 'blue',
  default: 'blue',
};

const Button = ({ children, className, variant = 'default' }: ButtonProps): JSX.Element => {
  const buttonType = BUTTON_TYPES[variant];

  return <button className={`btn ${buttonType} ${className}`}>{children}</button>;
};

export default Button;
