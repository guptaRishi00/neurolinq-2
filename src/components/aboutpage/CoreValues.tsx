import Image from "next/image";

export default function CoreValues({ data }: any) {
  return (
    <div className="w-full p-6 lg:py-5 flex flex-col items-center justify-center gap-6 lg:gap-10">
      <h2 className="text-center text-3xl lg:text-5xl font-medium lg:font-medium text-[#4D5A51]">
        {data?.title}
      </h2>
      <p className="text-center text-lg lg:text-2xl lg:max-w-xl text-[#4D5A51]">
        {data?.description}
      </p>

      <div className="w-full px-0 lg:px-20 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 lg:items-center lg:justify-center">
        {data?.cards.map((card: any) => (
          <div
            className="w-full h-[250px] bg-[#6E7D66] flex items-start flex-col gap-4 lg:gap-5 px-5 py-6 rounded-xl"
            key={card.id}
          >
            {card?.icon && (
              <Image
                src={`${card.icon.url}`}
                alt={card.title || "Icon"}
                width={500}
                height={500}
                className="w-8 h-8"
                unoptimized
              />
            )}

            <p className="text-xl lg:text-2xl text-white font-medium">
              {card.title}
            </p>
            <p className="text-base lg:text-xl text-white lg:max-w-md">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
