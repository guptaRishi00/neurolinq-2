import Image from "next/image";

export default function HeroSection({ data }: any) {
  return (
    <div className="bg-[#6E7D66] w-full h-auto lg:h-[500px] p-6 lg:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between relative gap-8 lg:gap-0">
      <div className="flex flex-col items-start gap-6 lg:gap-8 relative">
        <p className="text-white text-lg lg:text-2xl lg:tracking-[10px] w-full font-medium">
          {data?.tag}
        </p>
        <h1 className="text-white text-4xl lg:text-6xl font-bold">
          {data?.title}
        </h1>
        <p className="text-white text-lg lg:text-2xl lg:max-w-2xl">
          {data?.description}
        </p>
      </div>

      <Image
        src={`${data.image.url}`}
        alt={data?.title || "Hero Image"}
        width={100}
        height={100}
        className="w-full h-auto max-w-sm lg:max-w-none relative z-10 translate-y-8 lg:w-150 lg:h-150 lg:translate-y-32"
        unoptimized
      />
    </div>
  );
}
