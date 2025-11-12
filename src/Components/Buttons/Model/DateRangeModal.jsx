import React, { useEffect, useRef } from "react";

const DateRangeModal = ({
  theme,
  onClose,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  const modalRef = useRef(null);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div
        ref={modalRef}
        className={`w-[320px] sm:w-[400px] p-5 rounded-lg shadow-lg ${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
      >
        <h2 className="text-lg font-semibold mb-4 text-center">
          Select Date Range
        </h2>

        <div className="flex flex-col gap-4">


          <div>
            <label className="block mb-1 text-sm font-medium">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className={`w-full px-3 py-2 rounded-md border ${
                theme === "dark"
                  ? "border-gray-600 bg-gray-700 text-white"
                  : "border-gray-300 bg-white text-black"
              }`}
            />
          </div>
          
          <div>
            <label className="block mb-1 text-sm font-medium">End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className={`w-full px-3 py-2 rounded-md border ${
                theme === "dark"
                  ? "border-gray-600 bg-gray-700 text-white"
                  : "border-gray-300 bg-white text-black"
              }`}
            />
          </div>
          
          <div className="flex justify-end gap-2 mt-3">
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded-md bg-gray-500 hover:bg-gray-600 text-white"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                console.log("Selected Range:", startDate, "to", endDate);
                onClose();
              }}
              className="px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateRangeModal;
