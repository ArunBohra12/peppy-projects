import './modal.styles.scss';

const Modal = props => {
  const { state, closeModal, children } = props;

  return (
    <>
      <div className={`modal-overlay ${state ? 'modal-overlay-show' : ''}`}></div>
      <div className={`modal ${state ? 'modal-show' : ''}`}>
        <div className='modal-close-btn' onClick={closeModal}>
          &times;
        </div>
        {children}
      </div>
    </>
  );
};

export default Modal;
