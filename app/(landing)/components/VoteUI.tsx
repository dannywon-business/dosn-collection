import clsx from "clsx";

import Image from "next/image";

import { useState, useEffect, useRef } from "react";

interface Props {
  viewport: string;
  clickedProduct: any;
};
const VoteUI = (props: Props) => {
  const { viewport, clickedProduct } = props;

  const [cardSize, setCardSize] = useState('w-[350px]');
  const [imgSize, setImgSize] = useState(308);
  
  useEffect(() => {
    viewport == 'desktop' && (
      setCardSize('w-[650px]'), 
      setImgSize(608)
    );
  }, [viewport]);


  const handleVote = (score: number) => {
    
  };
  

  return (
    <div className="bg-[#212121] p-5 rounded-md">
      <div className={clsx("p-5 border border-BD rounded-md", cardSize)}>
        <Image
          src={clickedProduct.imgUrl}
          width={imgSize}
          height={imgSize}
          alt=""
        />
        <p className="text-white text-xs font-medium mt-2.5">
          설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1
        </p>
      </div>

      <div className="flex items-center justify-between mt-5">
        <p className={clsx("text-white", viewport == 'mobile' ? 'text-sm' : 'text-base')}>{`작품 점수`}</p>

        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((score) => {
          return (
            <button 
              key={score} 
              onClick={() => handleVote(score)}
              className={clsx(
                "bg-white hover:bg-B200 text-[#212121] hover:text-white rounded-md",
                viewport == 'mobile' ? 'w-5 h-5 text-sm' : 'w-10 h-10 text-xl'
              )}
            >
              {score}
            </button>
          )
        })}
      </div>

    </div>
  );
};


export default VoteUI;