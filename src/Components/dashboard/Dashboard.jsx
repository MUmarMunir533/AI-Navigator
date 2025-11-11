import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import { useTheme } from "../../contexts/ThemeContext";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { RiSearch2Line } from "react-icons/ri";
import { TbMessageFilled } from "react-icons/tb";
import VobSidebar from "../Vob/VobSidebar";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { theme } = useTheme();
  const location = useLocation();

  const chats = [
    "Next.js Guide",
    "React Notes",
    "Tailwind Tips",
    "AI Design Flow",
  ];

  const toggleSidebar = () => setIsSidebarOpen((s) => !s);

  useEffect(() => {
    if (window.innerWidth < 1024) setIsSidebarOpen(false);

    const handleResize = () => {
      if (window.innerWidth < 1024) setIsSidebarOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getSidebarMiddleContent = () => {
    if (!isSidebarOpen) {
      return (
        <>
          <div className="w-full flex justify-center mt-2">
            <HiOutlinePencilAlt size={17} />
          </div>
          <div className="w-full flex justify-center mt-2">
            <RiSearch2Line size={19} />
          </div>
        </>
      );
    }

    switch (location.pathname) {
      case "/voc":
        return (
          <>
            <div className="w-full flex justify-center mt-2">
              <div
                className={`flex items-center gap-2 py-1.5 px-2 rounded-md transition-all duration-300 w-[90%] text-xs ${
                  theme === "dark" ? "text-gray-400" : "text-gray-800"
                }`}
              >
                <p>Filters</p>
              </div>
            </div>
          </>
        );

      case "/vob":
        return (
          <>
            <div className="w-full flex justify-center mt-2">
              <VobSidebar />
            </div>
          </>
        );

      case "/vom":
        return (
          <>
            <div className="w-full flex justify-center mt-2">
              <div
                className={`flex items-center gap-2 py-1.5 px-2 rounded-md transition-all duration-300 w-[90%] text-xs ${
                  theme === "dark" ? "text-gray-400" : "text-gray-800"
                }`}
              >
                <p>Filters</p>
              </div>
            </div>
          </>
        );

      default:
        return (
          <>
            <div className="w-full flex justify-center mt-2">
              <button
                className={`flex items-center gap-2 py-1.5 px-2 rounded-md transition-all duration-300 w-[90%] ${
                  theme === "dark" ? "hover:bg-gray-700" : "hover:bg-white"
                }`}
              >
                <HiOutlinePencilAlt size={17} />
                <span className="text-[13px] sm:text-[13px]">New Chat</span>
              </button>
            </div>
            <div className="w-full flex justify-center mt-2">
              <div
                className={`flex items-center gap-2 py-1.5 px-2 rounded-md transition-all duration-300 w-[90%] ${
                  theme === "dark" ? "hover:bg-gray-700" : "hover:bg-white"
                }`}
              >
                <RiSearch2Line size={19} />
                <span className="text-[13px] sm:text-[13px]">Search</span>
              </div>
            </div>

            <div
              className={`flex-1 mt-3 w-full flex flex-col items-center overflow-y-auto px-1 scrollbar-thin scrollbar-track-transparent ${
                theme === "dark"
                  ? "scrollbar-thumb-gray-600"
                  : "scrollbar-thumb-gray-300"
              }`}
              style={{ height: "70%" }}
            >
              {chats.map((chat, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 px-3 py-1.5 text-[11px] sm:text-[12px] rounded-md cursor-pointer transition-all duration-300 w-[90%] ${
                    theme === "dark" ? "hover:bg-gray-700" : "hover:bg-white"
                  }`}
                >
                  <TbMessageFilled className="text-gray-400" size={12} />
                  <span>{chat}</span>
                </div>
              ))}
            </div>
          </>
        );
    }
  };

  return (
    <div
      className={`relative flex min-h-screen transition-all duration-300 ${
        theme === "dark" ? "bg-[#1e2939]" : "bg-[#eff1f2]"
      }`}
    >
      <div
        className={`fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          middleContent={getSidebarMiddleContent()}
        />
      </div>

      <div
        className={`flex flex-col flex-1 transition-all duration-500 ease-in-out ${
          isSidebarOpen ? "lg:ml-40" : "lg:ml-10"
        }`}
      >

        <div className="sticky top-0 z-30 w-full">
          <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>

        <main className="m-2 relative z-10">
          <Outlet />
        </main>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Dashboard;
