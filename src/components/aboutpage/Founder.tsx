import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import Image from "next/image";

export default function Founder({ data }: any) {
  return (
    <div className="lg:flex lg:justify-between lg:items-center lg:px-10 lg:py-20 w-full lg:mt-20">
      <div className="lg:w-1/2 flex flex-col items-start gap-6">
        <p className="text-[#4D5A51] lg:text-5xl font-medium">{data?.title}</p>
        <p className="text-[#6E7D66] lg:text-3xl">{data?.subtitle}</p>

        <div className="lg:text-xl text-[#333] leading-relaxed space-y-4">
          <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
            {data?.description}
          </ReactMarkdown>
        </div>
      </div>

      <div className="relative lg:w-1/2 flex flex-col items-center mt-10 lg:mt-0">
        <Image
          src={"/founder.svg"}
          alt={"decorative background"}
          width={500}
          height={500}
          className="lg:w-90 lg:h-90 absolute top-0 left-50 -translate-x-1/2 -translate-y-10 z-0"
        />

        <div className="relative w-[320px] h-[420px] lg:w-[500px] lg:h-[480px] rounded-lg overflow-hidden shadow-lg z-10">
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${data.profile?.image.url}`}
            alt={"founder photo"}
            width={300}
            height={300}
            className="object-cover w-full h-full object-center"
            unoptimized
          />
        </div>

        <div className="text-center mt-6 space-y-1 z-10">
          <p className="text-[#4D5A51] font-bold lg:text-2xl">
            {data?.profile?.name}
          </p>
          <p className="text-[#4D5A51] lg:text-2xl">
            {data?.profile?.designation}
          </p>
        </div>
      </div>
    </div>
  );
}
