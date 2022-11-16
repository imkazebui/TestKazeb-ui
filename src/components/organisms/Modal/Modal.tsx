import React from 'react';
import ReactModal from 'react-modal';

interface Props {
  isOpen?: boolean;
  handleClose: () => void;
  children:any;
}

const Modal: React.FC<Props> = (props) => {
  const { isOpen = false, handleClose, children } = props;
  return (
    <ReactModal
      ariaHideApp={false}
      bodyOpenClassName="u-modal-open"
      overlayClassName="o-modal_overlay"
      isOpen={isOpen}
      shouldCloseOnOverlayClick
      onRequestClose={handleClose}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.75)',
          zIndex: '999',
        },
        content: {
          position: 'absolute',
          top: '40px',
          left: '40px',
          right: '40px',
          bottom: '40px',
          border: 'none!important',
          background: '#fff',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '0px!important',
          outline: 'none',
          inset: '0px',
          padding: '0px',
        },
      }}
    >
      <div>{children}</div>
    </ReactModal>
  );
};

export default Modal;
