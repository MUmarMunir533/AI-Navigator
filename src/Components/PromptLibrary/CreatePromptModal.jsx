import React, { useEffect } from "react";
import { useTheme } from "../../contexts/ThemeContext";

const CreatePromptModal = ({ isOpen, onClose }) => {
  const { theme } = useTheme();

  
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.id === "modal-bg") {
        onClose();
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="modal-bg"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-2 sm:px-0"
    >
      <div
        className={`w-full max-w-lg rounded-xl shadow-lg transition-all duration-300 ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        <div className="flex justify-between items-center px-6 pt-5 pb-3 border-b border-gray-600/40">
          <h2 className="text-2xl font-semibold bg-linear-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            Create New Prompt
          </h2>
          <button
            onClick={onClose}
            className={`text-2xl font-bold ${
              theme === "dark"
                ? "text-gray-400 hover:text-white"
                : "text-gray-600 hover:text-black"
            }`}
          >
            ×
          </button>
        </div>

        <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
        
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              placeholder="Enter prompt title..."
              className={`w-full px-3 py-2 rounded-md outline-none text-sm ${
                theme === "dark"
                  ? "bg-gray-800 border border-gray-700 placeholder-gray-400 text-white"
                  : "bg-gray-100 border border-gray-300 placeholder-gray-500 text-gray-900"
              }`}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              placeholder="Enter prompt description..."
              rows="2"
              className={`w-full px-3 py-2 rounded-md outline-none text-sm resize-none ${
                theme === "dark"
                  ? "bg-gray-800 border border-gray-700 placeholder-gray-400 text-white"
                  : "bg-gray-100 border border-gray-300 placeholder-gray-500 text-gray-900"
              }`}
            />
          </div>


          <div>
            <label className="block text-sm font-medium mb-1">Query</label>
            <textarea
              placeholder="Enter prompt query with parameters like {parameterName}..."
              rows="3"
              className={`w-full px-3 py-2 rounded-md outline-none text-sm resize-none ${
                theme === "dark"
                  ? "bg-gray-800 border border-gray-700 placeholder-gray-400 text-white"
                  : "bg-gray-100 border border-gray-300 placeholder-gray-500 text-gray-900"
              }`}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Type</label>
            <select
              className={`w-full px-3 py-2 rounded-md text-sm outline-none ${
                theme === "dark"
                  ? "bg-gray-800 border border-gray-700 text-white"
                  : "bg-gray-100 border border-gray-300 text-gray-900"
              }`}
            >
              <option>Single Stage</option>
              <option>Multi Stage</option>
            </select>
          </div>


          <div>
            <label className="block text-sm font-medium mb-1">Company</label>
            <select
              className={`w-full px-3 py-2 rounded-md text-sm outline-none ${
                theme === "dark"
                  ? "bg-gray-800 border border-gray-700 text-white"
                  : "bg-gray-100 border border-gray-300 text-gray-900"
              }`}
            >
              <option>All Companies</option>
              <option>AI Navigator</option>
              <option>Prompt Corp</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end gap-3 px-6 py-4 border-t border-gray-600/40">
          <button
            onClick={onClose}
            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
              theme === "dark"
                ? "bg-gray-800 hover:bg-gray-700 text-gray-200"
                : "bg-gray-200 hover:bg-gray-300 text-gray-800"
            }`}
          >
            Cancel
          </button>
          <button className="px-4 py-2 rounded-md text-sm font-medium bg-indigo-600 hover:bg-indigo-700 text-white transition">
            Create Prompt
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePromptModal;
