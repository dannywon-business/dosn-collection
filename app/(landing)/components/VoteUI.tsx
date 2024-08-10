// libararies
import clsx from "clsx";

// next
import Image from "next/image";
import { revalidatePath } from 'next/cache'

// actions
import { rescoreProduct, scoreProduct } from "@/actions/dosn.action";

// hooks
import { useState, useEffect, useRef } from "react";


interface Props {
  viewport: string;
  clickedProduct: any;
  setVoteModal: any;
  votedProd: any;
};
const VoteUI = (props: Props) => {
  const { viewport, clickedProduct, setVoteModal, votedProd } = props;

  const [cardSize, setCardSize] = useState('w-[350px]');
  const [imgSize, setImgSize] = useState(308);

  useEffect(() => {
    viewport == 'desktop' && (
      setCardSize('w-[550px]'),
      setImgSize(608)
    );
  }, [viewport]);


  const handleVote = (score: number) => {
    // STEP1. 사용자가 투표한 작품은 localStorage에 저장 (중복 투표 방지)
    localStorage.setItem('prodInfo', JSON.stringify([
      ...votedProd.filter((prev: any) => prev.prodIdx != clickedProduct.prodIdx), 
      { prodIdx: clickedProduct.prodIdx, score }
    ]));

    const prevScore = votedProd?.find((prev: any) => prev.prodIdx == clickedProduct.prodIdx)?.score;

    if(prevScore) {
      rescoreProduct(clickedProduct.prodIdx, prevScore, score)
    } else {
      scoreProduct(clickedProduct.prodIdx, score);
    };
    
    setVoteModal(false);
  };

  const votedScore = votedProd?.find((voted: any) => voted.prodIdx == clickedProduct.prodIdx)?.score;

  return (
    <div className="bg-[#212121] p-5 rounded-md">
      <div className={clsx("p-5 border border-BD rounded-md bg-white", cardSize)}>
        <Image
          src={clickedProduct.imgUrl}
          width={imgSize}
          height={imgSize}
          alt=""
        />

        {/* <p className="text-white text-xs font-medium mt-2.5">
        </p> */}
      </div>

      <div className="flex items-center justify-between mt-5">
        <p className={clsx("text-white", viewport == 'mobile' ? 'text-sm' : 'text-base')}>{`나의 점수`}</p>

        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((score) => {
          return (
            <button
              key={score}
              onClick={() => handleVote(score)}
              className={clsx(
                'rounded-md hover:bg-B200 hover:text-white',
                viewport == 'mobile' ? 'w-5 h-5 text-sm' : 'w-10 h-10 text-xl',
                votedScore == score ? 'bg-B200 text-white' : 'bg-white text-[#212121]',
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