'use client';

import Image from 'next/image';
import Link from 'next/link';
import useScroll from '@/lib/hooks/use-scroll';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function NavBar() {
  const scrolled = useScroll(false);
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);

  return (
    <>
      <div
        className={`fixed top-0 flex w-full justify-center px-5 md:px-10 lg:px-14 border-b border-gray-200/60 bg-white ${
          scrolled ? 'backdrop-blur bg-opacity-70 border-b-0' : 'bg-white'
        } z-30 transition-all`}
      >
        <div className='flex h-16 w-full max-w-7xl items-center justify-between'>
          <Link href='/' className='flex items-center text-2xl'>
            <Image
              src='/logo.png'
              alt='TechWave logo'
              width='30'
              height='30'
              className='mr-2 rounded-sm'
            ></Image>
            <p className='font-medium text-[#5E17EB] tracking-widest'>TechWave</p>
          </Link>
          <div className='hidden gap-8 md:flex'>
            <Button variant="ghost">Sign in</Button>
            <Button className="rounded-2xl">Get Started</Button>
          </div>
          <div
            className='-mr-2 cursor-pointer p-2 md:hidden'
            onClick={() => setShowDropdownMenu(!showDropdownMenu)}
          >
            {showDropdownMenu ? (
              <X width={20} height={20} />
            ) : (
              <Menu width={20} height={20} />
            )}
          </div>
        </div>
      </div>
      <div
        className={`ease-emphasized-out fixed bottom-0 left-0 z-30 h-full w-full overflow-auto bg-white px-5 pb-16 transition-[opacity,transform] duration-500 ${
          showDropdownMenu
            ? 'top-[65px] translate-y-0 opacity-100'
            : '-top-full translate-y-[-100%] opacity-0'
        }`}
        style={{ transitionProperty: 'transform, opacity' }}
      >
        {/*<div className="py-5 border-b">About Us</div>*/}
        <div className='border-b py-5'>
          <Button variant="ghost">Sign in</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </>
  );
}
