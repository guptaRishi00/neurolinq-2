import Button from "./Button";

export default function Cta({ data }: any) {
  return (
    <div className="relative z-10 bg-[#D4AF84] w-11/12 lg:w-[85%] rounded-xl mx-auto h-auto p-6 lg:px-10 lg:py-20 translate-y-12 lg:translate-y-16 gap-6 lg:gap-10 flex items-center justify-center flex-col">
      <p className="text-white text-2xl lg:text-5xl font-bold text-center">
        {data?.title}
      </p>
      <p className="text-[#E2E4D6] text-base lg:text-2xl max-w-5xl text-center">
        {data?.description}
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-2 lg:flex lg:items-center lg:gap-2">
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
  );
}
