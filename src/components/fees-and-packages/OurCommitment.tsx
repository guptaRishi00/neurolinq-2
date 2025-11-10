import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import { LuCircleCheckBig } from "react-icons/lu";

export default function OurCommitment({ data }: any) {
  return (
    <div className="lg:px-20 lg:py-10 lg:mt-12 space-y-16">
      <p className="text-[#4D5A51] lg:text-6xl font-medium">{data?.title}</p>
      <div className="lg:text-2xl text-[#333] leading-relaxed space-y-4 lg:w-full">
        <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
          {data?.description}
        </ReactMarkdown>
      </div>

      <div className="flex lg:items-start lg:justify-center lg:gap-5 ">
        {data.cards.map((card: any) => (
          <div
            className="bg-[#6E7D66] lg:h-[800px] w-full lg:px-8 lg:py-8 rounded-xl flex lg:flex-col lg:items-start lg:gap-8"
            key={card.id}
          >
            <p className="text-white lg:text-4xl">{card.title}</p>
            <p className="text-[#E2E4D6] lg:text-4xl">{card.price}</p>
            <p className="text-white lg:text-2xl">{card.description}</p>

            <div className="flex flex-col items-start gap-5">
              {card.lists.map((list: any) => (
                <div className="flex gap-3 items-center" key={list.id}>
                  <LuCircleCheckBig className="text-white" size={30} />
                  <p className="text-start lg:text-xl lg:max-w-xl lg:w-full text-white">
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
