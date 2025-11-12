import React, { useEffect, useRef, useState } from "react";
import { FiX, FiCalendar } from "react-icons/fi";

const AddRecordModal = ({ theme, onClose }) => {
  const modalRef = useRef();
  const totalSteps = 5;
  const [currentStep, setCurrentStep] = useState(1);

  const initialGuest = {
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
  };

  const [guests, setGuests] = useState([initialGuest]);
  const [step2, setStep2] = useState({ field1: "", field2: "", field3: "" });
  const [step3, setStep3] = useState({
    episodeNumber: "",
    episodeTitle: "",
    dateRecorded: "",
    category: "",
    shortDesc: "",
    longDesc: "",
    seoKeywords: "",
    assetFolder: "",
  });

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const inputStyle = `w-full mt-1 px-3 py-2 rounded-md outline-none text-sm transition-colors duration-300 ${
    theme === "dark"
      ? "bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:border-indigo-500"
      : "bg-gray-100 text-gray-900 placeholder-gray-500 border border-gray-300 focus:border-indigo-600"
  }`;

  const handleStep2Change = (f, v) => setStep2((p) => ({ ...p, [f]: v }));
  const handleStep3Change = (f, v) => setStep3((p) => ({ ...p, [f]: v }));

  const addGuest = () => setGuests((p) => [...p, initialGuest]);
  const removeGuest = (i) => setGuests((p) => p.filter((_, x) => x !== i));

  const nextStep = () => setCurrentStep((p) => (p < totalSteps ? p + 1 : p));
  const prevStep = () => setCurrentStep((p) => (p > 1 ? p - 1 : p));

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-center items-center transition-colors duration-300 ${
        theme === "dark" ? "bg-black/60" : "bg-gray-200/70"
      }`}
    >
      <div
        ref={modalRef}
        className={`w-[95%] sm:w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] max-h-[85vh] rounded-xl overflow-hidden flex flex-col ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        
        <div className="flex justify-between items-center px-6 py-4">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-[#AA60FE] via-[#BE85FF] to-[#3040e9]">
            Create Record •
          </h2>
          <button onClick={onClose}>
            <FiX className="text-xl hover:text-red-500 transition" />
          </button>
        </div>
        
        <div className="flex justify-center py-3 pb-4 border-b border-gray-700/30">
          {[1, 2, 3, 4, 5].map((n) => (
            <div
              key={n}
              className={`w-6 h-6 flex items-center justify-center rounded-full mx-1 text-sm ${
                n === currentStep
                  ? "bg-linear-to-r from-[#AA60FE] via-[#BE85FF] to-[#3040e9] text-white"
                  : theme === "dark"
                  ? "bg-gray-700 text-gray-300"
                  : "bg-gray-300 text-gray-600"
              }`}
            >
              {n}
            </div>
          ))}
        </div>
        
        <div className="px-6 py-4 overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">

          {(currentStep === 1 || currentStep === 4 || currentStep === 5) &&
            guests.map((guest, index) => (
              <div key={index} className="relative mb-8 rounded-lg p-2">
                <h3 className="text-lg font-semibold mb-2">
                  Guest {index + 1}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {Object.keys(initialGuest)
                    .filter((k) => k !== "openDropdown")
                    .map((field) => (
                      <div key={field}>
                        <label className="text-sm opacity-80 capitalize">
                          {field.replace(/([A-Z])/g, " $1")}
                        </label>
                        <input
                          type="text"
                          value={guest[field]}
                          placeholder={`Enter ${field
                            .replace(/([A-Z])/g, " $1")
                            .toLowerCase()}`}
                          onChange={(e) => {
                            const newGuests = [...guests];
                            newGuests[index][field] = e.target.value;
                            setGuests(newGuests);
                          }}
                          className={inputStyle}
                        />
                      </div>
                    ))}
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
            
          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="text-sm opacity-80">Field 1</label>
                  <input
                    type="text"
                    value={step2.field1}
                    onChange={(e) =>
                      handleStep2Change("field1", e.target.value)
                    }
                    placeholder="Enter first field"
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label className="text-sm opacity-80">Field 2</label>
                  <input
                    type="text"
                    value={step2.field2}
                    onChange={(e) =>
                      handleStep2Change("field2", e.target.value)
                    }
                    placeholder="Enter second field"
                    className={inputStyle}
                  />
                </div>
              </div>
              <div>
                <label className="text-sm opacity-80">Field 3</label>
                <input
                  type="text"
                  value={step2.field3}
                  onChange={(e) => handleStep2Change("field3", e.target.value)}
                  placeholder="Enter third field"
                  className={inputStyle}
                />
              </div>
            </div>
          )}
          
          {currentStep === 3 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold mb-3">Full Episode</h3>


              <div className="gap-2 mb-4 pb-4 border-b border-gray-700/30">
                {[
                  "Details",
                  "Video",
                  "Video Highlights",
                  "Q&A Videos",
                  "Introduction Videos",
                  "Article & QuoteCard",
                  "PodBook",
                ].map((label, idx) => (
                  <button
                    key={idx}
                    className="px-3 py-1 text-xs text-gray-400 border border-gray-700/50 rounded bg-transparent"
                  >
                    {label}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm opacity-80">Episode Number</label>
                  <input
                    type="text"
                    placeholder="e.g. 12"
                    value={step3.episodeNumber}
                    onChange={(e) =>
                      handleStep3Change("episodeNumber", e.target.value)
                    }
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label className="text-sm opacity-80">Episode Title</label>
                  <input
                    type="text"
                    placeholder="Enter episode title"
                    value={step3.episodeTitle}
                    onChange={(e) =>
                      handleStep3Change("episodeTitle", e.target.value)
                    }
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label className="text-sm opacity-80">Date Recorded</label>
                  <div className="relative">
                    <input
                      type="date"
                      value={step3.dateRecorded}
                      onChange={(e) =>
                        handleStep3Change("dateRecorded", e.target.value)
                      }
                      className={`${inputStyle} pr-10`}
                    />
                    <FiCalendar className="absolute right-3 top-3 opacity-70" />
                  </div>
                </div>
                <div>
                  <label className="text-sm opacity-80">Category</label>
                  <input
                    type="text"
                    placeholder="Enter category"
                    value={step3.category}
                    onChange={(e) =>
                      handleStep3Change("category", e.target.value)
                    }
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label className="text-sm opacity-80">
                    Short Episode Description
                  </label>
                  <input
                    type="text"
                    placeholder="Enter short description"
                    value={step3.shortDesc}
                    onChange={(e) =>
                      handleStep3Change("shortDesc", e.target.value)
                    }
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label className="text-sm opacity-80">
                    Long Episode Description
                  </label>
                  <input
                    type="text"
                    placeholder="Enter long description"
                    value={step3.longDesc}
                    onChange={(e) =>
                      handleStep3Change("longDesc", e.target.value)
                    }
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label className="text-sm opacity-80">
                    SEO Keywords (Short & Long-Tail)
                  </label>
                  <input
                    type="text"
                    placeholder="Enter SEO keywords"
                    value={step3.seoKeywords}
                    onChange={(e) =>
                      handleStep3Change("seoKeywords", e.target.value)
                    }
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label className="text-sm opacity-80">All-Asset Folder</label>
                  <input
                    type="text"
                    placeholder="Enter folder path or URL"
                    value={step3.assetFolder}
                    onChange={(e) =>
                      handleStep3Change("assetFolder", e.target.value)
                    }
                    className={inputStyle}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div
          className={`flex justify-end gap-3 px-6 py-5 border-t ${
            theme === "dark" ? "border-gray-700" : "border-gray-300"
          }`}
        >
          {currentStep === 1 ? (
            <button
              onClick={addGuest}
              className={`px-4 py-1.5 rounded-md text-sm ${
                theme === "dark"
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              Add Another Guest
            </button>
          ) : (
            <button
              onClick={prevStep}
              className={`px-4 py-1.5 rounded-md text-sm ${
                theme === "dark"
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              Previous Step
            </button>
          )}

          <button
            className={`px-4 py-1.5 rounded-md text-sm ${
              theme === "dark"
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Save
          </button>

          {currentStep < totalSteps && (
            <button
              onClick={nextStep}
              className="bg-indigo-600 hover:bg-indigo-700 px-4 py-1.5 rounded-md text-sm text-white"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddRecordModal;
