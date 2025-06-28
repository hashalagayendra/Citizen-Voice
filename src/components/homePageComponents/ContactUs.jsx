import {
  FaSmile,
  FaEnvelope,
  FaPhoneAlt,
  FaRegEdit,
  FaRegCommentDots,
} from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-2 w-full">
      <h2 className="text-3xl md:text-4xl font-bold text-[#06386B] text-center mb-10 max-sm:text-2xl">
        Contact us
      </h2>
      <form className="w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 mb-8">
          {/* Name */}
          <div>
            <label className="block text-[#1A1A1A]  max-sm:text-base text-lg mb-1">
              Enter your name*
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="What's your good name?"
                className="w-full border-b max-sm:text-base border-gray-300 focus:outline-none focus:border-[#06386B] py-2 pr-8 text-gray-700 placeholder-gray-400"
              />
              <FaSmile className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          {/* Email */}
          <div>
            <label className="block text-[#1A1A1A] text-lg mb-1 max-sm:text-base">
              Email address*
            </label>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full max-sm:text-base border-b border-gray-300 focus:outline-none focus:border-[#06386B] py-2 pr-8 text-gray-700 placeholder-gray-400"
              />
              <FaEnvelope className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          {/* Phone */}
          <div>
            <label className="block text-[#1A1A1A] text-lg mb-1 max-sm:text-base">
              Phone number name*
            </label>
            <div className="relative">
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full max-sm:text-base border-b border-gray-300 focus:outline-none focus:border-[#06386B] py-2 pr-8 text-gray-700 placeholder-gray-400"
              />
              <FaPhoneAlt className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          {/* Subject */}
          <div>
            <label className="block text-[#1A1A1A] text-lg mb-1 max-sm:text-base">
              Subject
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter Subject"
                className="w-full max-sm:text-base border-b border-gray-300 focus:outline-none focus:border-[#06386B] py-2 pr-8 text-gray-700 placeholder-gray-400"
              />
              <FaRegEdit className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
        {/* Message */}
        <div className="mb-8">
          <label className="block text-[#1A1A1A] text-lg mb-1 max-sm:text-base">
            Your message
          </label>
          <div className="relative">
            <textarea
              rows={2}
              placeholder="Describe about you project"
              className="w-full max-sm:text-base border-b border-gray-300 focus:outline-none focus:border-[#06386B] py-2 pr-8 text-gray-700 placeholder-gray-400 resize-none"
            />
            <FaRegCommentDots className="absolute right-2 top-6 text-gray-400" />
          </div>
        </div>
      </form>
    </div>
  );
}
