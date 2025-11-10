import Image from "next/image";
import Button from "../ui/Button";
import { LuCircleCheckBig } from "react-icons/lu";

export default function CorporatePricing({ data }: any) {
  const { card } = data;

  return (
    <div className="lg:mt-30">
      <h2 className="text-center lg:text-5xl lg:font-medium text-[#4D5A51]">
        {data?.title}
      </h2>
      <p className="text-center lg:text-2xl lg:w-full text-[#4D5A51]">
        {data?.description}
      </p>
      <div className="lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-10 p-10">
        <div className="lg:flex lg:items-center justify-center w-full">
          <div className="space-y-8 w-full">
            <h2 className="text-start lg:text-3xl lg:font-medium text-[#4D5A51]">
              {card?.title}
            </h2>
            <p className="text-start lg:text-xl lg:max-w-xl lg:w-full text-[#4D5A51]">
              {card?.description}
            </p>

            <div className="space-y-5">
              {card?.lists?.map((list: any) => (
                <div className="flex gap-4 items-center">
                  <LuCircleCheckBig className="text-[#6E7D66]" size={20} />
                  <p className="text-start lg:text-xl lg:max-w-xl lg:w-full text-[#4D5A51]">
                    {list?.text}
                  </p>
                </div>
              ))}
            </div>

            <Button
              color={card.button.color}
              href={`/${card.button.href || "/"}`}
              key={card.button.id}
              className=""
            >
              {card.button.text}
            </Button>
          </div>

          <div className="w-full overflow-hidden">
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${card.image.url}`}
              alt={"logo"}
              width={500}
              height={500}
              className="object-cover w-full h-full object-center"
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
}
