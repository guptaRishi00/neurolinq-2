import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

export default function PricingOptions({ data }: any) {
  return (
    <div className="flex flex-col items-start justify-center p-6 lg:px-8 gap-5">
      {data?.cards?.map((card: any) => (
        <div
          className="bg-[#E2E4D6] rounded-xl p-6 lg:p-8 w-full space-y-6 lg:space-y-8"
          key={card.id}
        >
          <div className="text-[#4D5A51] text-xl lg:text-2xl font-bold">
            {card.title}
          </div>

          <div className="text-[#6E7D66] text-lg lg:text-xl">
            <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
              {card?.content}
            </ReactMarkdown>
          </div>
        </div>
      ))}
    </div>
  );
}
