import React from "react";

type Props = {};

export default function OurMission({ data }: any) {
  return (
    <div className="p-6 lg:p-10">
      <div className="bg-[#E2E4D6] h-auto flex flex-col items-center justify-center gap-6 lg:gap-10 rounded-2xl p-6 lg:p-30">
        <p className="text-center text-3xl lg:text-5xl font-medium text-[#4D5A51]">
          {data?.title}
        </p>
        <p className="text-center text-base lg:text-xl text-[#4D5A51] lg:max-w-4xl font-bold">
          {data?.description}
        </p>
      </div>
    </div>
  );
}
