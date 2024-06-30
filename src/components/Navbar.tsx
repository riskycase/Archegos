"use client";
import React from "react";
import { useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";

import Logo from "/assets/Logo.jpg";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  
  const handleClick = () => {
      setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky h-15 inset-x-0 top-0 z-30 w-full border border-zinc-200 border-b-2 bg-white backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between">
          {/* separate links  */}

          <div>
            <Link href="/">
              <Image
                src={Logo}
                alt="product preview"
                width={80}
                height={60}
                quality={100}
                // className='rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'
              />
            </Link>
          </div>
          <div className="hidden items-center space-x-4 md:flex">
            <Link
              href="/"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              ABOUT
            </Link>
            <Link
              href="/products"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              PRODUCTS
            </Link>

            
            <Link
              href="/careers"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
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
              href="/contact"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              CONTACT
            </Link>
          </div>

          {/* add mobile navbar */}
          <button
          className="md:hidden focus:outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-16 right-0 bg-white shadow-md md:hidden w-40">
            <div className="flex flex-col items-center py-2 space-y-2">
              <Link href="/" className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })} onClick={handleClick}>HOME</Link>

              <Link href="/about" className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })} onClick={handleClick}>ABOUT</Link>

              <Link href="/products" className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })} onClick={handleClick}>PRODUCTS</Link>

              <Link href="/careers" className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })} onClick={handleClick}>CAREERS</Link>

              <Link href="/contact" className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })} onClick={handleClick}>CONTACT</Link>
            </div>
          </div>
        )}


        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
