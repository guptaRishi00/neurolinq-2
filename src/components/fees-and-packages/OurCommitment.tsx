import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import { LuCircleCheckBig } from "react-icons/lu";

export default function OurCommitment({ data }: any) {
  return (
    <div className="p-6 lg:px-20 py-8 lg:py-10 mt-8 lg:mt-12 space-y-8 lg:space-y-16">
      <p className="text-[#4D5A51] text-4xl lg:text-6xl font-medium">
        {data?.title}
      </p>
      <div className="text-lg lg:text-2xl text-[#333] leading-relaxed space-y-4 w-full">
        <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
          {data?.description}
        </ReactMarkdown>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-center gap-6 lg:gap-5">
        {data.cards.map((card: any) => (
          <div
            className="bg-[#6E7D66] h-auto lg:h-[800px] w-full p-6 lg:px-8 lg:py-8 rounded-xl flex flex-col items-start gap-6 lg:gap-8"
            key={card.id}
          >
            <p className="text-white text-3xl lg:text-4xl">{card.title}</p>
            <p className="text-[#E2E4D6] text-3xl lg:text-4xl">{card.price}</p>
            <p className="text-white text-lg lg:text-2xl">{card.description}</p>

            <div className="flex flex-col items-start gap-5">
              {card.lists.map((list: any) => (
                <div className="flex gap-3 items-center" key={list.id}>
                  <LuCircleCheckBig className="text-white shrink-0" size={30} />
                  <p className="text-start text-base lg:text-xl w-full text-white">
                    {list?.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
