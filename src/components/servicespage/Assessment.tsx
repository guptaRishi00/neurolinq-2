import Button from "../ui/Button";

export default function Assessment({ data }: any) {
  return (
    <div className="p-6 lg:px-20 py-8 lg:py-10 mt-8 lg:mt-12 space-y-8 lg:space-y-16">
      <p className="text-[#4D5A51] text-3xl lg:text-5xl font-medium">
        {data?.title}
      </p>
      <p className="text-lg lg:text-2xl text-[#333] leading-relaxed lg:max-w-6xl">
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
