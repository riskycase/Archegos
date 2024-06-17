import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { buttonVariants } from "./ui/button";
import Logo from './assets/Logo.jpg'

const Navbar = () => {
  return (
    <nav className='sticky h-15 inset-x-0 top-0 z-30 w-full border border-gray-200 bg-white backdrop-blur-lg transition-all'>
        <MaxWidthWrapper>
            <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
              {/* separate links  */}
                  
                  <div>
                    <Image 
                    src={Logo} alt='product preview'
                    width={80}
                    height={60}
                    quality={100}
                    // className='rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'
                    />
                  </div>
                  <div className='hidden items-center space-x-4 sm:flex'>
                    <Link
                    href='/'
                    className={buttonVariants({
                      variant: 'ghost',
                      size: 'sm',
                    })}>
                    HOME
                    </Link>
                    <Link
                    href='/about'
                    className={buttonVariants({
                      variant: 'ghost',
                      size: 'sm',
                    })}>
                    ABOUT
                    </Link>
                    <Link
                    href='/products'
                    className={buttonVariants({
                      variant: 'ghost',
                      size: 'sm',
                    })}>
                    PRODUCTS
                    </Link>
                    <Link
                    href='/careers'
                    className={buttonVariants({
                      variant: 'ghost',
                      size: 'sm',
                    })}>
                    CAREERS
                    </Link>
                    {/* <Link
                    href='/directors'
                    className={buttonVariants({
                      variant: 'ghost',
                      size: 'sm',
                    })}>
                    DIRECTORS
                    </Link> */}
                    <Link
                    href='/contact'
                    className={buttonVariants({
                      variant: 'ghost',
                      size: 'sm',
                    })}>
                    CONTACT
                    </Link>
                  </div>

                {/* add mobile navbar */}


            </div>
        </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar