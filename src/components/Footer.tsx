"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import github from "../components/icons/github-brands-solid.svg";
import linkedin from "../components/icons/linkedin-brands-solid.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-red-900 text-zinc-200">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-sm">Archegos Ventures Private Limited 2024</p>
          <p className="text-sm">Designed & Developed by Raiia Singh</p>
          <div className="flex space-x-7">
            <Link href="https://github.com/raiiasingh19">
              <Image
                src={github}
                alt="github"
                width={25}
                height={25}
                className="hover:opacity-80 transition-opacity"
              />
            </Link>
            <Link href="https://in.linkedin.com/in/raiia-singh-789bba26a">
              <Image
                src={linkedin}
                alt="linkedin"
                width={25}
                height={25}
                className="hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;