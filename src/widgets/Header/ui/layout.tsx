'use client'
import React, { useEffect } from 'react';
import Link from 'next/link';
import { BiMenuAltRight } from "react-icons/bi";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/ui/sheet'
import { useScrollbar } from '@/shared/hooks/useScroolbar';
import { NavMobile } from './nav-mobile';

interface LayoutProps {
  logo: React.ReactNode;
  nav: React.ReactElement;
  auth: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ logo, nav, auth }) => {
  const scrollbarWidth = useScrollbar();

  useEffect(() => {
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    return () => {
      document.body.style.paddingRight = '17px';
    };
  }, [scrollbarWidth]);
  return (
    <header className='fixed top-10 left-0 right-0 z-50 xl:mr-4'>
      <div className='flex flex-row gap-36 xl:gap-[50px] justify-center items-center w-full p-2 rounded-full backdrop-blur-[7px]'>
        <Link href='/'> {logo} </Link>

        <div className='hidden xl:flex xl:max-w-[1300px] flex-row justify-center items-center gap-20'>
          <div>{nav}</div>
          <div>{auth}</div>
        </div>

        <Sheet>
          <SheetTrigger asChild className='xl:hidden'>
            <BiMenuAltRight className='w-7 h-7' />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>{logo}</SheetTitle>
            </SheetHeader>
            <div className='max-h-[200vh] flex flex-col justify-start my-5'>
              <NavMobile />
              <div className='mt-10'>{auth}</div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};