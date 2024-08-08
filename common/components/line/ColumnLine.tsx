
// libraries
import clsx from "clsx";

// hooks
import { useEffect, useRef } from "react";



interface ColumnLineProps {
  lineStyle: string;
}
const ColumnLine = (props: ColumnLineProps) => {
  const { lineStyle } = props;

  // STEP1. 라인 width 잡아주기
  const lineRef: any = useRef(null);


  useEffect(() => {
    if (lineRef.current) {
      // 1. 부모 element 가져오기
      const parentElement = lineRef.current.parentElement;
      const parentWidth = getComputedStyle(parentElement).height;
      const parentPadding = getComputedStyle(parentElement).padding;
      const heightValue = Number(parentWidth.match(/\d+/)[0]);
      const paddingValue = Number(parentPadding.match(/\d+/)[0]);

      // const lineWidth = `h-[${heightValue - 2}px]`;
      // const lineLeft = `-top-[${paddingValue}px]`;

      lineRef.current.style.height = `${heightValue - 2}px`;
      lineRef.current.style.left = `${paddingValue}px`;
    };
  }, []);

  return (
    <div ref={lineRef} className={clsx("relative", lineStyle)} />
  );
};


export default ColumnLine;