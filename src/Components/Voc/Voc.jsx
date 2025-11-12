import React, { useState } from "react";
import {
  FiSearch,
  FiThumbsUp,
  FiMessageSquare,
  FiEdit2,
  FiCalendar,
} from "react-icons/fi";
import { useTheme } from "../../contexts/ThemeContext";
import AddRecordModal from "./AddRecordModel";
import DateRangeModal from "../Buttons/Model/DateRangeModal";

const Voc = () => {
  const { theme } = useTheme();
  const [showModal, setShowModal] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const data = [
    {
      id: 1,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      guest: "Founder and CEO",
      format: "Multi-Media",
      category: "Podcast",
      description: "-",
      like: 1,
    },
    {
      id: 2,
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      guest: "Product Designer",
      format: "Video",
      category: "Interview",
      description: "Design Process",
      like: 4,
    },
    {
      id: 3,
      avatar: "https://randomuser.me/api/portraits/men/12.jpg",
      guest: "Tech Lead",
      format: "Audio",
      category: "Talk Show",
      description: "AI Discussion",
      like: 3,
    },
  ];

  return (
    <>
      <div
        className={`flex justify-center items-start h-screen overflow-x-hidden transition-all duration-300 rounded-2xl ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-black"
        }`}
      >
        <div className="flex flex-col px-3 sm:px-5 py-4 w-full max-w-full overflow-x-auto">
          
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

            <div className="flex flex-wrap items-center gap-2 relative">
              <button
                onClick={() => setShowDatePicker(true)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition ${
                  theme === "dark"
                    ? "bg-gray-800 hover:bg-gray-700 text-white"
                    : "bg-white shadow-md hover:bg-[#eff1f2] text-[#373ca3]"
                }`}
              >
                <FiCalendar className="text-base" /> Search by Date
              </button>

              <button
                onClick={() => setShowModal(true)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition ${
                  theme === "dark"
                    ? "bg-[#373ca3] hover:bg-indigo-500 text-white"
                    : "bg-[#373ca3] hover:bg-indigo-700 text-white"
                }`}
              >
                + &nbsp; Add Record
              </button>
            </div>
          </div>
          
          <div
            className={`relative border rounded-md w-full ${
              theme === "dark"
                ? "border-gray-700 bg-transparent"
                : "border-gray-200 bg-white"
            } overflow-x-auto`}
          >
            <table className="min-w-full text-left text-xs sm:text-sm">
              <thead>
                <tr
                  className={`sticky top-0 ${
                    theme === "dark"
                      ? "bg-gray-800 border-b border-gray-700 text-gray-300"
                      : "bg-white border-b border-gray-200 text-gray-600"
                  }`}
                >
                  <th className="px-3 py-2">Avatar</th>
                  <th className="px-3 py-2">Guest</th>
                  <th className="px-3 py-2">Format</th>
                  <th className="px-3 py-2">Category</th>
                  <th className="px-3 py-2">Description</th>
                  <th className="px-3 py-2">Like</th>
                  <th className="px-3 py-2">Comment</th>
                  <th className="px-3 py-2">Edit</th>
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
                    <td className="px-3 py-2">
                      <img
                        src={item.avatar}
                        alt="avatar"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      {item.guest}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      {item.format}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      {item.category}
                    </td>
                    <td className="px-3 py-2">{item.description}</td>
                    <td className="px-3 py-2 flex items-center gap-1">
                      <FiThumbsUp className="text-sm" /> {item.like}
                    </td>
                    <td className="px-3 py-2">
                      <FiMessageSquare className="text-sm" />
                    </td>
                    <td className="px-3 py-2">
                      <FiEdit2 className="text-sm" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {showModal && (
        <AddRecordModal theme={theme} onClose={() => setShowModal(false)} />
      )}
      
      {showDatePicker && (
        <DateRangeModal
          theme={theme}
          onClose={() => setShowDatePicker(false)}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
      )}
    </>
  );
};

export default Voc;
