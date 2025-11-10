import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

export default function Faq({ data }: any) {
  return (
    <div className="w-full flex lg:flex-col items-center justify-center p-8 relative z-10 gap-10">
      <div className="flex lg:flex-col items-center justify-center gap-5">
        <p className="font-bold lg:text-4xl text-[#4D5A51]">
          Send Us a Message
        </p>
        <p className="font-bold lg:text-xl text-[#6E7D66]">
          Fill out the form below and we'll get back to you within 24 hours.
        </p>
      </div>

      <div className="flex lg:flex-col items-start justify-center px-8 gap-5 mt-10">
        {data?.cards?.map((card: any) => (
          <div
            className="bg-[#E2E4D6] rounded-xl lg:p-8 w-full space-y-8"
            key={card.id}
          >
            <div className="text-[#4D5A51] text-2xl font-bold">
              {card.title}
            </div>

            <div className="text-[#6E7D66] text-xl">
              <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
                {card?.description}
              </ReactMarkdown>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
