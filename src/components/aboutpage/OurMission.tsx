import React from "react";

type Props = {};

export default function OurMission({ data }: any) {
  return (
    <div className="p-10">
      <div className="bg-[#E2E4D6] h-auto lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-10 rounded-2xl lg:p-30">
        <p className="text-center lg:text-5xl lg:font-medium text-[#4D5A51]">
          {data?.title}
        </p>
        <p className="text-center lg:text-xl text-[#4D5A51] lg:max-w-4xl font-medium">
          {data?.description}
        </p>
      </div>
    </div>
  );
}
