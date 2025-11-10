import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

export default function OurStory({ data }: any) {
  return (
    <div className="p-6 lg:px-20 lg:py-10 mt-8 lg:mt-12 space-y-8 lg:space-y-16">
      <p className="text-[#4D5A51] text-4xl lg:text-6xl font-medium">
        {data?.title}
      </p>
      <div className="text-lg lg:text-2xl text-[#333] leading-relaxed space-y-4">
        <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
          {data?.description}
        </ReactMarkdown>
      </div>
    </div>
  );
}
