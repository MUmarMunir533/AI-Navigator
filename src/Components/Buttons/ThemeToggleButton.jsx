import React, { useState, useRef, useEffect } from "react";
import { FiMoon } from "react-icons/fi";

const ThemeTogglePopup = () => {
  const [theme, setTheme] = useState("light");
  const [open, setOpen] = useState(false);
  const popupRef = useRef();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      applyTheme(theme);
    }
  }, []);

  const applyTheme = (mode) => {
    if (mode === "light") {
      document.body.classList.remove("bg-dark");
      document.body.classList.add("bg-white");
    } else {
      document.body.classList.remove("bg-white");
      document.body.classList.add("bg-dark");
    }
  };

  const toggleTheme = (mode) => {
    setTheme(mode);
    localStorage.setItem("theme", mode);
    applyTheme(mode);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed bottom-10 right-5 z-50" ref={popupRef}>
      <button
        onClick={() => setOpen(!open)}
        className="p-2 border border-gray-400 rounded-md bg-gray-700 text-white hover:bg-gray-600 transition-colors"
      >
        <FiMoon size={16} />
      </button>

      {open && (
        <div className="mb-2 w-28 bg-gray-900 text-white shadow-lg rounded-lg p-2 flex flex-col gap-2 absolute bottom-full right-0 animate-slide-up">
          <button
            onClick={() => toggleTheme("light")}
            className={`text-sm px-2 py-1 rounded transition-colors text-white hover:bg-gray-700 ${
              theme === "light" ? "bg-gray-600" : ""
            }`}
          >
            White
          </button>
          <button
            onClick={() => toggleTheme("dark")}
            className={`text-sm px-2 py-1 rounded transition-colors text-white hover:bg-gray-700 ${
              theme === "dark" ? "bg-gray-600" : ""
            }`}
          >
            Dark
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeTogglePopup;
