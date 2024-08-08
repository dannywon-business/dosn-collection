



interface CheckBoxButtonProps {
  handler: () => void;
}


const CheckBoxkButton = (props: CheckBoxButtonProps) => {
  const { handler } = props;
  return (
    <button
      onClick={handler}
    >

    </button>
  );
};


export default CheckBoxkButton;