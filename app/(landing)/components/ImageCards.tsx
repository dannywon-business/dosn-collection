'use client';

import clsx from "clsx";

import Image from "next/image";
import { useState, useEffect } from "react";

import BasicModal from "@/common/components/modal/BasicModal";
import VoteUI from "./VoteUI";


interface Props {
  viewport: string;
  products: any;
};

const ImageCards = (props: Props) => {
  const { viewport, products } = props;

  // # localStorage 확인해서 이미 투표한 작품 state에 저장
  const [votedProd, setVotedProd] = useState(null);
  
  useEffect(() => {
    const storageProd = JSON.parse(localStorage.getItem('prodInfo') || '[]');
    if(storageProd) setVotedProd(storageProd);
  }, [products])


  // # 이미지 클릭 시 투표 모달창 open
  const [voteModal, setVoteModal] = useState(false);
  const [clickedProduct, setClickedProduct] = useState<null | string>(null);
  
  const handleClickImage = (product: any) => {
    setVoteModal(true);
    setClickedProduct(product);
  };

  return (
    <div className="flex flex-wrap gap-5">
      {products.map((prod: any) => {
        return (
          <div
            key={prod.prodIdx}
            className={clsx("relative w-[350px] h-max p-5 border border-BD rounded-md cursor-pointer")}
            onClick={() => handleClickImage(prod)}
          >

            {/* 이미 투표한 작품에 표시UI 달아주기 */}
            {votedProd && votedProd.some((voted: any) => voted.prodIdx == prod.prodIdx) && (
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-P300 rounded-md" />
            )}

            <Image 
              src={prod.imgUrl} 
              width={308} 
              height={308} 
              alt="" 
              style={{ width: 308, height: 308 }}
            />
          
            {/* <div className="w-full text-white text-xs font-medium mt-2.5">
            </div> */}
          </div>
        )
      })}

      <BasicModal
        openModal={voteModal}
        setOpenModal={setVoteModal}
      >
        <VoteUI
          viewport={viewport}
          clickedProduct={clickedProduct}
          setVoteModal={setVoteModal}
          votedProd={votedProd}
        />
      </BasicModal>
    </div>
  );
};

export default ImageCards;