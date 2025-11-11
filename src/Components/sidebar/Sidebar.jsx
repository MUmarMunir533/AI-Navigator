import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { BsLayoutSidebar } from "react-icons/bs";

const Sidebar = ({ isOpen, toggleSidebar, middleContent }) => {
  const { theme } = useTheme();

  return (
    <>
    
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-30 lg:hidden"
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full flex flex-col justify-between transition-all duration-500 z-40
        ${isOpen ? "w-32 sm:w-36 lg:w-40" : "w-8 sm:w-9 lg:w-10"}
        ${
          theme === "dark"
            ? "bg-gray-800 text-white"
            : "bg-[#eff1f2] text-black"
        }
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        
        <div
          className={`flex items-center justify-between w-full py-3 px-2 sm:px-3 transition-all duration-500 ${
            isOpen ? "gap-2" : "gap-0"
          }`}
        >
          <div
            className="flex items-start cursor-pointer w-full"
            onClick={() => !isOpen && toggleSidebar()}
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
        
        <div className="flex-1 mt-3 w-full flex flex-col items-center overflow-y-auto px-1">
          {middleContent}
        </div>
        
        {isOpen && (
          <div
            className="w-full flex justify-center items-center"
            style={{ height: "30%" }}
          />
        )}
      </div>
    </>
  );
};

export default Sidebar;
