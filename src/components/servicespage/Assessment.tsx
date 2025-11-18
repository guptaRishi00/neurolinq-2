import Button from "../ui/Button";

export default function Assessment({ data }: any) {
  return (
    <div className="w-full p-6 lg:px-10 xl:px-20 py-8 lg:py-10 mt-8 lg:mt-12 space-y-8 lg:space-y-16">
      {/* Title: Smooth scaling (3xl -> 4xl -> 5xl) with word breaking */}
      <p className="text-[#4D5A51] text-3xl lg:text-4xl xl:text-5xl font-medium break-words">
        {data?.title}
      </p>

      {/* Description: Adjusted max-width and text size for tablet/laptop */}
      <p className="text-lg lg:text-xl xl:text-2xl text-[#333] leading-relaxed max-w-full lg:max-w-4xl xl:max-w-6xl break-words">
        {data?.description}
      </p>

      <Button
        color={data.button.color}
        href={`/${data.button.href || "/"}`}
        key={data.button.id}
      >
        {data.button.text}
      </Button>
    </div>
  );
}
