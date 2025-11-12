import React, { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";

const BuyerIntelligenceAdmin = () => {
  const [activeTab, setActiveTab] = useState("VOC");
  const { theme } = useTheme();

  
  const data = [
    { title: "Example title", note: "Note" },
    { title: "Example title", note: "Note" },
    { title: "Example title", note: "Note" },
    { title: "Example title", note: "Note" },
    { title: "Example title", note: "Note" },
    { title: "Example title", note: "Note" },
    { title: "Example title", note: "Note" },
  ];

  return (
    <>
      <div
        className={`h-full p-6 transition-all duration-500 ${
          theme === "dark"
            ? "bg-gray-900 text-white"
            : "bg-gray-50 text-gray-800"
        }`}
      >
        
        <h2 className="text-lg font-semibold mb-3">Perception 1 - Title</h2>


        <div
          className={`border rounded-md p-3 mb-8 transition-all duration-300 ${
            theme === "dark"
              ? "border-gray-700 bg-gray-800"
              : "border-gray-200 bg-white shadow-sm"
          }`}
        >
          
          <div
            className={`flex items-center gap-2 mb-3 pb-2 border-b text-sm ${
              theme === "dark"
                ? "border-gray-700 text-gray-300"
                : "border-gray-200 text-gray-700"
            }`}
          >
            <select
              className={`rounded px-2 py-1 outline-none text-sm ${
                theme === "dark"
                  ? "bg-gray-700 text-gray-200 border border-gray-600"
                  : "bg-white text-gray-800 border border-gray-300"
              }`}
            >
              <option>Paragraph</option>
            </select>
            <button className="font-bold">B</button>
            <button className="italic">I</button>
            <button className="underline">U</button>
            <button className="line-through">S</button>
            <button>🖌</button>
            <button>🔗</button>
            <button>•</button>
            <button>1.</button>
          </div>
          
          <textarea
            rows="6"
            placeholder="Write your notes here..."
            className={`w-full bg-transparent focus:outline-none text-sm transition-all duration-300 ${
              theme === "dark" ? "text-gray-200" : "text-gray-800"
            }`}
          ></textarea>
        </div>
        
        <h3 className="text-lg font-semibold mb-3">Documentation</h3>


        <div
          className={`flex mb-4 flex-wrap w-fit rounded-lg p-1 ${
            theme === "dark" ? "bg-[#1e2939]" : "bg-[#eff1f2]"
          }`}
        >
          {["VOC", "VOB", "VOM"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-[#373ca3] text-white"
                  : theme === "dark"
                  ? "text-gray-400 border border-gray-600"
                  : "text-gray-500 border border-gray-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <div
          className={`border rounded-md overflow-hidden transition-all duration-300 ${
            theme === "dark"
              ? "border-gray-700 bg-transparent"
              : "border-gray-200 bg-white shadow-sm"
          }`}
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[400px] text-left text-sm table-fixed">
              <thead
                className={`sticky top-0 transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-gray-800 border-b border-gray-700 text-gray-300"
                    : "bg-gray-100 border-b border-gray-200 text-gray-600"
                }`}
              >
                <tr>
                  <th className="py-3 px-4 w-[30%]">Title</th>
                  <th className="py-3 px-4 w-[70%]">Note</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={index}
                    className={`transition-colors ${
                      theme === "dark"
                        ? "border-b border-gray-700 hover:bg-gray-700/40"
                        : "border-b border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    <td className="py-2 px-4 align-top">{item.title}</td>
                    <td className="py-2 px-4">
                      <input
                        type="text"
                        placeholder="Notes"
                        className={`w-full px-3 py-2 rounded-md text-sm outline-none transition-all duration-300 ${
                          theme === "dark"
                            ? "bg-gray-800 border border-gray-700 text-gray-200 placeholder-gray-100"
                            : "bg-white border border-gray-300 text-gray-700 placeholder-gray-400"
                        }`}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="flex justify-end gap-3 mt-6">
          <button
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              theme === "dark"
                ? "bg-gray-700 hover:bg-gray-600 text-gray-200"
                : "bg-gray-200 hover:bg-gray-300 text-gray-800"
            }`}
          >
            Cancel
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              theme === "dark"
                ? "bg-[#373ca3] hover:bg-indigo-500 text-white"
                : "bg-[#373ca3] hover:bg-indigo-700 text-white"
            }`}
          >
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
};

export default BuyerIntelligenceAdmin;
