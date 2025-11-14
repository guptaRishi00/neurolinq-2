import Image from "next/image";

export default function CareStrandard({ data }: any) {
  return (
    <div className="w-full p-6 flex flex-col items-center justify-center gap-6 lg:gap-10">
      <h2 className="text-center text-3xl lg:text-5xl font-medium lg:font-medium text-[#4D5A51]">
        {data?.title}
      </h2>
      <p className="text-center text-lg lg:text-2xl lg:max-w-xl text-[#4D5A51] lg:font-medium">
        {data?.description}
      </p>

      {/* MODIFICATION: Replaced 'lg:gap-25' with 'lg:gap-x-25' and 'lg:gap-y-6' */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-x-25 lg:gap-y-14 lg:w-full lg:px-20 mt-8">
        {data?.cards.map((card: any, index: number) => (
          <div
            className={`w-full h-[250px] bg-[#6E7D66] flex items-start flex-col gap-4 px-5 py-6 rounded-xl lg:gap-5 lg:col-span-2 ${
              index === 3 ? "lg:col-start-2" : ""
            }`}
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
            <p className="text-base lg:text-xl text-white lg:max-w-md font-medium">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
