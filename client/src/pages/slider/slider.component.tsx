import { BsX as CrossIcon } from 'react-icons/bs';

import Button from '../../components/button/button.component';

import './slider.styles.scss';

type SliderProps = {
  sliderState: boolean;
  toggleSliderState?: () => void;
  overlayBackground?: string;
  overlayStyles?: React.CSSProperties;
  sliderStyles?: React.CSSProperties;
  children: React.ReactNode;
};

const Slider = (props: SliderProps) => {
  const { children, sliderState, toggleSliderState, overlayBackground, overlayStyles, sliderStyles } = props;

  const sliderOverlayBackground = overlayBackground || 'rgba(0, 0, 0, .7)';

  const isSliderOpen = sliderState ? 'open' : '';

  return (
    <>
      <div
        className={`slider-overlay ${isSliderOpen}`}
        onClick={toggleSliderState}
        style={{ background: sliderOverlayBackground, ...overlayStyles }}></div>
      <div className={`slider ${isSliderOpen}`} style={sliderStyles}>
        <Button className='slider-close-btn' otherButtonAttributes={{ onClick: toggleSliderState }}>
          <CrossIcon />
        </Button>
        {children}
      </div>
    </>
  );
};

export default Slider;
