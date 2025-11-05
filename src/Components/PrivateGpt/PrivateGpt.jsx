import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaPaperclip } from "react-icons/fa6";
import { useTheme } from "../../contexts/ThemeContext";

const PrivateGpt = ({ isSidebarOpen }) => {
  const { theme } = useTheme();

  const sections = [
    {
      title: "Prompt Library",
      description: "Choose a chat or begin a new one",
      color: "#2d37ff",
      darkColor: "#585dc1ff",
    },
    {
      title: "Optimize Prompt",
      description: "Enhance your prompts for better AI responses",
      color: "#36cc86ff",
      darkColor: "#07e493e8",
    },
    {
      title: "Context",
      description: "Manage context for more accurate",
      color: "#403088ff",
      darkColor: "#61299e",
    },
    {
      title: "Add-Ons",
      description: "Integrate extra features and tools",
      color: "#359ac2ff",
      darkColor: "#1c6b80",
    },
  ];

  return (
    <div
      className={`min-h-screen w-full flex justify-center items-center px-3 sm:px-4 py-8 overflow-y-auto transition-all duration-300 
        ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-black"}
      `}
    >
      <div
        className={`flex flex-col items-center justify-center transition-all duration-300 
          ${isSidebarOpen ? "max-w-4xl" : "max-w-5xl"}
          w-full gap-6 lg:gap-8`}
      >
        {/* ===== HEADER ===== */}
        <div className="flex flex-col items-center text-center gap-1">
          <div className="flex items-center gap-2 justify-center">
            <svg
              width="36"
              height="36"
              viewBox="0 0 66 59"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M65.1758 58.5693L49.457 57.6357L24.3145 14.0879L31.3604 0L65.1758 58.5693ZM21.9512 18.7627L43.9004 56.9834L21.9502 45.0586L0 56.9834L21.9512 18.7617V18.7627Z"
                fill="url(#paint0_linear_3915_5122)"
              />
              <path
                d="M21.4694 45.2569L0 56.7402L21.4694 19.9355V45.2569Z"
                fill="black"
                fillOpacity="0.36"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_3915_5122"
                  x1="19.1693"
                  y1="39.0946"
                  x2="30.8174"
                  y2="15.238"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.134615" stopColor="#565CFF" />
                  <stop offset="0.504808" stopColor="#E4E5FF" />
                  <stop offset="0.913462" stopColor="#A85AFF" />
                </linearGradient>
              </defs>
            </svg>

            <h1
              className={`text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent 
                ${
                  theme === "dark"
                    ? "bg-linear-to-bl from-[#AA60FE] via-[#BE85FF] to-[#3040e9]"
                    : "bg-linear-to-bl from-[#AA60FE] via-[#BE85FF] to-[#5D6AFF]"
                }`}
            >
              Hello, Steve!
            </h1>
          </div>
          <p
            className={`text-[12px] sm:text-base ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Choose a chat or begin a new one
          </p>
        </div>

        {/* ===== CARDS SECTION ===== */}
        <div
          className={`flex flex-wrap justify-center lg:justify-between transition-all duration-300 
            ${isSidebarOpen ? "gap-3 lg:gap-4" : "gap-5 lg:gap-4"}
            w-full max-w-3xl
          `}
        >
          {sections.map((section, index) => (
            <div
              key={index}
              className={`rounded-xl border shadow-sm p-4 flex flex-col justify-end hover:shadow-md transition-all
                ${theme === "dark" ? "border-gray-700" : "border-gray-200"}
                w-full xs:w-[80%] sm:w-[48%] md:w-[30%] lg:w-[23%]
              `}
              style={{
                height: "160px",
                background: `
                  radial-gradient(circle at top right, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 25%, transparent 40%),
                  radial-gradient(ellipse at top right, ${section.color} 0%, rgba(255,255,255,0) 67%)
                `,
              }}
            >
              <h3
                className="font-semibold text-sm sm:text-base"
                style={{ color: section.darkColor }}
              >
                {section.title}
              </h3>
              <p
                className={`text-xs sm:text-sm font-light mt-1 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-700"
                }`}
              >
                {section.description}
              </p>
            </div>
          ))}
        </div>

        {/* ===== INPUT SECTION ===== */}
        <div
          className={`w-full max-w-3xl relative rounded-xl border transition-all duration-300 
            ${
              theme === "dark"
                ? "bg-[#1e2939] border-gray-700"
                : "bg-[#eff1f2] border-gray-100"
            } p-4 sm:p-5`}
        >
          <div className="relative flex items-center h-20 sm:h-[100px]">
            <input
              type="text"
              placeholder="Hello..."
              className={`w-full h-full text-[13px] sm:text-[14px] rounded-xl placeholder:text-[13px] border px-10 sm:px-12 py-2 pr-20 sm:pr-28 focus:outline-none
                ${
                  theme === "dark"
                    ? "bg-[#101828] border-gray-600 text-white placeholder-gray-400"
                    : "bg-white border-gray-200 text-black placeholder-gray-500"
                }`}
            />

            {/* Left Buttons */}
            <div className="absolute left-3 flex items-center gap-2">
              <button className="flex items-center gap-1 text-xs text-gray-500 border rounded-full border-gray-300 p-1.5">
                <FaPaperclip />
              </button>
            </div>

            {/* Right Buttons */}
            <div className="absolute right-3 flex items-center gap-2">
              <button className="p-2 bg-transparent border border-gray-600 text-gray-500 rounded-full">
                <FaArrowUp />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateGpt;
