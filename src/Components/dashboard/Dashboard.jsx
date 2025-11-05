import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import PrivateGpt from "../PrivateGpt/PrivateGpt";
import { useTheme } from "../../contexts/ThemeContext";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { theme } = useTheme();

  const toggleSidebar = () => setIsSidebarOpen((s) => !s);

  return (
    <div
      className={`relative flex min-h-screen transition-all duration-300 ${
        theme === "dark" ? "bg-[#1e2939]" : "bg-[#eff1f2]"
      }`}
    >
      {/* ===== Sidebar (Always on top when open) ===== */}
      <div
        className={`fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          theme={theme}
        />
      </div>

      {/* ===== Main Content ===== */}
      <div
        className={`flex flex-col flex-1 transition-all duration-500 ease-in-out ${
          isSidebarOpen ? "lg:ml-40" : "lg:ml-8"
        }`}
      >
        {/* Navbar */}
        <div className="sticky top-0 z-30 w-full">
          <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>

        {/* PrivateGpt */}
        <main className="m-2 relative z-10">
          <PrivateGpt isSidebarOpen={isSidebarOpen} />
        </main>
      </div>

      {/* ===== Mobile Overlay Click Close ===== */}
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
