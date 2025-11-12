import React, { useEffect, useRef, useState } from "react";
import { FiX, FiChevronDown } from "react-icons/fi";

const AddRecordModal = ({ theme, onClose }) => {
  const modalRef = useRef();

  const [guests, setGuests] = useState([
    {
      guestType: "",
      industryVertical: "",
      guestIndustry: "",
      guestTitle: "",
      guestName: "",
      linkedIn: "",
      company: "",
      tracker: "",
      dossier: "",
      openDropdown: null,
    },
  ]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const guestTypeOptions = [
    "Employee",
    "Customer",
    "Partner",
    "Vendor",
    "Manager",
    "Freelancer",
    "Other",
  ];
  const industryVerticalOptions = ["Client", "Business", "Blueberry"];
  const guestIndustryOptions = [
    "IT",
    "Marketing",
    "Finance",
    "Retail",
    "Education",
    "Health",
    "Media",
  ];

  const toggleDropdown = (index, field) => {
    setGuests((prev) =>
      prev.map((guest, i) =>
        i === index
          ? {
              ...guest,
              openDropdown: guest.openDropdown === field ? null : field,
            }
          : guest
      )
    );
  };

  const handleSelect = (index, field, value) => {
    setGuests((prev) =>
      prev.map((guest, i) =>
        i === index ? { ...guest, [field]: value, openDropdown: null } : guest
      )
    );
  };

  const handleChange = (index, field, value) => {
    setGuests((prev) =>
      prev.map((guest, i) =>
        i === index ? { ...guest, [field]: value } : guest
      )
    );
  };

  const addGuest = () => {
    setGuests((prev) => [
      ...prev,
      {
        guestType: "",
        industryVertical: "",
        guestIndustry: "",
        guestTitle: "",
        guestName: "",
        linkedIn: "",
        company: "",
        tracker: "",
        dossier: "",
        openDropdown: null,
      },
    ]);
  };

  const removeGuest = (index) => {
    setGuests((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-center items-center transition-colors duration-300 ${
        theme === "dark" ? "bg-black/60" : "bg-gray-200/70"
      }`}
    >
      <div
        ref={modalRef}
        className={`w-[95%] sm:w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] max-h-[75vh] rounded-xl overflow-hidden flex flex-col transition-all duration-300 ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        
        <div className="flex justify-between items-center px-6 py-4">
          <h2
            className={`text-2xl font-bold bg-clip-text text-transparent ${
              theme === "dark"
                ? "bg-linear-to-bl from-[#AA60FE] via-[#BE85FF] to-[#3040e9]"
                : "bg-linear-to-bl from-[#AA60FE] via-[#BE85FF] to-[#5D6AFF]"
            }`}
          >
            Create Record •
          </h2>
          <button onClick={onClose}>
            <FiX className="text-xl hover:text-red-500 transition" />
          </button>
        </div>

        <span className="flex justify-between items-center px-6 py-2">
          Guest
        </span>
        
        <div
          className={`flex justify-center py-3 pb-4 border-b ${
            theme === "dark" ? "border-gray-700" : "border-gray-300"
          }`}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <div
              key={num}
              className={`w-5 h-5 flex items-center text-[15px] justify-center rounded-full mx-1 ${
                num === 1
                  ? "bg-linear-to-bl from-[#AA60FE] via-[#BE85FF] to-[#1526dc] text-white"
                  : theme === "dark"
                  ? "bg-gray-700 text-gray-300"
                  : "bg-gray-300 text-gray-600"
              }`}
            >
              {num}
            </div>
          ))}
        </div>
        
        <div className="px-6 py-4 overflow-y-auto flex-1 relative scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
          {guests.map((guest, index) => (
            <div key={index} className="relative mb-8 rounded-lg p-2">
              <h3 className="text-lg font-semibold mb-2">Guest {index + 1}</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="relative">
                  <label className="text-sm opacity-80">Guest Type</label>
                  <div
                    onClick={() => toggleDropdown(index, "guestType")}
                    className={`flex justify-between items-center w-full mt-1 px-3 py-1.5 rounded-md cursor-pointer ${
                      theme === "dark"
                        ? "bg-gray-800 text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <span>{guest.guestType || "Select guest type"}</span>
                    <FiChevronDown />
                  </div>
                  {guest.openDropdown === "guestType" && (
                    <div
                      className={`absolute z-20 mt-1 w-full rounded-md shadow-lg max-h-36 overflow-y-auto ${
                        theme === "dark"
                          ? "bg-gray-800 text-white"
                          : "bg-white text-gray-900 border"
                      }`}
                    >
                      {guestTypeOptions.map((option, i) => (
                        <div
                          key={i}
                          onClick={() =>
                            handleSelect(index, "guestType", option)
                          }
                          className="px-3 py-1.5 hover:bg-indigo-500 hover:text-white cursor-pointer text-sm"
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <div>
                  <label className="text-sm opacity-80">Guest Title</label>
                  <input
                    type="text"
                    value={guest.guestTitle}
                    onChange={(e) =>
                      handleChange(index, "guestTitle", e.target.value)
                    }
                    placeholder="Enter guest title"
                    className={`w-full mt-1 px-3 py-1.5 rounded-md outline-none text-sm ${
                      theme === "dark"
                        ? "bg-gray-800 text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
                  />
                </div>


                <div>
                  <label className="text-sm opacity-80">Guest Name</label>
                  <input
                    type="text"
                    value={guest.guestName}
                    onChange={(e) =>
                      handleChange(index, "guestName", e.target.value)
                    }
                    placeholder="Enter guest name"
                    className={`w-full mt-1 px-3 py-1.5 rounded-md outline-none text-sm ${
                      theme === "dark"
                        ? "bg-gray-800 text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
                  />
                </div>
                
                <div>
                  <label className="text-sm opacity-80">
                    Guest LinkedIn Profile
                  </label>
                  <input
                    type="text"
                    value={guest.linkedIn}
                    onChange={(e) =>
                      handleChange(index, "linkedIn", e.target.value)
                    }
                    placeholder="Enter guest LinkedIn"
                    className={`w-full mt-1 px-3 py-1.5 rounded-md outline-none text-sm ${
                      theme === "dark"
                        ? "bg-gray-800 text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
                  />
                </div>
                
                <div>
                  <label className="text-sm opacity-80">Guest Company</label>
                  <input
                    type="text"
                    value={guest.company}
                    onChange={(e) =>
                      handleChange(index, "company", e.target.value)
                    }
                    placeholder="Enter guest company"
                    className={`w-full mt-1 px-3 py-1.5 rounded-md outline-none text-sm ${
                      theme === "dark"
                        ? "bg-gray-800 text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
                  />
                </div>
                
                <div className="relative">
                  <label className="text-sm opacity-80">
                    Industry Vertical
                  </label>
                  <div
                    onClick={() => toggleDropdown(index, "industryVertical")}
                    className={`flex justify-between items-center w-full mt-1 px-3 py-1.5 rounded-md cursor-pointer ${
                      theme === "dark"
                        ? "bg-gray-800 text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <span>{guest.industryVertical || "Select vertical"}</span>
                    <FiChevronDown />
                  </div>
                  {guest.openDropdown === "industryVertical" && (
                    <div
                      className={`absolute z-20 mt-1 w-full rounded-md shadow-lg ${
                        theme === "dark"
                          ? "bg-gray-800 text-white"
                          : "bg-white text-gray-900 border"
                      }`}
                    >
                      {industryVerticalOptions.map((option, i) => (
                        <div
                          key={i}
                          onClick={() =>
                            handleSelect(index, "industryVertical", option)
                          }
                          className="px-3 py-1.5 hover:bg-indigo-500 hover:text-white cursor-pointer text-sm"
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="relative">
                  <label className="text-sm opacity-80">Guest Industry</label>
                  <div
                    onClick={() => toggleDropdown(index, "guestIndustry")}
                    className={`flex justify-between items-center w-full mt-1 px-3 py-1.5 rounded-md cursor-pointer ${
                      theme === "dark"
                        ? "bg-gray-800 text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <span>{guest.guestIndustry || "Select industry"}</span>
                    <FiChevronDown />
                  </div>
                  {guest.openDropdown === "guestIndustry" && (
                    <div
                      className={`absolute z-20 mt-1 w-full rounded-md shadow-lg max-h-36 overflow-y-auto ${
                        theme === "dark"
                          ? "bg-gray-800 text-white"
                          : "bg-white text-gray-900 border"
                      }`}
                    >
                      {guestIndustryOptions.map((option, i) => (
                        <div
                          key={i}
                          onClick={() =>
                            handleSelect(index, "guestIndustry", option)
                          }
                          className="px-3 py-1.5 hover:bg-indigo-500 hover:text-white cursor-pointer text-sm"
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <div>
                  <label className="text-sm opacity-80">Guest Tracker</label>
                  <input
                    type="text"
                    value={guest.tracker}
                    onChange={(e) =>
                      handleChange(index, "tracker", e.target.value)
                    }
                    placeholder="Enter guest tracker"
                    className={`w-full mt-1 px-3 py-1.5 rounded-md outline-none text-sm ${
                      theme === "dark"
                        ? "bg-gray-800 text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
                  />
                </div>
                
                <div>
                  <label className="text-sm opacity-80">Guest Dossier</label>
                  <input
                    type="text"
                    value={guest.dossier}
                    onChange={(e) =>
                      handleChange(index, "dossier", e.target.value)
                    }
                    placeholder="Enter guest dossier"
                    className={`w-full mt-1 px-3 py-1.5 rounded-md outline-none text-sm ${
                      theme === "dark"
                        ? "bg-gray-800 text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
                  />
                </div>
              </div>

              {guests.length > 1 && (
                <div className="absolute right-4 bottom-3">
                  <button
                    onClick={() => removeGuest(index)}
                    className="bg-[#a24648] hover:bg-[#8a3b3c] text-white text-xs px-3 py-1 rounded-md shadow-md transition"
                  >
                    Remove Guest
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div
          className={`flex justify-end gap-3 px-6 py-5 border-t ${
            theme === "dark" ? "border-gray-700" : "border-gray-300"
          }`}
        >
          <button
            onClick={addGuest}
            className={`px-4 py-1.5 rounded-md text-sm ${
              theme === "dark"
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Add another Guest
          </button>
          <button
            className={`px-4 py-1.5 rounded-md text-sm ${
              theme === "dark"
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Save
          </button>
          <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-1.5 rounded-md text-sm text-white">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRecordModal;
