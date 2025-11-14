import Image from "next/image";
import Button from "../ui/Button";

export default function HeroSection({ data }: any) {
  return (
    <div className="">
      <div className="relative w-full h-auto bg-[#6E7D66] p-6 lg:p-8 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8">
        <div className="relative">
          <Image
            src={`${data.image.url}`}
            alt={data?.title || "Hero Image"}
            width={500}
            height={500}
            className="w-full h-auto lg:w-full lg:h-full"
            unoptimized
          />
        </div>

        <div className="flex flex-col items-center text-center gap-6 lg:flex lg:flex-col lg:items-start lg:text-left lg:gap-10">
          <h1 className="text-3xl lg:text-5xl lg:max-w-2xl text-white font-bold lg:leading-16">
            {data?.title}
          </h1>
          <p className="text-[#E2E4D6] text-lg lg:text-2xl">{data?.subtitle}</p>
          <p className="text-[#E2E4D6] text-base lg:text-xl lg:max-w-xl">
            {data?.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-2 lg:flex lg:items-center lg:gap-8">
            {data?.button?.map((item: any) => (
              <Button
                color={item.color}
                href={`/${item.href || "/"}`}
                key={item.id}
                className="font-semibold"
              >
                {item.text}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <Image
        src={"/herosection.svg"}
        alt={"Section divider"}
        width={500}
        height={500}
        className="w-full h-auto -mt-1 lg:w-full lg:h-full lg:-mt-1"
        unoptimized
      />
    </div>
  );
}
