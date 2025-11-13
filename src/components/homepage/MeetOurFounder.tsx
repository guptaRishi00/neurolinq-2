import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import Image from "next/image";

export default function MeetOurFounder({ data }: any) {
  return (
    <div className="w-full p-6 lg:px-10 lg:py-20 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-10 lg:gap-0">
      <div className="w-full lg:w-1/2 flex flex-col items-start gap-6">
        <p className="text-[#4D5A51] text-3xl lg:text-5xl font-medium">
          {data?.title}
        </p>
        <p className="text-[#6E7D66] text-xl lg:text-3xl">{data?.subtitle}</p>

        <div className="text-base lg:text-xl text-[#333] leading-relaxed space-y-4">
          <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
            {data?.description}
          </ReactMarkdown>
        </div>
      </div>

      <div className="relative w-full lg:w-1/2 flex flex-col items-center mt-10 lg:mt-0">
        <Image
          src={"/founder.svg"}
          alt={"decorative background"}
          width={500}
          height={500}
          className="lg:w-90 lg:h-90 hidden lg:inline-block absolute top-0 left-50 lg:-translate-x-1/2 lg:-translate-y-10 z-0"
        />

        <div className="relative w-[320px] h-[420px] lg:w-[500px] lg:h-[480px] rounded-lg overflow-hidden shadow-lg z-10">
          <Image
            src={`${data.profile?.image.url}`}
            alt={data?.profile?.name || "founder photo"}
            width={300}
            height={300}
            className="object-cover w-full h-full object-center"
            unoptimized
          />
        </div>

        <div className="text-center mt-6 space-y-1 z-10">
          <p className="text-[#4D5A51] font-bold text-xl lg:text-2xl">
            {data?.profile?.name}
          </p>
          <p className="text-[#4D5A51] text-lg lg:text-2xl">
            {data?.profile?.designation}
          </p>
        </div>
      </div>
    </div>
  );
}
