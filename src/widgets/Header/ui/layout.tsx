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
      document.body.style.paddingRight = '';
    };
  }, [scrollbarWidth]);
  return (
    <header className='fixed top-10 left-0 right-0 z-50'>
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
            <div className='h-[60vh] flex flex-col justify-between my-5'>
              {nav}
            </div>
            <SheetFooter className='w-full'>
              {auth}
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};