import React, { useState, useEffect } from "react";
import { Outlet } from "react-router";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import { useTheme } from "../../contexts/ThemeContext";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { theme } = useTheme();

  const toggleSidebar = () => setIsSidebarOpen((s) => !s);

  useEffect(() => {
    // ✅ Run once on mount (page refresh)
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }

    // ✅ Close sidebar automatically when resized to small screen
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`relative flex min-h-screen transition-all duration-300 ${
        theme === "dark" ? "bg-[#1e2939]" : "bg-[#eff1f2]"
      }`}
    >
      {/* ===== Sidebar ===== */}
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
        className={`flex flex-col flex-1 transition-all duration-500 ease-in-out 
          ${isSidebarOpen ? "lg:ml-40" : "lg:ml-10"} 
        `}
      >
        {/* Navbar */}
        <div className="sticky top-0 z-30 w-full">
          <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>

        {/* Outlet for nested routes */}
        <main className="m-2 relative z-10">
          <Outlet />
        </main>
      </div>

      {/* Mobile Overlay Click Close */}
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
