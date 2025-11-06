import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../ui/Button";

export default function Footer({ data, cta }: any) {
  return (
    <div className="h-auto">
      <div className="relative z-10 bg-[#D4AF84] w-3/4 rounded-xl mx-auto h-auto lg:px-10 lg:py-20 translate-y-16 gap-10 flex items-center justify-center flex-col">
        <p className="text-white text-4xl">{cta?.title}</p>
        <p className="text-[#E2E4D6] text-2xl max-w-3xl text-center">
          {cta?.description}
        </p>

        <div className="lg:flex lg:items-center lg:gap-2">
          {cta?.button?.map((item: any) => (
            <Button
              color={item.color}
              href={`/${item.href || "/"}`}
              key={item.id}
            >
              {item.text}
            </Button>
          ))}
        </div>
      </div>
      {/* footer */}
      <div className="relative bg-[#6E7D66] w-full h-auto lg:px-10 lg:pt-30 lg:pb-8">
        <div className=" lg:grid lg:grid-cols-5 lg:gap-20 ">
          <div className="lg:col-span-2">
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${data.logo.url}`}
              alt={"logo"}
              width={100}
              height={100}
              className="lg:w-16"
            />
            <p className="text-white lg:text-lg mt-3 lg:max-w-sm">
              {data?.description}
            </p>

            <div className="lg:flex lg:flex-col lg:items-start lg:gap-3 lg:mt-8 w-full">
              <p className="text-white text-lg">Stay Updated :</p>
              <div className="lg:flex lg:items-center lg:gap-2 w-full">
                <input
                  type="text"
                  className="bg-white/40 p-3 rounded-xl placeholder:text-white"
                  placeholder="Your Email"
                />
                <button className="bg-white text-[#6E7D66] px-5 py-3 rounded-xl cursor-pointer">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className=" h-full flex flex-col items-start gap-3">
            <p className="text-white text-xl">Quick Links</p>
            {data?.quicksLinks?.map((link: any) => (
              <Link
                href={`/${link.href}`}
                className="text-lg text-white"
                key={link.id}
              >
                {link.text}
              </Link>
            ))}
          </div>
          <div className=" h-full flex flex-col items-start gap-3">
            <p className="text-white text-xl">Our services</p>
            {data?.ourServices?.map((link: any) => (
              <p key={link.id} className="text-lg text-white">
                {link.text}
              </p>
            ))}
          </div>
          <div className=" h-full flex flex-col items-start gap-3">
            <p className="text-white text-xl">Contact Us</p>
            {data?.contact?.map((link: any) => (
              <div
                className="text-lg text-white flex items-center gap-2"
                key={link.id}
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${link.icon.url}`}
                  alt={"logo"}
                  width={100}
                  height={100}
                  className="lg:w-4"
                />
                <p className="text-lg text-white">{link.text}</p>
              </div>
            ))}

            <div className="flex items-center gap-5">
              <p className="text-md text-white">Follow</p>
              {data?.socials.map((link: any) => (
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${link.icon.url}`}
                  alt={"logo"}
                  width={100}
                  height={100}
                  className="lg:w-4"
                  key={link.id}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-white lg:mt-10"></div>

        <div className="flex items-center justify-between">
          <p className="text-white lg:text-md mt-3 lg:max-w-sm">
            {data?.copyright}
          </p>

          <div className="flex items-center gap-5 lg:mt-10">
            <p className="text-white lg:text-md lg:max-w-sm">
              {data?.privacy?.title}
            </p>

            {data?.privacy?.tags.map((tag: any) => (
              <div
                className="bg-white/20 text-sm text-white p-3 rounded-xl"
                key={tag.id}
              >
                {tag.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
