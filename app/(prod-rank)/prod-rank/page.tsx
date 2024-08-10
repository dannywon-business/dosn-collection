// libraries
import clsx from "clsx";

import { getBestProducts } from "@/actions/dosn.action";

import ProductInfo from "@/app/(landing)/components/ProductInfo";

export default async function LandingPage(props: any) {
  const { viewport } = props.searchParams;

  const bestProd = await getBestProducts('김한기', 5);
  
  return (
    <div className={clsx(
      "mx-auto",
      viewport == 'mobile' ? 'w-[360px]' : 'w-[1090px]'
    )}>

      {bestProd.length > 0 ? (
        <ProductInfo 
          viewport={viewport} 
          products={bestProd}
          isRankPage={true}
        />
      ) : (
        <div className="flex-center pt-60">
          <p className="text-B100 text-xl">{`집계된 랭킹이 없습니다.`}</p>
        </div>
      )}
    </div>
  );
};