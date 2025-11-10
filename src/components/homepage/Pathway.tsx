import Image from "next/image";
import Link from "next/link";

export default function Pathway({ data }: any) {
  return (
    <div className="p-6 lg:p-10">
      <div className="bg-[#E2E4D6] h-auto rounded-2xl p-6 lg:p-10 flex flex-col items-center justify-center gap-6 lg:gap-10">
        <p className="text-center text-3xl lg:text-5xl font-medium lg:font-medium text-[#4D5A51]">
          {data?.title}
        </p>
        <p className="text-center text-lg lg:text-2xl text-[#4D5A51]">
          {data?.description}
        </p>

        <div className="w-full mt-8 lg:mt-10 flex flex-col lg:flex-row lg:items-start lg:justify-around gap-6 lg:gap-10">
          {data.cards &&
            data.cards?.map((card: any) => (
              <div
                key={card.id}
                className="border border-[#4D5A51] h-auto lg:h-[500px] rounded-lg bg-white p-8 flex flex-col items-center gap-4 lg:gap-3 lg:justify-around w-full"
              >
                {card?.icon && (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${card.icon.url}`}
                    alt={card.title || "Icon"} // Better alt text
                    width={500}
                    height={500}
                    className="w-10 h-10"
                    unoptimized
                  />
                )}

                <p className="text-[#4D5A51] text-2xl lg:text-4xl text-center lg:text-center font-medium lg:font-medium">
                  {card?.title}
                </p>

                <p className="text-[#4D5A51] text-lg lg:text-2xl text-center lg:text-center">
                  {card?.description}
                </p>

                <Link
                  href={`/${card.button.href}`}
                  className="w-full lg:w-70 text-center text-lg text-[#4D5A51] bg-[#E2E4D6] border border-[#4D5A51] rounded-xl px-6 py-3 lg:px-8 lg:py-4"
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
