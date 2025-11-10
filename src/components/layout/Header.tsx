"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header({ data }: any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full bg-[#6E7D66] relative">
      <div className="w-full p-4 lg:p-8 flex justify-between items-center">
        <Link href={"/"}>
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${data.logo.url}`}
            alt={"logo"}
            width={100}
            height={100}
            className="w-20 h-20 lg:h-10 lg:w-50"
          />
        </Link>

        {/* 2. Desktop Nav Links (Hidden on mobile) */}
        <div className="hidden lg:flex lg:justify-between lg:items-center lg:gap-5">
          {data.links.map((link: any) => (
            <div className="" key={link.id}>
              <Link
                href={link?.href || "/"}
                className="text-white hover:text-[#D4AF84] transition-all duration-300 text-lg"
              >
                {link?.text}
              </Link>
            </div>
          ))}
        </div>

        {/* 3. Desktop Buttons (Hidden on mobile) */}
        <div className="hidden lg:flex lg:items-center lg:gap-2">
          {data?.button?.map((item: any) => (
            <Button
              color={item.color}
              href={`/${item.href || "/"}`}
              key={item.id}
            >
              {item.text}
            </Button>
          ))}
        </div>

        {/* 4. Mobile Hamburger Button (Hidden on desktop) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-3xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* 5. Mobile Menu (Dropdown) */}

      <div
        className={`
          lg:hidden absolute top-full left-0 w-full bg-[#6E7D66] z-20
          flex flex-col items-center gap-6 p-6
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >
        {data.links.map((link: any) => (
          <div className="" key={link.id}>
            <Link
              href={link?.href || "/"}
              className="text-white hover:text-[#D4AF84] transition-all duration-300 text-lg"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              {link?.text}
            </Link>
          </div>
        ))}

        {/* Mobile Buttons */}
        <div className="flex flex-col items-stretch gap-2 w-full max-w-xs">
          {data?.button?.map((item: any) => (
            <Button
              color={item.color}
              href={`/${item.href || "/"}`}
              key={item.id}
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              {item.text}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
