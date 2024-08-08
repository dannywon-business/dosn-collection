'use client';

import React from 'react';

// libraries
import clsx from 'clsx';
import Modal from 'react-modal';

import CancelIcon from '@public/assets/common/cancel.svg';

interface SlideToLeftModalProps {
  openModal: boolean;
  setOpenModal: any;
  modalStyle: string;
  children: React.ReactNode;
};
const SlideToLeftModal = (props: SlideToLeftModalProps) => {
  const { openModal, setOpenModal, modalStyle, children } = props;

  const additionalProps = { setOpenModal: setOpenModal };

  const _children = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, additionalProps);
    };

    return child;
  });


  return (
    <Modal
      isOpen={openModal}
      ariaHideApp={false}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => setOpenModal(false)}
      closeTimeoutMS={180}
      style={{ overlay: { zIndex: 1001, backgroundColor: "rgba(0, 0, 0, 0.3)" } }}
      className={{
        base: clsx('absolute top-0 right-0 border border-BD rounded-l-lg', modalStyle),
        afterOpen: 'animate-slideIn-to-left',
        beforeClose: 'animate-slideIn-to-right',
      }}
    >
      <div className="space-y-5">
        <CancelIcon
          className="w-8 h-8 cursor-pointer"
          onClick={() => setOpenModal(false)}
        />
        {_children}
      </div>
    </Modal>
  )
}

export default SlideToLeftModal;