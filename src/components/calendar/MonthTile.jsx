import React from "react";

const MonthTile = ({ isSelected, onSelect, month, mass }) => {
  //   console.log(props);
  return (
    <div
      className={`w-full border-b-2 ${
        isSelected
          ? "border-blue text-blue"
          : "border-slate-300 text-neutral-500"
      } pb-2 cursor-pointer`}
      onClick={onSelect}
    >
      <h3 className="font-bold">{month} 2023</h3>
      <span className="font-light text-sm">{mass}</span>
    </div>
  );
};

export default MonthTile;
