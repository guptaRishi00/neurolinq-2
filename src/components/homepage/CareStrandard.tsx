import Image from "next/image";
import React from "react";

type Props = {};

export default function CareStrandard({ data }: any) {
  return (
    <div className="lg:flex lg:flex-col lg:items-center lg:justify-center w-full ] lg:gap-10 py-5">
      <h2 className="text-center lg:text-5xl lg:font-medium text-[#4D5A51]">
        {data?.title}
      </h2>
      <p className="text-center lg:text-2xl lg:max-w-xl text-[#4D5A51]">
        {data?.description}
      </p>

      <div className="lg:grid lg:grid-cols-3 lg:gap-10 lg:items-center lg:justify-center lg:max-w-6xl mt-8">
        {data?.cards.map((card: any) => (
          <div
            className="w-full h-[250px] bg-[#6E7D66] lg:flex lg:items-start lg:flex-col lg:gap-5 lg:px-5 lg:py-6 rounded-xl"
            key={card.id}
          >
            {card?.icon && (
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${card.icon.url}`}
                alt={"logo"}
                width={500}
                height={500}
                className="lg:w-8 lg:h-8"
                unoptimized
              />
            )}

            <p className="lg:text-2xl text-white font-medium">{card.title}</p>
            <p className="lg:text-xl text-white lg:max-w-md">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
