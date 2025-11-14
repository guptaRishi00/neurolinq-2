import Image from "next/image";

export default function CareApproach({ data }: any) {
  return (
    <div className="w-full p-6 lg:p-10 flex flex-col items-center justify-center gap-6 lg:gap-10">
      <h2 className="text-center text-3xl lg:text-5xl font-medium lg:font-medium text-[#4D5A51]">
        {data?.title}
      </h2>
      <p className="text-center text-lg lg:text-2xl font-semibold w-full text-[#4D5A51]">
        {data?.description}
      </p>
      <div className="w-full flex flex-col lg:flex-row lg:items-center justify-center gap-8 lg:gap-4">
        <div className="w-full lg:w-1/2 overflow-hidden">
          <Image
            src={`${data.image.url}`}
            alt={data?.title || "Care Approach"}
            width={500}
            height={500}
            className="object-cover w-full h-full object-center"
            unoptimized
          />
        </div>
        <div className="w-full lg:w-1/2 h-full flex flex-col gap-6 lg:gap-3 p-0 lg:p-3">
          {data?.cards?.map((card: any) => (
            <div
              key={card.id}
              className="w-full border border-[#4D5A51] pl-5 pr-0 py-8 h-auto rounded-xl flex items-start flex-col gap-5 lg:gap-3"
            >
              <p className="text-lg lg:text-xl text-[#4D5A51] font-bold">
                {card?.title}
              </p>
              <p className="text-sm lg:text-lg font-medium text-start text-[#6E7D66]">
                {card?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
