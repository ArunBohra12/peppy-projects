import greetingImage from '../../../../assets/img/others/dashboard-welcome-image.svg';

import './greetingsContainer.styles.scss';

const GreetingContainer = (): JSX.Element => {
  return (
    <div className='greeting-container'>
      <div>
        <h1 className='greeting-user-name'>Hi, Arun Bohra</h1>
        <div className='greeting-text'>Check out any upcoming tasks and recent projects below!</div>
      </div>

      <img className='greeting-image' src={greetingImage} alt='Hi, Arun' />
    </div>
  );
};

export default GreetingContainer;
