import Image from "next/image";
import Button from "../ui/Button";

export default function HeroSection({ data }: any) {
  return (
    <div className="">
      <div className="relative w-full h-auto bg-[#6E7D66] lg:p-8 lg:flex lg:justify-between lg:items-center">
        <div className="relative">
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${data.image.url}`}
            alt={"logo"}
            width={500}
            height={500}
            className="lg:w-full lg:h-full"
            unoptimized
          />
        </div>

        <div className="lg:flex lg:flex-col lg:items-start lg:gap-10">
          <h1 className="lg:text-5xl lg:max-w-2xl text-white font-bold">
            {data?.title}
          </h1>
          <p className="text-[#E2E4D6] lg:text-2xl">{data?.subtitle}</p>
          <p className="text-[#E2E4D6] lg:text-xl lg:max-w-xl">
            {data?.description}
          </p>

          <div className="lg:flex lg:items-center lg:gap-2">
            {data?.button?.map((item: any) => (
              <Button
                color={item.color}
                href={`/${item.href || "/"}`}
                key={item.id}
              >
                {item.text}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <Image
        src={"/herosection.svg"}
        alt={"logo"}
        width={500}
        height={500}
        className="lg:w-full lg:h-full lg:-mt-1"
        unoptimized
      />
    </div>
  );
}
