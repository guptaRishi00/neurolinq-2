import Image from "next/image";

export default function Register({ data }: any) {
  return (
    <div className="flex flex-col lg:flex-row items-stretch justify-center p-6 lg:p-8 relative z-10 gap-8">
      {/* Form Column */}
      <div className="h-auto lg:h-screen border border-[#00000040] w-full bg-white rounded-2xl flex flex-col items-center p-6 lg:p-8 gap-8 lg:gap-14">
        <div className="flex flex-col items-center justify-center gap-4 lg:gap-5 text-center">
          <p className="font-bold text-3xl lg:text-4xl text-[#4D5A51]">
            Send Us a Message
          </p>
          <p className="font-bold text-lg lg:text-xl text-[#6E7D66]">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-5">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-5 lg:gap-8">
            <div className="w-full">
              <p className="text-lg font-bold text-[#4D5A51]">Name</p>
              <input
                type="text"
                className="border border-[#6E7D66] rounded-lg px-5 py-3 lg:py-2 w-full"
              />
            </div>
            <div className="w-full">
              <p className="text-lg font-bold text-[#4D5A51]">Phone</p>
              <input
                type="text"
                className="border border-[#6E7D66] rounded-lg px-5 py-3 lg:py-2 w-full"
              />
            </div>
          </div>
          <div className="w-full">
            <p className="text-lg font-bold text-[#4D5A51]">Email</p>
            <input
              type="text"
              className="border border-[#6E7D66] rounded-lg px-5 py-3 lg:py-2 w-full"
            />
          </div>

          <div className="flex flex-col w-full">
            <label
              htmlFor="my-dropdown"
              className="text-lg font-bold text-[#4D5A51]"
            >
              Select Type
            </label>
            <select
              id="my-dropdown"
              className="border border-[#6E7D66] rounded-lg px-5 py-3 lg:py-2 w-full"
            >
              <option value="" disabled>
                Select Type
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          <div className="w-full">
            <p className="text-lg font-bold text-[#4D5A51]">Message</p>
            <textarea
              className="border border-[#6E7D66] rounded-lg px-5 py-3 lg:py-2 w-full"
              rows={4}
            />
          </div>

          <button className="bg-[#D4AF84] text-white px-5 py-3 rounded-lg cursor-pointer w-full">
            Send Message
          </button>

          <p className="text-[#4D5A51] text-xs text-center">
            By submitting this form, you agree to our privacy policy and consent
            to being contacted about your enquiry.
          </p>
        </div>
      </div>

      {/* Info Column */}
      <div className="h-auto lg:h-screen border border-[#00000040] w-full bg-white rounded-2xl p-6 lg:p-8">
        <div className="flex flex-col items-center justify-center gap-5 text-center">
          <p className="font-bold text-3xl lg:text-4xl text-[#4D5A51]">
            {data?.title}
          </p>
          <p className="font-bold text-lg lg:text-xl text-[#6E7D66]">
            {data?.description}
          </p>

          <div className="flex flex-col items-start w-full gap-6 lg:gap-8 mt-8">
            {data?.cards.map((card: any) => (
              <div
                className="bg-[#E2E4D6] w-full flex items-center gap-4 p-4 lg:p-5 rounded-2xl"
                key={card.id}
              >
                <div className="bg-[#6E7D66] w-fit rounded-full p-2 flex items-center justify-center flex-shrink-0">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${card.icon.url}`}
                    alt={card.title || "icon"}
                    className="w-4"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-lg text-[#4D5A51] font-medium">
                    {card?.title}
                  </p>
                  <p className="text-sm text-[#4D5A51]">{card?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
