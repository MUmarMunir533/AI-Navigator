import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useTheme } from "../../contexts/ThemeContext";

const itemsDefault = {
  uncategorized: false,
  battlecards: false,
};

export default function VobSidebar() {
  const [categoriesOpen, setCategoriesOpen] = useState(true);
  const [docCatsOpen, setDocCatsOpen] = useState(true);
  const [categories, setCategories] = useState(itemsDefault);
  const { theme } = useTheme();

  const toggle = (key) => setCategories((s) => ({ ...s, [key]: !s[key] }));

  const Checkbox = ({ checked }) => (
    <div
      className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-all ${
        checked
          ? "bg-indigo-600 border-transparent"
          : "bg-transparent border border-gray-600/40"
      }`}
      aria-hidden
    >
      {checked && (
        <svg
          width="12"
          height="10"
          viewBox="0 0 12 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5 1L4.5 8L1 4.5"
            stroke="white"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );

  const Collapse = ({ isOpen, children }) => (
    <div
      className="overflow-hidden transition-[max-height] duration-300"
      style={{
        maxHeight: isOpen ? "600px" : "0px",
      }}
    >
      {children}
    </div>
  );

  return (
    <div className="w-64 p-4 rounded-md">
      <h3
        className={`flex items-center gap-2 py-1.5 px-2 rounded-md transition-all duration-300 text-xs  mb-3 ${
          theme === "dark" ? "text-gray-300" : "text-gray-800"
        }`}
      >
        Filters
      </h3>
      <div className="mb-4">
        <button
          type="button"
          onClick={() => setCategoriesOpen((s) => !s)}
          className="w-full flex items-center justify-between mb-2 focus:outline-none"
        >
          <span className="text-[13px] font-medium">Categories</span>
          <IoIosArrowDown
            className={`transform transition-transform duration-200 ${
              categoriesOpen ? "rotate-0" : "-rotate-90"
            }`}
            size={16}
          />
        </button>

        <Collapse isOpen={categoriesOpen}>
          <div className="pl-2 border-l border-gray-700/40">
            {Object.keys(categories)
              .slice(0, 1)
              .map((key) => (
                <label
                  key={key}
                  className="flex items-center gap-3 py-2 cursor-pointer select-none"
                >
                  <input
                    type="checkbox"
                    checked={categories[key]}
                    onChange={() => toggle(key)}
                    className="sr-only"
                    aria-label={key}
                  />
                  <Checkbox checked={categories[key]} />
                  <span className="text-[13px] capitalize">
                    {key.replace("-", " ")}
                  </span>
                </label>
              ))}
          </div>
        </Collapse>
      </div>
      <div>
        <button
          type="button"
          onClick={() => setDocCatsOpen((s) => !s)}
          className="w-full flex items-center justify-between mb-2 focus:outline-none"
        >
          <span className="text-[13px] font-medium">Document Categories</span>
          <IoIosArrowDown
            className={`transform transition-transform duration-200 ${
              docCatsOpen ? "rotate-0" : "-rotate-90"
            }`}
            size={16}
          />
        </button>

        <Collapse isOpen={docCatsOpen}>
          <div className="pl-2 border-l border-gray-700/40">
            {["battlecards"].map((k) => (
              <label
                key={k}
                className="flex items-center gap-3 py-2 cursor-pointer select-none"
              >
                <input
                  type="checkbox"
                  checked={!!categories[k]}
                  onChange={() => toggle(k)}
                  className="sr-only"
                  aria-label={k}
                />
                <Checkbox checked={!!categories[k]} />
                <span className="text-[13px] lowercase">{k}</span>
              </label>
            ))}
          </div>
        </Collapse>
      </div>
    </div>
  );
}
