import clsx from "clsx";





interface Props {
  size: string;
  color?: string
};
const BasicCheckIcon = (props: Props) => {
  const { size, color } = props
  return (
    <div className={clsx("border-b-2 border-r-2 rotate-45", size, color)} />
  );
};

export default BasicCheckIcon;