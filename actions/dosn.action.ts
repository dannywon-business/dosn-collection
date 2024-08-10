'use server';

import { MGT_API_BASE_URI } from "@common/constants/api.constants";

import { revalidatePath } from 'next/cache';

export const getAllProducts = async (authorName: string) => {
  const path = '/dosn/get-products';

  const allProducts = await fetch(`${MGT_API_BASE_URI}${path}?authorName=${authorName}`, {
    method: "GET",
    headers: { apikey: "PfmoiKctj04qpw93XCTug6bln81HhYrN" },
    next: { revalidate: 0 }
  }).then((res) => res.json());

  const result = allProducts.data.products;
  if (allProducts.status == 'SUCCESS') return result;
};

export const getBestProducts = async (authorName: string, limit: number) => {
  const path = '/dosn/best-products';

  const bestProducts = await fetch(`${MGT_API_BASE_URI}${path}?authorName=${authorName}&limit=${limit}`, {
    method: "GET",
    headers: { apikey: "PfmoiKctj04qpw93XCTug6bln81HhYrN" },
    next: { revalidate: 0 }
  }).then((res) => res.json());

  const result = bestProducts.data.bestProd;
  if (bestProducts.status == 'SUCCESS') return result;
};


export const scoreProduct = async (prodIdx: number, score: number) => {
  const path = '/dosn/score-product';
  console.log('scoreProduct 함수 실행')

  const updateResult = await fetch(`${MGT_API_BASE_URI}${path}`, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({prodIdx, score}),
    headers: { 
      "Content-Type": "application/json", 
      apikey: "PfmoiKctj04qpw93XCTug6bln81HhYrN" 
    },
  }).then((res) => res.json());

  if(updateResult.status == 'SUCCESS') {
    revalidatePath('/');
    return updateResult.prodIdx;
  };
};

export const rescoreProduct = async (prodIdx: number, prevScore: number, newScore: number) => {
  const path = '/dosn/rescore-product';

  const updateResult = await fetch(`${MGT_API_BASE_URI}${path}`, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({prodIdx, prevScore, newScore}),
    headers: { 
      "Content-Type": "application/json", 
      apikey: "PfmoiKctj04qpw93XCTug6bln81HhYrN" 
    },
  }).then((res) => res.json());

  if(updateResult.status == 'SUCCESS') {
    revalidatePath('/');
    return updateResult.prodIdx;
  };
};