import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

export default function OurStory({ data }: any) {
  return (
    <div className="lg:px-20 lg:py-10 lg:mt-12 space-y-16">
      <p className="text-[#4D5A51] lg:text-6xl font-medium">{data?.title}</p>
      <div className="lg:text-2xl text-[#333] leading-relaxed space-y-4 lg:w-full">
        <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
          {data?.description}
        </ReactMarkdown>
      </div>
    </div>
  );
}
