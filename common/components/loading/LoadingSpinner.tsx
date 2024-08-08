'use client';


import clsx from "clsx";
import { PieChart } from "react-minimal-pie-chart";

interface LoadingSpinnerProps {
  width: string;
};
const LoadingSpinner = (props: LoadingSpinnerProps) => {
  const { width } = props;
  return (
    <PieChart
      className={clsx("animate-spin", width)}
      data={[{
        value: 100,
        color: '#5d7df0',
        name: 'me'
      }]}
      reveal={50} //퍼센트 치수
      lineWidth={28} //도넛 두게
      background={'#211F4E'}
      lengthAngle={360}
      startAngle={-82}
      rounded={true}
      animate={true}
      labelStyle={{}}
      labelPosition={0}
    />
  );
};


export default LoadingSpinner;