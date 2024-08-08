import clsx from 'clsx';

import Modal from 'react-modal';

type AlertModalProps = {
  alertModalText: string | null;
  setAlertModalText: any;
};

const BasicAlertModal = (props: AlertModalProps) => {
  const { alertModalText, setAlertModalText } = props;
  return (
    <Modal
      isOpen={true}
      ariaHideApp={false}
      onRequestClose={() => setAlertModalText(null)}
      shouldCloseOnOverlayClick={true}
      style={{
        overlay: { zIndex: 1001, backgroundColor: "rgba(0, 0, 0, 0.75)" },
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
        },
      }}
    >
      <div className="flex flex-col gap-y-5 items-center w-max p-5 bg-B300 rounded-lg">
        <div className="flex flex-col gap-y-1.5 items-center">
          <p className="text-white text-xl text-center font-medium whitespace-pre-line">{`😅 ${alertModalText}`}</p>
        </div>
        <button
          className="w-1/2 h-10 px-4 bg-B200 rounded-lg"
          onClick={() => setAlertModalText(null)}
        >
          <p className="text-white">{`확인`}</p>
        </button>
      </div>
    </Modal>
  );
};

export default BasicAlertModal;