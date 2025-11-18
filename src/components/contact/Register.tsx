import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";

export default function Register({ data }: any) {
  return (
    <div className="w-full mx-auto flex flex-col lg:grid lg:grid-cols-3 items-start justify-center p-6 lg:p-8 relative z-10 gap-8 lg:gap-12 py-12 lg:py-16">
      {/* Form */}
      <div className="h-auto col-span-2 w-full border border-[#00000040] bg-white rounded-2xl flex flex-col items-center p-8 lg:p-12 gap-8">
        <div className="flex flex-col items-center justify-center gap-4 lg:gap-5 text-center">
          <p className="font-bold text-3xl lg:text-4xl text-[#4D5A51]">
            Send Us a Message
          </p>
          <p className="font-bold text-lg lg:text-xl text-[#6E7D66]">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-6 lg:gap-8">
            <div className="w-full">
              <label
                htmlFor="name"
                className="block text-lg font-bold text-[#4D5A51] mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="border border-[#6E7D66] rounded-lg px-4 py-3 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF84] focus:border-transparent transition-colors"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="phone"
                className="block text-lg font-bold text-[#4D5A51] mb-2"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                className="border border-[#6E7D66] rounded-lg px-4 py-3 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF84] focus:border-transparent transition-colors"
              />
            </div>
          </div>

          <div className="w-full">
            <label
              htmlFor="email"
              className="block text-lg font-bold text-[#4D5A51] mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-[#6E7D66] rounded-lg px-4 py-3 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF84] focus:border-transparent transition-colors"
            />
          </div>

          <div className="flex flex-col w-full">
            <label
              htmlFor="select-type"
              className="text-lg font-bold text-[#4D5A51] mb-2"
            >
              Select Type
            </label>

            {/* 2. Add a relative wrapper */}
            <div className="relative w-full">
              <select
                id="select-type"
                // 3. Add padding-right (pr-10) to make room for the icon
                className="appearance-none border border-[#6E7D66] rounded-lg px-4 py-3 pr-10 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF84] focus:border-transparent transition-colors bg-white"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Type
                </option>
                <option value="option1">Book Appointment</option>
                <option value="option2">Contact Enquries</option>
              </select>

              {/* 4. Add the icon, absolutely positioned */}
              <FiChevronDown
                className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6E7D66] pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="w-full">
            <label
              htmlFor="message"
              className="block text-lg font-bold text-[#4D5A51] mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              className="border border-[#6E7D66] rounded-lg px-4 py-3 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF84] focus:border-transparent transition-colors"
              rows={4}
            />
          </div>

          <button className="w-full bg-[#D4AF84] text-white font-bold text-lg px-6 py-3 rounded-lg cursor-pointer hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#D4AF84] focus:ring-offset-2 transition-all">
            Send Message
          </button>

          <p className="text-[#6E7D66] text-sm text-center">
            By submitting this form, you agree to our privacy policy and consent
            to being contacted about your enquiry.
          </p>
        </div>
      </div>

      {/* Info */}
      <div className="h-auto lg:h-[830px] col-span-1 w-full border border-[#00000040] bg-white rounded-2xl p-6 sm:p-8 lg:p-10">
        <div className="flex flex-col items-center justify-center gap-5 text-center">
          {/* Title */}
          <p className="font-bold text-2xl sm:text-3xl lg:text-4xl text-[#4D5A51] break-words">
            {data?.title}
          </p>

          {/* Description */}
          <p className="font-medium text-base sm:text-lg lg:text-xl text-[#6E7D66] max-w-2xl break-words">
            {data?.description}
          </p>

          {/* Cards */}
          <div className="flex flex-col w-full gap-6 mt-8">
            {data?.cards.map((card: any) => (
              <div
                key={card.id}
                className="bg-[#e2e4d6] w-full flex items-start gap-4 p-4 sm:p-6 rounded-2xl overflow-hidden"
              >
                {/* ICON */}
                <div className="flex items-start justify-center shrink-0">
                  <div className="bg-[#6E7D66] rounded-full p-3 flex items-center justify-center">
                    <Image
                      src={card.icon.url}
                      alt={card.title || "icon"}
                      width={24}
                      height={24}
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                  </div>
                </div>

                {/* TEXT */}
                <div className="flex flex-col gap-1 items-start w-full">
                  <p className="text-lg sm:text-xl font-bold text-[#4D5A51] break-words">
                    {card.title}
                  </p>

                  {/* ⚠️ FIX: break email, long URLs, any long text */}
                  <p className="text-sm sm:text-base text-[#4D5A51] leading-relaxed break-words break-all">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
