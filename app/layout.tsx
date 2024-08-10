import '../styles/global.scss';

// next
import { Metadata, Viewport } from "next";
import localFont from 'next/font/local';

// libraries
import clsx from "clsx";

// components
import Header from './(layout)/Header';

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string }
};

export default async function RootLayout(props: RootLayoutProps) {
  const { children } = props;

  return (
    <html
      lang="en"
      className={SpoqaHanSansNeo.className}
    >
      <body className="bg-[#212121]">
        <Header />
        <div className="my-10">
          {children}
        </div>
      </body>
    </html>
  );
};

export const metadata: Metadata = {
  title: {
    template: 'DOSN | %s',
    default: 'DOSN'
  },
  description: '프로 출신 아카데미 코치들이 연구한 개인 맞춤 게임 코칭 데이터로 내 게임의 약점을 진단하고 맞춤 팁을 추천합니다.',
};

export const viewport: Viewport = {
  width: 'device-width',
  userScalable: false,
};

// local 폰트 적용
const SpoqaHanSansNeo = localFont({
  src: '../public/fonts/SpoqaHanSansNeo-Medium.otf'
})