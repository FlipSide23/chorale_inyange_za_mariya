import { useState } from "react";
import MonthTile from "./MonthTile";
import { masses } from "./data";

export const Calendar = () => {
  const [selectedMonth, setSelectedMonth] = useState("march");
  const handleSelect = (month) => {
    setSelectedMonth(month);
  };

  return (
    <section>
      <div className="mx-auto px-48 py-8">
        <h3 className="font-bold text-xl mb-9">Mass Calendar</h3>
        <div className="flex space-x-5">
          <MonthTile
            isSelected={selectedMonth === "march"}
            onSelect={() => handleSelect("march")}
            month="March"
            mass={`${masses["march"].length} Masses`}
          />
          <MonthTile
            isSelected={selectedMonth === "april"}
            onSelect={() => handleSelect("april")}
            month="April"
            mass={`${masses["april"].length} Masses`}
          />
          <MonthTile
            isSelected={selectedMonth === "may"}
            onSelect={() => handleSelect("may")}
            month="May"
            mass={`${masses["may"].length} Mass`}
          />
        </div>
        <table className="w-full bg-neutral-300 mt-12 table-fixed rounded-2xl">
          <thead>
            <tr>
              <th className="border border-white p-3.5">Date</th>
              <th className="border border-white p-3.5">Time</th>
              <th className="border border-white p-3.5">Place</th>
            </tr>
          </thead>
          <tbody>
            {masses[selectedMonth].map((mass, index) => {
              return (
                <tr key={index}>
                  <td className="border border-white p-4 text-center text-neutral-500">
                    {mass.date}
                  </td>
                  <td className="border border-white p-4 text-center text-neutral-500">
                    {mass.time}
                  </td>
                  <td className="border border-white p-4 text-center text-neutral-500">
                    {mass.place}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};
