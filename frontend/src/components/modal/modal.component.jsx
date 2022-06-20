const Modal = props => {
  const { state, closeModal, children } = props;

  return (
    <>
      <div className={`modal-overlay ${state ? 'modal-overlay-show' : ''}`}>
        <div className='modal-close-btn' onClick={closeModal}>
          &times;
        </div>
      </div>
      <div className={`modal ${state ? 'modal-show' : ''}`}>{children}</div>
    </>
  );
};

export default Modal;
