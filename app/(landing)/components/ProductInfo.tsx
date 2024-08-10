
'use client';

import clsx from "clsx";

import Image from "next/image";
import { useState, useEffect } from "react";

import BasicModal from "@/common/components/modal/BasicModal";
import VoteUI from "./VoteUI";
import BasicCheckIcon from "@/common/components/icon/BasicCheckIcon";


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
        <p className="text-white text-xl">{`Best ${ranking + 1}`}</p>
      )}

      <div
        className={clsx(
          "relative w-[350px] h-max p-5 bg-white rounded-md",
          !isRankPage && 'cursor-pointer',
        )}
        onClick={() => onClickHandler(product)}
      >
        {/* 이미 투표한 작품에 표시UI 달아주기 */}
        {!isRankPage && votedProd && votedProd.some((voted: any) => voted.prodIdx == product.prodIdx) && (
          <div className="absolute top-0 left-0 w-full h-full flex-center bg-black/80">
            <div className={clsx("w-10 h-14 border-b-[5px] border-r-[5px] rotate-45")} />
          </div>
        )}

        <Image
          src={product.imgUrl}
          width={308}
          height={308}
          alt=""
          style={{ width: 308, height: 308 }}
        />

        {isRankPage && (
          <div className="w-full text-black text-sm font-medium mt-2.5">
            <p className="">{`참여자: ${product.howManyScored}`}</p>
            <p className="">{`평균 점수: ${product.score / product.howManyScored}`}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductInfo;