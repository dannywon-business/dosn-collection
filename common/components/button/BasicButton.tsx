'use client';

import clsx from "clsx";

import { useEffect, useState } from "react";

interface Props {
  text: string;
  buttonStyle?: string;
  handler?: () => void;
};
const BasicButton = (props: Props) => {
  const { text, buttonStyle, handler } = props;

  const [defaultStyle, setDefaultStyle] = useState('');

  useEffect(() => {
    setDefaultStyle((prev: string) => {
      return buttonStyle == '' || !buttonStyle
        ? 'h-10 px-5 bg-P300 rounded-md'
        : '';
    });
  }, [buttonStyle]);

  return (
    <button
      className={clsx(buttonStyle, defaultStyle)}
      onClick={() => handler ? handler() : null}
    >
      <p className="text-white text-sm">
        {text}
      </p>
    </button>
  );
};

export default BasicButton;