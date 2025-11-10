import Image from "next/image";
import Button from "../ui/Button";

export default function Medication({ data }: any) {
  return (
    <div className="w-full p-6 lg:p-10 flex flex-col items-center justify-center gap-6 lg:gap-10">
      <div className="w-full flex flex-col-reverse lg:flex-row lg:items-center justify-center gap-8 lg:gap-4">
        <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8 items-start">
          <h2 className="text-start text-3xl lg:text-5xl font-medium lg:font-medium text-[#4D5A51]">
            {data?.title}
          </h2>
          <p className="text-start text-base lg:text-xl lg:max-w-xl w-full text-[#4D5A51]">
            {data?.description}
          </p>

          <div className="space-y-5">
            {data?.lists?.map((list: any) => (
              <div className="flex gap-4 items-center" key={list.id}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${list.icon.url}`}
                  alt={list.text || "icon"}
                  width={500}
                  height={500}
                  className="w-6 h-6"
                  unoptimized
                />
                <p className="text-start text-base lg:text-xl lg:max-w-xl w-full text-[#4D5A51]">
                  {list?.text}
                </p>
              </div>
            ))}
          </div>

          <Button
            color={data.button.color}
            href={`/${data.button.href || "/"}`}
            key={data.button.id}
            className=""
          >
            {data.button.text}
          </Button>
        </div>

        <div className="w-full lg:w-1/2 overflow-hidden">
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${data.image.url}`}
            alt={data?.title || "Medication"}
            width={500}
            height={500}
            className="object-cover w-full h-full object-center"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
