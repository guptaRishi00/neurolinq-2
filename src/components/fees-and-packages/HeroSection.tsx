import Image from "next/image";
import React from "react";

type Props = {};

export default function HeroSection({ data }: any) {
  return (
    <div className="bg-[#6E7D66] w-full lg:h-[500px] p-10 lg:flex lg:items-center lg:justify-between relative">
      <div className="lg:flex lg:flex-col lg:items-start lg:gap-8 relative">
        <p className="text-white lg:text-2xl">{data?.tag}</p>
        <h1 className="text-white lg:text-6xl font-bold">{data?.title}</h1>
        <p className="text-white lg:text-2xl lg:max-w-2xl">
          {data?.description}
        </p>
      </div>

      <Image
        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${data.image.url}`}
        alt={"logo"}
        width={100}
        height={100}
        className="w-160 h-120 relative z-10 translate-y-32 object-cover"
        unoptimized
      />
    </div>
  );
}
