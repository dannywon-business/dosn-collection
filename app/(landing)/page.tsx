import clsx from "clsx";

import ImageCards from "./components/ImageCards";




export default async function LandingPage(props: any) {
  const { viewport } = props.searchParams;

  return (
    <div className={clsx(
      "mx-auto",
      viewport == 'mobile' ? 'w-[360px]' : 'w-[1180px]'
    )}>
      <ImageCards viewport={viewport} />
    </div>
  );
};