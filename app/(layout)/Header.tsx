'use client';

// libraries
import clsx from "clsx";

// next
import Link from "next/link";
import Image from "next/image";
import LinkButton from "@/common/components/button/LinkButton";
import { usePathname } from "next/navigation";

// constants
import { useEffect, useState } from "react";


const Header = (props: any) => {
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState<null | number>(null);

  useEffect(() => {
    setCurrentPage(HEADER_MENU.find((menu) => menu.href.pathname == pathname)?.id);
  }, [pathname]);

  return (
    <div className="sticky top-0 z-20 w-full lg:px-[150px] bg-[#252525]">
      <div className="h-[60px] mx-auto flex justify-center items-center lg:justify-between">

        <div className="flex items-center gap-10 lg:gap-24">
          {/* 1. 로고 이미지 */}
          <Link href={`/`}>
            <p className="text-white text-4xl font-bold">DOSN</p>
          </Link>

          {/* 2. 메뉴 */}
          <div className="relative flex items-center gap-2.5 lg:gap-10">
            {HEADER_MENU.map((menu) => {
              return (
                <LinkButton
                  key={menu.id}
                  href={menu.href}
                  wrapperStyle="flex items-center h-10 px-5 rounded-md"
                  text={menu.name}
                  textStyle={clsx("text-lg font-medium", currentPage == menu.id ? 'text-white' : 'text-B100')}
                />
              )
            })}
          </div>
        </div>

        {/* 3. 로그인 / 회원가입 버튼 */}
        {/* <div className="flex gap-3">
          <LinkButton
            href="/"
            text="SIGN IN"
            wrapperStyle="flex items-center h-10 px-5 rounded-[20px] bg-login-btn"
            textStyle="text-white text-sm font-bold"
          />

          <LinkButton
            href="/"
            text="SIGN UP"
            wrapperStyle="flex items-center h-10 px-5 rounded-[20px] bg-login-btn"
            textStyle="text-gradient-2 text-sm font-bold"
          />
        </div> */}
      </div>
    </div>
  );
};

interface HeaderMenu {
  id: number;
  name: string;
  // icon: any;
  href: {
    pathname: string,
    query?: { [key: string]: string },
  };
};
const HEADER_MENU: HeaderMenu[] = [
  { id: 1, name: '투표', href: { pathname: '/' } },
  { id: 2, name: 'Best 5', href: { pathname: '/prod-rank' } },
];

export default Header;