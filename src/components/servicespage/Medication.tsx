import Image from "next/image";
import Button from "../ui/Button";

export default function Medication({ data }: any) {
  return (
    <div className="lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-10 p-10">
      <div className="lg:flex lg:items-center justify-center w-full">
        <div className="space-y-8 w-full">
          <h2 className="text-start lg:text-5xl lg:font-medium text-[#4D5A51]">
            {data?.title}
          </h2>
          <p className="text-start lg:text-xl lg:max-w-xl lg:w-full text-[#4D5A51]">
            {data?.description}
          </p>

          <div className="space-y-5">
            {data?.lists?.map((list: any) => (
              <div className="flex gap-4 items-center">
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${list.icon.url}`}
                  alt={"logo"}
                  width={500}
                  height={500}
                  className="lg:w-6 lg:h-6"
                  unoptimized
                />
                <p className="text-start lg:text-xl lg:max-w-xl lg:w-full text-[#4D5A51]">
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

        <div className="w-full overflow-hidden">
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${data.image.url}`}
            alt={"logo"}
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
