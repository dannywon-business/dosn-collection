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

  // STEP1. viewport 확인해서 size 세팅
  const [cardSize, setCardSize] = useState('');
  const [imgSize, setImgSize] = useState(0);

  const arr = new Array(14).fill(0).map((_, index) => {
    return (index + 1).toString().padStart(2, '0');
  });

  // 이미지 클릭 시 투표 모달창 open
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
            key={prod.id}
            className={clsx("w-[350px] h-max p-5 border border-BD rounded-md cursor-pointer")}
            onClick={() => handleClickImage(prod)}
          >
            <Image src={prod.imgUrl} width={308} height={308} alt="" />

            <div className="w-full text-white text-xs font-medium mt-2.5">
              <p className="">설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1설명 1</p>
            </div>
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
        />
      </BasicModal>
    </div>
  );
};

export default ImageCards;