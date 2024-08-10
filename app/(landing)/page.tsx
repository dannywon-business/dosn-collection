// libraries
import clsx from "clsx";
import { promises as fs } from 'fs';
import path from "path";

import { getAllProducts } from "@/actions/dosn.action";

import ImageCards from "./components/ImageCards";
import ProductInfo from "./components/ProductInfo";

export default async function LandingPage(props: any) {
  const { viewport } = props.searchParams;

  const products = await getAllProducts('김한기');
  
  return (
    <div className={clsx(
      "mx-auto",
      viewport == 'mobile' ? 'w-[360px]' : 'w-[1090px]'
    )}>
      <ProductInfo 
        viewport={viewport} 
        products={products}
        isRankPage={false}
      />
      
      {/* <ImageCards 
        viewport={viewport} 
        products={products}
      /> */}
    </div>
  );
};