import Image from "next/image";
import Button from "../ui/Button";
import { LuCircleCheckBig } from "react-icons/lu";

export default function CorporatePricing({ data }: any) {
  const { card } = data;

  return (
    <div className="mt-12 lg:mt-30 p-6 lg:p-0">
      <h2 className="text-center text-3xl lg:text-5xl font-medium lg:font-medium text-[#4D5A51]">
        {data?.title}
      </h2>
      <p className="text-center text-lg lg:text-2xl w-full text-[#4D5A51] mt-4 lg:mt-0">
        {data?.description}
      </p>
      <div className="w-full p-0 lg:p-10 flex flex-col items-center justify-center gap-6 lg:gap-10 mt-8 lg:mt-0">
        <div className="w-full flex flex-col-reverse lg:flex-row lg:items-center justify-center gap-8 lg:gap-4">
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8 items-start">
            <h2 className="text-start text-2xl lg:text-3xl font-medium lg:font-medium text-[#4D5A51]">
              {card?.title}
            </h2>
            <p className="text-start text-base lg:text-xl lg:max-w-xl w-full text-[#4D5A51]">
              {card?.description}
            </p>

            <div className="space-y-5">
              {card?.lists?.map((list: any) => (
                <div className="flex gap-4 items-center" key={list.id}>
                  <LuCircleCheckBig
                    className="text-[#6E7D66] shrink-0"
                    size={20}
                  />
                  <p className="text-start text-base lg:text-xl w-full text-[#4D5A51]">
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

          <div className="w-full lg:w-1/2 overflow-hidden">
            <Image
              src={`${card.image.url}`}
              alt={card?.title || "Corporate Pricing"}
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
