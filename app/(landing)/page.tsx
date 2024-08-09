// libraries
import clsx from "clsx";
import { promises as fs } from 'fs';

import ImageCards from "./components/ImageCards";

const PRODUCTS = [
  { id: 1 , title: '', desc: '', score: null, imgUrl: '/assets/landing/김한기_01.jpg' },
  { id: 2 , title: '', desc: '', score: null, imgUrl: '/assets/landing/김한기_02.jpg' },
  { id: 3 , title: '', desc: '', score: null, imgUrl: '/assets/landing/김한기_03.jpg' },
  { id: 4 , title: '', desc: '', score: null, imgUrl: '/assets/landing/김한기_04.jpg' },
  { id: 5 , title: '', desc: '', score: null, imgUrl: '/assets/landing/김한기_05.jpg' },
  { id: 6 , title: '', desc: '', score: null, imgUrl: '/assets/landing/김한기_06.jpg' },
  { id: 7 , title: '', desc: '', score: null, imgUrl: '/assets/landing/김한기_07.jpg' },
  { id: 8 , title: '', desc: '', score: null, imgUrl: '/assets/landing/김한기_08.jpg' },
  { id: 9 , title: '', desc: '', score: null, imgUrl: '/assets/landing/김한기_09.jpg' },
  { id: 10, title: '', desc: '', score: null, imgUrl: '/assets/landing/김한기_10.jpg' },
  { id: 11, title: '', desc: '', score: null, imgUrl: '/assets/landing/김한기_11.jpg' },
  { id: 12, title: '', desc: '', score: null, imgUrl: '/assets/landing/김한기_12.jpg' },
  { id: 13, title: '', desc: '', score: null, imgUrl: '/assets/landing/김한기_13.jpg' },
  { id: 14, title: '', desc: '', score: null, imgUrl: '/assets/landing/김한기_14.jpg' },
];

const getProducts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(PRODUCTS);
    }, 0);
  });
};



export default async function LandingPage(props: any) {
  const { viewport } = props.searchParams;

  const file = await fs.readFile(process.cwd() + '/products.json', 'utf-8');
  const products = JSON.parse(file)
  console.log('file', JSON.parse(file));

  // const products = await getProducts();

  return (
    <div className={clsx(
      "mx-auto",
      viewport == 'mobile' ? 'w-[360px]' : 'w-[1090px]'
    )}>
      <ImageCards 
        viewport={viewport} 
        products={products}
      />
    </div>
  );
};