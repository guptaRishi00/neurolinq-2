import Image from "next/image";

export default function CareApproach({ data }: any) {
  return (
    <div className="lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-10 p-10">
      <h2 className="text-center lg:text-5xl lg:font-medium text-[#4D5A51]">
        {data?.title}
      </h2>
      <p className="text-center lg:text-2xl lg:w-full text-[#4D5A51]">
        {data?.description}
      </p>
      <div className="lg:flex lg:items-center justify-center w-full">
        <div className=" w-full overflow-hidden">
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${data.image.url}`}
            alt={"logo"}
            width={500}
            height={500}
            className="object-cover w-full h-full object-center"
            unoptimized
          />
        </div>
        <div className=" w-full h-full p-3 lg:space-y-10">
          {data?.cards?.map((card: any) => (
            <div
              key={card.id}
              className="w-full border border-[#4D5A51] lg:px-5 lg:gap-3 py-5 h-auto rounded-xl lg:flex lg:items-start lg:flex-col"
            >
              <p className="lg:text-xl  text-[#4D5A51]">{card?.title}</p>
              <p className=" lg:text-sm text-start text-[#4D5A51]">
                {card?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
