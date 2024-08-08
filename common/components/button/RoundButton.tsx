
// libraries
import clsx from "clsx";
import { ReactElement } from "react";

interface RoundButtonProps {
  iconUrl: string;
  // onClick: (event: );
};

const RoundButton = (props: RoundButtonProps) => {
  const { iconUrl } = props;
  const defaultStyle = 'rounded-full px-5 py-1.5';

  return (
    <button 
      className={clsx('', defaultStyle)}
    >

    </button>
  );
};

