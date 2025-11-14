import Image from "next/image";
import Link from "next/link";

export default function Pathway({ data }: any) {
  return (
    <div className="p-6 lg:py-16 lg:px-20 lg:mt-20">
      <div className="bg-[#E2E4D6] h-auto rounded-[25px] p-6 lg:p-16 flex flex-col items-center justify-center gap-6 lg:gap-10">
        <p className="text-center text-3xl lg:text-5xl font-medium lg:font-medium text-[#4D5A51]">
          {data?.title}
        </p>
        <p className="text-center text-lg lg:text-2xl text-[#4D5A51] font-medium">
          {data?.description}
        </p>

        <div className="w-full mt-8 lg:mt-10 flex flex-col lg:flex-row lg:items-start lg:justify-around gap-6 lg:gap-20 lg:px-10">
          {data.cards &&
            data.cards?.map((card: any) => (
              <div
                key={card.id}
                className="border border-[#4D5A51] h-auto lg:h-[370px] rounded-xl bg-white px-6 py-5 flex flex-col items-center gap-4 lg:gap-3 lg:justify-around w-full"
              >
                {card?.icon && (
                  <Image
                    src={`${card.icon.url}`}
                    alt={card.title || "Icon"} // Better alt text
                    width={500}
                    height={500}
                    className="w-8 h-8"
                    unoptimized
                  />
                )}

                <p className="text-[#4D5A51] text-2xl lg:text-2xl text-center lg:text-center font-medium lg:font-medium">
                  {card?.title}
                </p>

                <p className="text-[#4D5A51] text-lg lg:text-md text-center lg:text-center">
                  {card?.description}
                </p>

                <Link
                  href={`/${card.button.href}`}
                  className="w-full lg:w-50 text-center text-lg text-[#4D5A51] bg-[#E2E4D6] border border-[#4D5A51] rounded-xl px-6 py-3 lg:px-0 lg:py-3"
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
