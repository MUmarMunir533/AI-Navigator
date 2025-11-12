import React, { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";

const tabs = ["VOC", "VOB", "VOM", "QUOTE"];

export default function BuyerIntelligence() {
  const [activeTab, setActiveTab] = useState("VOC");
  const { theme } = useTheme();

  // Different data for each tab
  const tabData = {
    VOC: [
      {
        id: 1,
        Email: "voc1@gmail.com",
        Title: "VOC Testing 1",
        System_Role: "AI Navigator",
      },
      {
        id: 2,
        Email: "voc2@gmail.com",
        Title: "VOC Testing 2",
        System_Role: "Data Analyst",
      },
    ],
    VOB: [
      {
        id: 1,
        Email: "vob1@gmail.com",
        Title: "VOB Testing 1",
        System_Role: "Manager",
      },
      {
        id: 2,
        Email: "vob2@gmail.com",
        Title: "VOB Testing 2",
        System_Role: "Assistant",
      },
      {
        id: 3,
        Email: "vob3@gmail.com",
        Title: "VOB Testing 3",
        System_Role: "Executive",
      },
    ],
    VOM: [
      {
        id: 1,
        Email: "vom1@gmail.com",
        Title: "VOM Testing 1",
        System_Role: "Operator",
      },
      {
        id: 2,
        Email: "vom2@gmail.com",
        Title: "VOM Testing 2",
        System_Role: "Supervisor",
      },
    ],
    QUOTE: [
      {
        id: 1,
        Email: "quote1@gmail.com",
        Title: "Quote Request 1",
        System_Role: "Client",
      },
      {
        id: 2,
        Email: "quote2@gmail.com",
        Title: "Quote Request 2",
        System_Role: "Customer",
      },
      {
        id: 3,
        Email: "quote3@gmail.com",
        Title: "Quote Request 3",
        System_Role: "Lead",
      },
    ],
  };

  const data = tabData[activeTab];

  return (
    <>
      <div
        className={`p-4 rounded-xl transition-colors duration-300 ${
          theme === "dark"
            ? "bg-gray-900 text-gray-100"
            : "bg-gray-50 text-gray-900"
        } h-full`}
      >
        
        <div
          className={`mb-8 p-6 rounded-xl shadow-xl ${
            theme === "dark" ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-3">
            Objection 1: Reliability Concern
          </h2>
          <p className="mb-4 text-sm sm:text-base">
            "Bigleaf's wireless-first approach won't be as reliable as my wired
            connection." Prospects question whether Bigleaf can deliver the
            reliability they need. The following asset package arms sales with
            both external proof (customer + market evidence) and internal tools
            (battle cards, training videos, sheets) so they can turn this
            objection into a clear opportunity.
          </p>

          <h1 className="text-xl sm:text-2xl font-bold mb-3">
            Why This Objection Matters
          </h1>
          <p className="mb-4 text-sm sm:text-base">
            Modern wireless now rivals wired reliability, but many still see
            “wireless-first” through an outdated lens. Bigleaf Cloud Connect
            changes that.
          </p>

          <h1 className="text-xl sm:text-2xl font-bold mb-3">
            Expanded Reasoning:
          </h1>
          <p className="mb-4 text-sm sm:text-base">
            For decades, “reliable” and “primary” were synonymous with “wired.”
            This mindset was shaped in an era when cables meant control and
            wireless meant risk. But that world has changed. Modern enterprise
            wireless, powered by 5G and LTE, now rivals or surpasses wired
            connections in uptime while delivering faster deployment, greater
            flexibility, and superior resiliency. Yet many IT leaders still
            picture “wireless-first” as consumer-grade hotspots rather than a
            managed, multi-carrier enterprise platform that dynamically adapts
            to network conditions.
          </p>

          <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base">
            <h1 className="text-xl sm:text-2xl font-bold mb-3">
              Expanded Reasoning:
            </h1>
            <li>Clarify: Wireless isn't backup, it's core.</li>
            <li>
              Reframe: Bigleaf unites wired + wireless for true reliability,
              making every link active, optimized, and enterprise-grade with
              Bigleaf Cloud Connect.
            </li>
            <li>
              Prove: Continuous optimization, high-speed wireless, and real-time
              insights keep cloud apps responsive, and Connect Care ensures
              flawless operation.
            </li>
          </ol>
        </div>
        
        <div className="mb-4 flex flex-wrap gap-2 bg-white w-fit rounded-lg p-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${
                activeTab === tab
                  ? "bg-[#373ca3] text-white"
                  : theme === "dark"
                  ? " text-gray-500 "
                  : " text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <div
          className={`overflow-x-auto rounded-lg border ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-300"
          }`}
        >
          <table className="min-w-full text-left">
            <thead className={theme === "dark" ? "bg-gray-800" : "bg-gray-200"}>
              <tr>
                <th className="px-4 py-3 text-sm sm:text-base">Email</th>
                <th className="px-4 py-3 text-sm sm:text-base">Title</th>
                <th className="px-4 py-3 text-sm sm:text-base">System Role</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr
                  key={row.id}
                  className={`transition-colors duration-200 border-b ${
                    theme === "dark"
                      ? "odd:bg-gray-700 even:bg-gray-800 hover:bg-gray-600 border-gray-700"
                      : "odd:bg-gray-100 even:bg-gray-50 hover:bg-gray-200 border-gray-300"
                  }`}
                >
                  <td className="px-4 py-2">{row.Email}</td>
                  <td className="px-4 py-2">{row.Title}</td>
                  <td className="px-4 py-2">{row.System_Role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
