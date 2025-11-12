import React from "react";
import { FiSearch } from "react-icons/fi";
import { useTheme } from "../../contexts/ThemeContext";

const UserManagement = () => {
  const { theme } = useTheme();

  const data = [
    {
      id: 1,
      Email: "First@gmail.com",
      Title: "Testing ",
      System_Role: "AI Navigator",
    },
    {
      id: 2,
      Email: "Second@gmail.com",
      Title: "Testing ",
      System_Role: "AI Navigator",
    },
    {
      id: 3,
      Email: "Third@gmail.com",
      Title: "Testing ",
      System_Role: "AI Navigator",
    },
  ];

  return (
    <>
      <div
        className={`flex justify-center items-start h-screen overflow-x-hidden 
        transition-all duration-300 rounded-2xl 
        ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-black"
        }`}
      >
        <div
          className={`flex flex-col px-3 sm:px-5 py-4 
          w-full max-w-[calc(100vw-2em)] md:max-w-[calc(100vw-4em)] xl:max-w-full 
          overflow-x-auto transition-all duration-300`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
            <div
              className={`flex items-center rounded-md w-full md:w-1/2 px-3 py-2 ${
                theme === "dark"
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-800 border border-gray-200"
              }`}
            >
              <FiSearch className="text-gray-400 mr-2 text-sm shrink-0" />
              <input
                type="text"
                placeholder="Search episodes keywords..."
                className={`w-full bg-transparent outline-none text-sm placeholder-gray-400 ${
                  theme === "dark" ? "text-gray-200" : "text-gray-700"
                }`}
              />
            </div>
          </div>

          <div
            className={`relative border rounded-md w-full ${
              theme === "dark"
                ? "border-gray-700 bg-transparent"
                : "border-gray-200 bg-white"
            } overflow-x-auto scrollbar-thin ${
              theme === "dark"
                ? "scrollbar-thumb-gray-600 scrollbar-track-gray-800"
                : "scrollbar-thumb-gray-400 scrollbar-track-gray-100"
            }`}
          >
            <table className="min-w-full w-full text-left text-xs sm:text-sm">
              <thead>
                <tr
                  className={`sticky top-0 ${
                    theme === "dark"
                      ? "bg-gray-800 border-b border-gray-700 text-gray-300"
                      : "bg-white border-b border-gray-200 text-gray-600"
                  }`}
                >
                  <th className="px-3 py-2">Email</th>
                  <th className="px-3 py-2">Title</th>
                  <th className="px-3 py-2">System Role</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr
                    key={item.id}
                    className={`transition-colors ${
                      theme === "dark"
                        ? "border-b border-gray-700 hover:bg-gray-700/40"
                        : "border-b border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    <td className="px-3 py-2 whitespace-nowrap">
                      {item.Email}
                    </td>
                    <td className="px-3 py-2">{item.Title}</td>
                    <td className="px-3 py-2">{item.System_Role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserManagement;
