'use client'
import React from 'react';
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

interface LayoutProps {
  logo: React.ReactNode;
  nav: React.ReactElement;
  auth: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ logo, nav, auth }) => {
  return (
    <header className='fixed top-10 left-0 right-0 z-50'>
      {/* Мобильная версия */}
      <div className="xl:hidden flex flex-row justify-center gap-36 items-center p-2 rounded-full backdrop-blur-[5px]">
        <Link href='/'> {logo} </Link>
        <Sheet>
          <SheetTrigger asChild>
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

      {/* Десктопная версия */}
      <div className='xl:flex flex-row hidden xl:gap-[50px] justify-center items-center w-full p-2 rounded-full backdrop-blur-[7px]'>
        <Link href='/'>{logo}</Link>
        <div className='flex flex-row justify-center items-center gap-20'>
          <div>{nav}</div>
          <div>{auth}</div>
        </div>
      </div>
    </header>
  );
};