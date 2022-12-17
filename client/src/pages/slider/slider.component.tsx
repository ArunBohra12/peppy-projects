import { BsX as CrossIcon } from 'react-icons/bs';

import Button from '../../components/button/button.component';

import './slider.styles.scss';

type SliderProps = {
  sliderState: boolean;
  toggleSliderState?: () => void;
  overlayBackground?: string;
  overlayClass?: string;
  sliderClass?: string;
  children: React.ReactNode;
};

const Slider = (props: SliderProps) => {
  const { children, sliderState, toggleSliderState, overlayBackground, overlayClass, sliderClass } = props;

  const sliderOverlayBackground = overlayBackground || 'rgba(0, 0, 0, .7)';

  const isSliderOpen = sliderState ? 'open' : '';

  return (
    <>
      <div
        className={`slider-overlay ${isSliderOpen} ${overlayClass ?? ''}`}
        onClick={toggleSliderState}
        style={{ background: sliderOverlayBackground }}></div>
      <div className={`slider ${isSliderOpen} ${sliderClass ?? ''}`}>
        <Button className='slider-close-btn' otherButtonAttributes={{ onClick: toggleSliderState }}>
          <CrossIcon />
        </Button>
        {children}
      </div>
    </>
  );
};

export default Slider;
