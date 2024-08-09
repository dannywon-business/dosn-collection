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

  return (
    <div className="sticky z-0 top-0 w-full px-[150px] bg-[#252525]">
      <div className="h-[60px] mx-auto flex justify-center lg:justify-between items-center">


        <div className="flex items-center gap-24">
          {/* 1. 로고 이미지 */}
          <Link href={`/`}>
            <p className="text-white text-4xl font-bold">DOSN</p>
          </Link>

          {/* 2. 메뉴 */}
          {/* <div className="relative flex items-center gap-10">
            {HEADER_MENU.map((menu) => {
              return (
                <LinkButton
                  key={menu.id}
                  href={menu.href}
                  wrapperStyle="flex items-center h-10 px-5 rounded-md hover:bg-B500"
                  text={menu.name}
                  textStyle={clsx("text-lg font-medium", currentPage == menu.id ? 'text-white' : 'text-B100')}
                />
              )
            })}
          </div> */}
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
  // { id: 1, name: '전시', href: { pathname: '/ranking-system' } },
  // { id: 2, name: '', href: { pathname: '/' } },
];

export default Header;