
'use client';

import clsx from "clsx";

import Image from "next/image";
import { useState, useEffect } from "react";

import BasicModal from "@/common/components/modal/BasicModal";
import VoteUI from "./VoteUI";


interface Props {
  viewport: string;
  products: any;
  isRankPage: boolean;
}
const ProductInfo = (props: Props) => {
  const { viewport, products, isRankPage } = props;

  // # localStorage 확인해서 이미 투표한 작품 state에 저장
  const [votedProd, setVotedProd] = useState(null);

  useEffect(() => {
    const storageProd = JSON.parse(localStorage.getItem('prodInfo') || '[]');
    if (storageProd) setVotedProd(storageProd);
  }, [products]);

  // # 이미지 클릭 시 투표 모달창 open
  const [voteModal, setVoteModal] = useState(false);
  const [clickedProduct, setClickedProduct] = useState<null | string>(null);

  const handleClickImage = (product: any) => {
    setVoteModal(true);
    setClickedProduct(product);
  };

  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {/* 작품 정보 */}
      {products.map((prod: any, index: number) => (
        <ImageCard
          key={prod.prodIdx}
          product={prod}
          onClickHandler={handleClickImage}
          votedProd={votedProd}
          isRankPage={isRankPage}
          ranking={index}
        />
      ))}

      {/* 작품 클릭 시 모달창 open */}
      {!isRankPage && (
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
      )}

    </div>
  );
};

const ImageCard = (props: any) => {
  const { product, onClickHandler, votedProd, isRankPage, ranking } = props;

  return (
    <div>
      {isRankPage && (
        <p className="text-white text-xl">{`${ranking + 1}등`}</p>
      )}

      <div
        className={clsx("relative w-[350px] h-max p-5 border border-BD rounded-md", !isRankPage && 'cursor-pointer')}
        onClick={() => onClickHandler(product)}
      >
        {/* 이미 투표한 작품에 표시UI 달아주기 */}
        {!isRankPage && votedProd && votedProd.some((voted: any) => voted.prodIdx == product.prodIdx) && (
          <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-P300 rounded-md" />
        )}

        <Image
          src={product.imgUrl}
          width={308}
          height={308}
          alt=""
          style={{ width: 308, height: 308 }}
        />

        {/* <div className="w-full text-white text-xs font-medium mt-2.5">
              </div> */}
      </div>
    </div>
  );
};

export default ProductInfo;