import clsx from "clsx";

import Image from "next/image";

import { useState, useEffect, useRef } from "react";

interface Props {
  viewport: string;
  imgIndex: string
};
const VoteUI = (props: Props) => {
  const { viewport, imgIndex } = props;

  const [cardSize, setCardSize] = useState('w-[350px]');
  const [imgSize, setImgSize] = useState(308);
  useEffect(() => {
    viewport == 'desktop' && (
      setCardSize('w-[650px]'), 
      setImgSize(608)
    );
  }, [viewport]);


  const handleVote = () => {

  }

  return (
    <div className="flex flex-col gap-1.5">
      <div className={clsx("p-5 border border-BD rounded-md cursor-pointer", cardSize)}>
        <Image
          src={`/assets/landing/김한기_${imgIndex}.jpg`}
          width={imgSize}
          height={imgSize}
          alt=""
        />
        <p className="text-white text-xs font-medium mt-2.5">
          설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1
        </p>
      </div>

      <div className="flex justify-between">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
          return (
            <button 
              key={num} 
              className={clsx(
                "bg-white hover:bg-[#212121] text-[#212121] hover:text-white",
                viewport == 'mobile' ? 'w-5 h-5 text-base' : 'w-10 h-10 text-xl'
              )}
            >
              {num}
            </button>
          )
        })}
      </div>

    </div>
  );
};


export default VoteUI;