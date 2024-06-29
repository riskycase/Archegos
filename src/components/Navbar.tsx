"use client";
import React from "react";
import { useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog"

import Logo from "./assets/Logo.jpg";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false); // State to manage dialog visibility

  const handleOpenDialog = () => {
    setIsOpen(true);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
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
          <div className="hidden items-center space-x-4 sm:flex">
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
            <AlertDialog>
            <AlertDialogTrigger>
            <Link
              href="/products"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
              onClick={handleOpenDialog}
            >
              PRODUCTS
            </Link>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel onClick={handleCloseDialog}>Cancel</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

            
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
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
