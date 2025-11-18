import Image from "next/image";
import React from "react";

type Props = {};

export default function Process({ data }: any) {
  return (
    <div className="p-6 lg:p-10">
      <div className="bg-[#E2E4D6] h-auto flex flex-col items-center justify-center gap-6 lg:gap-10 rounded-2xl p-6 lg:p-10">
        <p className="text-center text-3xl lg:text-5xl font-medium text-[#4D5A51]">
          {data?.title}
        </p>
        <p className="text-center text-lg lg:text-2xl text-[#4D5A51]">
          {data?.description}
        </p>

        {/* UPDATED: Switched to xl:flex-row to prevent squeezing on 1024px screens. 
            Added xl:items-stretch to make all cards equal height. */}
        <div className="w-full mt-8 lg:mt-10 flex flex-col xl:flex-row xl:items-stretch xl:justify-around gap-6 lg:gap-4">
          {data.cards &&
            data.cards?.map((card: any) => (
              <div
                key={card.id}
                // UPDATED: Removed fixed height (lg:h-[300px]).
                // Used xl:min-h-[350px] for consistency and h-full to fill the flex container.
                className="border border-[#4D5A51] h-auto xl:min-h-[350px] rounded-lg bg-white p-8 flex flex-col items-center justify-start w-full gap-4 lg:gap-3 flex-1"
              >
                {card?.icon && (
                  <Image
                    src={`${card.icon.url}`}
                    alt={card.title || "Icon"}
                    width={500}
                    height={500}
                    className="w-5 h-5"
                    unoptimized
                  />
                )}

                <p className="text-[#4D5A51] text-lg lg:text-xl text-center font-medium lg:font-medium">
                  {card?.title}
                </p>

                <p className="text-[#4D5A51] text-base lg:text-lg text-center">
                  {card?.description}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
