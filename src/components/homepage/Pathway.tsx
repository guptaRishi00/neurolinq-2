import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Pathway({ data }: any) {
  return (
    <div className="p-10">
      <div className="bg-[#E2E4D6] h-auto lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-10 rounded-2xl lg:p-10">
        <p className="text-center lg:text-5xl lg:font-medium text-[#4D5A51]">
          {data?.title}
        </p>
        <p className="text-center lg:text-2xl text-[#4D5A51]">
          {data?.description}
        </p>

        <div className="lg:flex lg:items-start lg:justify-around lg:gap-10 w-full lg:mt-10">
          {data.cards &&
            data.cards?.map((card: any) => (
              <div
                key={card.id}
                className="border border-[#4D5A51] lg:h-[500px] rounded-lg bg-white p-8 lg:flex lg:flex-col lg:items-center lg:justify-around w-full lg:gap-3"
              >
                {card?.icon && (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${card.icon.url}`}
                    alt={"logo"}
                    width={500}
                    height={500}
                    className="lg:w-10 lg:h-10"
                    unoptimized
                  />
                )}

                <p className="text-[#4D5A51] lg:text-4xl lg:text-center lg:font-medium">
                  {card?.title}
                </p>

                <p className="text-[#4D5A51] lg:text-2xl lg:text-center ">
                  {card?.description}
                </p>

                <Link
                  href={`/${card.button.href}`}
                  className="lg:w-70 text-center lg:text-lg text-[#4D5A51] bg-[#E2E4D6] border border-[#4D5A51] rounded-xl lg:px-8 lg:py-4"
                >
                  {card.button.text}
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
