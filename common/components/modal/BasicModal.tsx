

import clsx from "clsx";
import React from "react";


import Modal from "react-modal";



interface BasicModalProps {
  openModal: boolean;
  setOpenModal: any;
  modalStyle?: string;
  children: React.ReactNode;
  childProps?: any; 
};
const BasicModal = (props: BasicModalProps) => {
  const { openModal, setOpenModal, modalStyle, children, childProps } = props;

  
  // const _children = React.Children.map(children, (child) => {
  //   if (React.isValidElement(child)) {
  //     return React.cloneElement(child, childProps);
  //   };

  //   return child;
  // });


  return (
    <Modal
      isOpen={openModal}
      ariaHideApp={false}
      onRequestClose={() => setOpenModal(false)}
      shouldCloseOnOverlayClick={true}
      style={{
        overlay: { zIndex: 1001, backgroundColor: "rgba(0, 0, 0, 0.9)" },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          padding: "0",
          border: "0",
          background: "transparent",
          overflow: "visible",
          borderRadius: "30px",
        },
      }}
    >
      {children}
    </Modal>
  );
};

export default BasicModal;