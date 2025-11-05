import React from "react";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { useTheme } from "../../contexts/ThemeContext";
import { BsLayoutSidebar } from "react-icons/bs";
import { RiSearch2Line } from "react-icons/ri";
import { TbMessageFilled } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { theme } = useTheme();

  const chats = [
    "Next.js Guide",
    "React Notes",
    "Tailwind Tips",
    "AI Design Flow",
  ];

  return (
    <>
      {/* Overlay for small screens when sidebar is open */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-30 lg:hidden"
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full flex flex-col justify-between transition-all duration-500 z-40
        ${isOpen ? "w-40 sm:w-44 lg:w-48" : "w-8 sm:w-9 lg:w-10"}
        ${
          theme === "dark"
            ? "bg-gray-800 text-white"
            : "bg-[#eff1f2] text-black"
        }
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* 🔹 Top Section */}
        <div
          className={`flex items-center justify-between w-full py-3 px-2 sm:px-3 transition-all duration-500 ${
            isOpen ? "gap-2" : "gap-0"
          }`}
        >
          <div
            className="flex items-start cursor-pointer w-full"
            onClick={() => isOpen === false && toggleSidebar()}
          >
            <svg
              width="23"
              height="23"
              viewBox="0 0 66 59"
              fill="none"
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

            {isOpen && (
              <h1 className="text-[14px] sm:text-[14px] font-extrabold ml-2 whitespace-nowrap">
                AI Navigator
              </h1>
            )}
          </div>

          {isOpen && (
            <button
              onClick={toggleSidebar}
              className={`rounded-full transition-all duration-300 p-1.5 ${
                theme === "dark"
                  ? "hover:bg-gray-600 text-white"
                  : "hover:bg-gray-200 text-black"
              }`}
            >
              <BsLayoutSidebar size={12} />
            </button>
          )}
        </div>

        {/* 🔹 Middle Buttons */}
        <div className="w-full flex justify-center mt-2">
          <button
            className={`flex items-center gap-2 py-1.5 px-2 rounded-md transition-all duration-300 
            ${isOpen ? "sm:justify-start w-[90%]" : "justify-center w-[70%]"} 
            ${theme === "dark" ? "hover:bg-gray-700" : "hover:bg-white"}`}
          >
            <HiOutlinePencilAlt size={isOpen ? 17 : 19} />
            {isOpen && (
              <span className="text-[13px] sm:text-[13px]">New Chat</span>
            )}
          </button>
        </div>

        <div className="w-full flex justify-center mt-2">
          <div
            className={`flex items-center gap-2 py-1.5 px-2 rounded-md transition-all duration-300 
            ${isOpen ? "sm:justify-start w-[90%]" : "justify-center w-[70%]"} 
            ${theme === "dark" ? "hover:bg-gray-700" : "hover:bg-white"}`}
          >
            <RiSearch2Line size={isOpen ? 19 : 21} />
            {isOpen && (
              <span className="text-[13px] sm:text-[13px]">Search</span>
            )}
          </div>
        </div>

        {/* 🔹 Recent Chats */}
        <div
          className={`flex-1 mt-3 w-full flex flex-col items-center overflow-y-auto px-1 
          ${
            theme === "dark"
              ? "scrollbar-thumb-gray-600"
              : "scrollbar-thumb-gray-300"
          } 
          scrollbar-thin scrollbar-track-transparent`}
          style={{ height: "70%" }}
        >
          {isOpen && (
            <>
              <h2
                className={`text-[13px] sm:text-[13px] font-semibold mb-2 self-start px-3 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Recent Chats
              </h2>
              <div className="space-y-1 w-full flex flex-col items-center">
                {chats.map((chat, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-2 px-3 py-1.5 text-[11px] sm:text-[12px] rounded-md cursor-pointer transition-all duration-300 
                    ${
                      theme === "dark" ? "hover:bg-gray-700" : "hover:bg-white"
                    } 
                    ${isOpen ? "w-[90%]" : "w-[70%]"}`}
                  >
                    <TbMessageFilled className="text-gray-400" size={12} />
                    {isOpen && <span>{chat}</span>}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* 🔹 Bottom Placeholder */}
        {isOpen && (
          <div
            className="w-full flex justify-center items-center"
            style={{ height: "30%" }}
          ></div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
