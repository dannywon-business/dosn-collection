'use client';


// libraries
import clsx from "clsx";


// hooks
import { useState, useEffect, useRef } from "react";



interface BasicInputProps {
  // 1. 화면에 표기할 데이터
  options: { label: string, value: string | number }[];
  valueName?: string;
  labelName?: string;

  // 2. css
  wrapperStyle: string;
  selectBoxStyle: string;
  optionBoxStyle: string;
  useScroll?: {use: boolean, height: number}

  // 3. 이벤트
  handler?: (option: { label: string, value: string | number }) => void;
};
const BasicSelect = (props: BasicInputProps) => {
  const {
    options, valueName = 'value', labelName = 'label',
    wrapperStyle, selectBoxStyle, optionBoxStyle, useScroll, handler
  } = props;

  const [isClicked, setIsClicked] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);

  const handleClickWrapper = () => {
    setIsClicked(!isClicked);
  };

  const handleClickOption = (event: any, option: { label: string, value: string }, index: number) => {
    setSelectedOption(index);
    handler(option);
  };

  // 2-1. 컴포넌트 외부 클릭 감지해서 optionBox 닫기
  const wrapperRef: any = useRef(null);
  const handleClickOutside = (event: any) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      // 컴포넌트 외부를 클릭한 경우
      setIsClicked(false);
    };
  };

  useEffect(() => {
    // 1. 컴포넌트가 마운트 되면 이벤트 리스너 추가
    document.addEventListener('click', handleClickOutside);

    // 2. 컴포넌트가 언 마운트 될 때 이벤트 리스너 제거
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // 2-2. selectBox가 클릭 됐을 때 optionBox의 위치 잡아주기
  const optionBoxRef: any = useRef(null);

  useEffect(() => {
    if (isClicked && optionBoxRef.current) {
      // STEP1. wrapper의 widht, height 알아내기
      const wrapperHeight = wrapperRef.current.offsetHeight;
      const wrapperWidth = wrapperRef.current.offsetWidth;

      // STEP2. optionBox에 className 추가
      optionBoxRef.current.style.top = `${wrapperHeight + (wrapperHeight / 10)}px`;

      // STEP3. optionbox에 width를 잡아준게 없으면 기본으로 세팅
      if(!optionBoxStyle.includes('w-')) {
        optionBoxRef.current.style.width = `${wrapperWidth}px`;
      };

      // STEP4. useScroll 여부 확인 해서 scroll 넣어주기
      if(useScroll.use) {
        optionBoxRef.current.style.overflow = 'auto';
        optionBoxRef.current.style.height = `${useScroll.height}px`;
        optionBoxRef.current.classList.add(`MGT-scrollbar`);
      }
    };
  }, [isClicked]);

  return (
    <div
      ref={wrapperRef}
      onClick={handleClickWrapper}
      className={clsx("relative flex items-center", wrapperStyle)}
    >
      <div className={clsx("w-full flex items-center justify-between", selectBoxStyle)}>
        <p className="text-white text-sm">{options[selectedOption].label}</p>
        <div className="w-1.5 h-1.5 mb-1 border-b-2 border-r-2 rotate-45" />
      </div>

      {isClicked && (
        <div
          ref={optionBoxRef}
          className={clsx("absolute", optionBoxStyle)}
        >
          {options.map((op: any, index: number) => {
            return (
              <button
                key={op[valueName]}
                className="w-full text-start rounded-md hover:bg-BD"
                onClick={(event) => handleClickOption(event, op, index)}
              >
                <p className="text-white text-sm">{op[labelName]}</p>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
};

export default BasicSelect;