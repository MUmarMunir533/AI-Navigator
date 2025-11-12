import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { LuMoon, LuSun } from "react-icons/lu";
import { BsLayoutSidebar } from "react-icons/bs";
import { useTheme } from "../../contexts/ThemeContext";

const Navbar = ({ isSidebarOpen, toggleSidebar }) => {
  const { theme, toggleTheme } = useTheme();
  const [showTooltip, setShowTooltip] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showBuyerPopup, setShowBuyerPopup] = useState(false);
  const [showBuyerAdminPopup, setShowBuyerAdminPopup] = useState(false);

  const tooltipRef = useRef();
  const menuRef = useRef();
  const buyerPopupRef = useRef();
  const buyerAdminPopupRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Private GPT", path: "/" },
    { name: "VOC", path: "/voc" },
    { name: "VOB", path: "/vob" },
    { name: "VOM", path: "/vom" },
    { name: "Buyer Intelligence", path: "/buyer-intelligence" },
    { name: "Buyer Intelligence Admin", path: "/buyer-intelligence-admin" },
    { name: "User Management", path: "/user-management" },
    { name: "Prompt Library", path: "/prompt-library" },
  ];

  const selectedItem =
    navItems.find((item) => item.path === location.pathname)?.name ||
    "Private GPT";

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(e.target) &&
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setShowTooltip(false);
        setShowMenu(false);
      }
      if (buyerPopupRef.current && !buyerPopupRef.current.contains(e.target)) {
        setShowBuyerPopup(false);
      }
      if (
        buyerAdminPopupRef.current &&
        !buyerAdminPopupRef.current.contains(e.target)
      ) {
        setShowBuyerAdminPopup(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (item) => {
    const isSmallScreen = window.innerWidth < 1024;
    if (isSmallScreen) {
      navigate(item.path);
      setShowBuyerPopup(false);
      setShowBuyerAdminPopup(false);
    } else {
      if (item.name === "Buyer Intelligence") {
        setShowBuyerPopup(!showBuyerPopup);
        setShowBuyerAdminPopup(false);
      } else if (item.name === "Buyer Intelligence Admin") {
        setShowBuyerAdminPopup(!showBuyerAdminPopup);
        setShowBuyerPopup(false);
      } else {
        navigate(item.path);
        setShowBuyerPopup(false);
        setShowBuyerAdminPopup(false);
      }
    }
  };

  const [buyerSections, setBuyerSections] = useState({
    Challenges: false,
    Objections: false,
    Perceptions: true,
    "Sales Insights": false,
    Validations: false,
    Verticals: false,
  });

  const [buyerAdminSections, setBuyerAdminSections] = useState({
    Challenges: false,
    Objections: false,
    Perceptions: true,
    "Sales Insights": false,
    Validations: false,
    Verticals: false,
  });

  const toggleSection = (setState, key) => {
    setState((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <nav
      className={`w-full py-1 px-2 sm:px-3 md:px-2 flex items-center justify-between transition-all duration-300 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-[#eff1f2] text-black"
      }`}
    >
      <div className="flex items-center gap-2 sm:gap-4">
        <div
          className={`flex md:flex lg:hidden items-center gap-2 rounded-lg shadow-lg pl-1.5 pt-2 pb-2 pr-1 transition-all duration-300 ${
            theme === "dark"
              ? "bg-[#101828] text-white hover:bg-gray-700"
              : "bg-white text-black hover:bg-gray-50"
          }`}
        >
          <button
            onClick={toggleSidebar}
            className={`p-1 rounded-md transition-all ${
              theme === "dark"
                ? "hover:bg-gray-700 text-white"
                : "hover:bg-gray-200 text-black"
            }`}
          >
            <BsLayoutSidebar size={18} />
          </button>

          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-md border transition-all ${
                theme === "dark"
                  ? "bg-gray-700 text-white border-gray-600 hover:bg-gray-600"
                  : "bg-[#eff1f2] text-black border-gray-300 hover:bg-gray-50"
              }`}
            >
              <span className="text-[12px]">{selectedItem}</span>
              <IoIosArrowDown size={12} />
            </button>

            {showMenu && (
              <div
                ref={menuRef}
                className={`absolute top-full left-0 mt-1 w-44 rounded-md shadow-lg p-2 z-50 border border-gray-300/30 transition-all duration-200 ease-out ${
                  theme === "dark"
                    ? "bg-gray-700 text-white"
                    : "bg-white text-black"
                }`}
              >
                <ul className="flex flex-col gap-1 text-[12px]">
                  {navItems.map((item) => (
                    <li
                      key={item.name}
                      onClick={() => {
                        navigate(item.path);
                        setShowMenu(false);
                      }}
                      className={`px-3 py-2 rounded-md cursor-pointer transition-all ${
                        selectedItem === item.name
                          ? "bg-[#373ca3] text-white"
                          : theme === "dark"
                          ? "hover:bg-gray-600"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <ul
          className={`hidden lg:flex items-center gap-5 px-3 py-1 rounded-md transition-all duration-300
          lg:ml-10 lg:mr-8 
          ${
            theme === "dark"
              ? "bg-gray-700 text-gray-200"
              : "bg-white text-black"
          } ${isSidebarOpen ? "text-[12px]" : "text-[11px]"}`}
        >
          {navItems.map((item) => (
            <li
              key={item.name}
              onClick={() => handleNavClick(item)}
              className={`relative cursor-pointer whitespace-nowrap text-[11px] sm:text-[14px]
              ${
                location.pathname === item.path
                  ? "bg-[#373ca3] text-white rounded-md px-3 py-1"
                  : ""
              }
              ${
                ["User Management", "Prompt Library"].includes(item.name)
                  ? "hidden md:block"
                  : ""
              }`}
            >
              {item.name}

              {item.name === "Buyer Intelligence" && showBuyerPopup && (
                <BuyerPopup
                  refEl={buyerPopupRef}
                  title="Buyer Intelligence"
                  sections={buyerSections}
                  theme={theme}
                  onClose={() => setShowBuyerPopup(false)}
                  toggle={(key) => toggleSection(setBuyerSections, key)}
                  navigate={navigate}
                />
              )}

              {item.name === "Buyer Intelligence Admin" &&
                showBuyerAdminPopup && (
                  <BuyerPopup
                    refEl={buyerAdminPopupRef}
                    title="Buyer Intelligence Admin"
                    sections={buyerAdminSections}
                    theme={theme}
                    onClose={() => setShowBuyerAdminPopup(false)}
                    toggle={(key) => toggleSection(setBuyerAdminSections, key)}
                    navigate={navigate}
                  />
                )}
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`flex items-center gap-2 sm:gap-3 md:gap-3 transition-all duration-300 ${
          isSidebarOpen ? "pr-0" : "pr-0"
        }`}
      >
        <p
          className={`text-[9px] sm:text-[10px] md:text-[11px] font-light whitespace-nowrap ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          Bessie Cooper
        </p>

        <img
          src="https://images.unsplash.com/photo-1617724748068-691efeeaf542?auto=format&fit=crop&q=60&w=600"
          alt="user"
          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg object-cover border border-gray-300"
        />

        <IoIosArrowDown size={12} />

        <div className="relative" ref={tooltipRef}>
          <button
            onClick={() => setShowTooltip(!showTooltip)}
            className={`flex items-center justify-center p-1 rounded-md transition-all 
            ${theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`}
            aria-label="theme-toggle"
          >
            {theme === "dark" ? <LuSun size={16} /> : <LuMoon size={16} />}
          </button>

          {showTooltip && (
            <div
              className={`absolute top-full right-0 mt-1 w-24 rounded-md shadow-md z-50 border border-gray-300/30 transition-all duration-200 ease-out
              ${
                theme === "dark"
                  ? "bg-gray-700 text-white"
                  : "bg-white text-black"
              }`}
            >
              <div className="flex flex-col p-1">
                <button
                  onClick={() => {
                    toggleTheme("light");
                    setShowTooltip(false);
                  }}
                  className="px-2 py-1 text-xs rounded-md hover:bg-gray-500/20"
                >
                  Light
                </button>
                <button
                  onClick={() => {
                    toggleTheme("dark");
                    setShowTooltip(false);
                  }}
                  className="px-2 py-1 text-xs rounded-md hover:bg-gray-500/20"
                >
                  Dark
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

const BuyerPopup = ({
  refEl,
  title,
  sections,
  theme,
  onClose,
  toggle,
  navigate,
}) => {
  const handleMainClick = () => {
    if (title === "Buyer Intelligence") {
      navigate("/buyer-intelligence");
    } else if (title === "Buyer Intelligence Admin") {
      navigate("/buyer-intelligence-admin");
    }
  };

  return (
    <div
      ref={refEl}
      className={`absolute top-full left-0 mt-2 w-50 h-auto overflow-y-auto rounded-lg border z-50 p-4 transition-all duration-300
        ${
          theme === "dark"
            ? "bg-[#1e2939] text-[#d6d6ff] border-gray-700"
            : "bg-[#eff1f2] text-black border-gray-300"
        }`}
    >
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-semibold text-[15px]">{title}</h2>
        <button
          onClick={onClose}
          className="p-1 hover:bg-gray-700/30 rounded-md"
        >
          <IoClose size={16} />
        </button>
      </div>
      
      <p
        onClick={handleMainClick}
        className={`text-sm font-medium mb-3 cursor-pointer hover:text-[#373ca3]`}
      >
        Main
      </p>

      <div className="flex flex-col text-sm space-y-2">
        {Object.keys(sections).map((section) => (
          <div key={section} className="pb-1">
            <button
              onClick={() => toggle(section)}
              className="w-full flex items-center justify-between text-left text-[#373ca3] font-medium text-[15px] p-2 hover:text-white hover:bg-gray-700/30 transition-all"
            >
              <span>{section}</span>
              <IoIosArrowDown
                size={14}
                className={`transition-transform duration-200 ${
                  sections[section] ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`transition-all duration-300 overflow-hidden ${
                sections[section] ? "max-h-40 mt-1" : "max-h-0"
              }`}
            >
              {section === "Perceptions" ? (
                <ul
                  className={`ml-3 flex flex-col gap-1 text-xs ${
                    theme === "dark" ? "text-[#d6d6ff]" : "text-black"
                  }`}
                >
                  {[
                    "Perception 1",
                    "Perception 2",
                    "Perception 3",
                    "Perception 4",
                    "Perception 5",
                  ].map((p) => (
                    <li
                      key={p}
                      className="hover:text-indigo-400 cursor-pointer"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="ml-3 text-xs text-gray-400 mt-1 italic">
                  {section} content here...
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
