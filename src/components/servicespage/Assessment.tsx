import Button from "../ui/Button";

export default function Assessment({ data }: any) {
  return (
    <div className="lg:px-20 lg:py-10 lg:mt-12 space-y-16">
      <p className="text-[#4D5A51] lg:text-5xl font-medium">{data?.title}</p>
      <p className="lg:text-2xl text-[#333] leading-relaxed space-y-4 lg:max-w-6xl">
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
