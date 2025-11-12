import React, { useRef } from "react";
import { FiX, FiCalendar } from "react-icons/fi";
import { useTheme } from "../../contexts/ThemeContext";

const UploadModal = ({ isOpen, onClose }) => {
  const { theme } = useTheme();
  const modalRef = useRef(null);
  const dateInputRef = useRef(null);

  if (!isOpen) return null;

  
  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };
  
  const handleDateClick = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker?.(); 
      dateInputRef.current.focus();
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className={`fixed inset-0 flex items-center justify-center z-50 transition-all duration-300 ${
        theme === "dark"
          ? "bg-black/60 text-white"
          : "bg-gray-900/40 text-gray-900"
      }`}
    >
      <div
        ref={modalRef}
        className={`w-[90%] sm:w-[85%] md:w-[70%] lg:w-[50%] xl:w-[40%] rounded-xl shadow-2xl p-6 relative transition-all duration-300 ${
          theme === "dark" ? "bg-gray-900" : "bg-white"
        }`}
      >
        
        <div className="flex justify-between items-center mb-5 border-b border-gray-600/30 pb-3">
          <h2
            className="text-2xl font-bold"
            style={{
              background: "linear-gradient(90deg, #7b2ff7, #00c6ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Upload File
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-red-500 transition"
          >
            <FiX size={22} />
          </button>
        </div>


        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold">File Name</label>
            <input
              type="text"
              placeholder="Enter file name"
              className={`px-3 py-2 rounded-md text-sm outline-none w-full ${
                theme === "dark"
                  ? "bg-gray-800 text-gray-100 placeholder-gray-500"
                  : "bg-gray-100 text-gray-800 placeholder-gray-400"
              }`}
            />
          </div>
          
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold">Google Link</label>
            <input
              type="text"
              placeholder="Enter Google link"
              className={`px-3 py-2 rounded-md text-sm outline-none w-full ${
                theme === "dark"
                  ? "bg-gray-800 text-gray-100 placeholder-gray-500"
                  : "bg-gray-100 text-gray-800 placeholder-gray-400"
              }`}
            />
          </div>
          
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold">
              Industry Category
            </label>
            <select
              className={`px-3 py-2 rounded-md text-sm outline-none w-full ${
                theme === "dark"
                  ? "bg-gray-800 text-gray-100"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              <option value="">Select Here</option>
              <option value="Tech">Tech</option>
              <option value="Finance">Finance</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>
          
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-semibold">
              Document Category
            </label>
            <select
              className={`px-3 py-2 rounded-md text-sm outline-none w-full ${
                theme === "dark"
                  ? "bg-gray-800 text-gray-100"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              <option value="">Select Here</option>
              <option value="PDF">PDF</option>
              <option value="Spreadsheet">Spreadsheet</option>
              <option value="Presentation">Presentation</option>
            </select>
          </div>
          
          <div className="flex flex-col md:col-span-2">
            <label className="mb-1 text-sm font-semibold">Date Record</label>
            <div
              onClick={handleDateClick}
              className={`flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer w-full ${
                theme === "dark"
                  ? "bg-gray-800 text-gray-100"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              <FiCalendar className="text-gray-400" size={18} />
              <input
                ref={dateInputRef}
                type="date"
                className={`bg-transparent w-full outline-none text-sm cursor-pointer ${
                  theme === "dark" ? "text-gray-100" : "text-gray-800"
                }`}
              />
            </div>
          </div>
        </form>
        
        <div className="flex justify-end mt-6 gap-3">
          <button
            type="button"
            onClick={onClose}
            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
              theme === "dark"
                ? "bg-gray-800 hover:bg-gray-700 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-800"
            }`}
          >
            Cancel
          </button>
          <button
            type="submit"
            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
              theme === "dark"
                ? "bg-[#373ca3] hover:bg-indigo-500 text-white"
                : "bg-[#373ca3] hover:bg-indigo-700 text-white"
            }`}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
