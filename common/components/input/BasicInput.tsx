'use client';

// libraries
import clsx from "clsx";

interface BasicInputProps {
  type: string;
  name?: string;
  value?: string | number;
  autoFocus: boolean;
  placeholder: string;
  wrapperStyle: string;
  inputStyle: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: () => void;
};

const BasicInput = (props: BasicInputProps) => {
  const { type, name, value, autoFocus, placeholder, wrapperStyle, inputStyle, onChange, onKeyDown } = props;

  return (
    <div className={clsx(wrapperStyle)}>
      <input 
        autoFocus={autoFocus}
        name={name}
        type={type} 
        value={value}
        onChange={(event) => onChange(event)}
        onKeyDown={(e) => e.key === "Enter" && onKeyDown()}
        placeholder={placeholder}
        className={inputStyle}
      />
    </div>
  )
}

export default BasicInput;