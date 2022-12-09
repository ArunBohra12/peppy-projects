import './modal.styles.scss';

type ModalProps = {
  containerClass?: string;
  overlayClass?: string;
  contentClass?: string;
  children: React.ReactNode;
  closeHandler: () => void;
};

const Modal = ({ containerClass, overlayClass, contentClass, closeHandler, children }: ModalProps): JSX.Element => {
  return (
    <div className={`modal-container ${containerClass ?? ''}`}>
      <div className={`modal-overlay ${overlayClass ?? ''}`} onClick={closeHandler}></div>
      <div className={`modal-content ${contentClass ?? ''}`}>{children}</div>
    </div>
  );
};

export default Modal;
