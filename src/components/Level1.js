import React from "react";

const Level1 = ({ inputValue, maxValue }) => {
  let heightPercent = (Number(inputValue) / Number(maxValue)) * 100;
  let h = heightPercent * 2.88;
  let height = h.toFixed(0).toString();

  return (
    <div>
      <div className="w-24 h-72 bg-[#C2E3FF] flex flex-col justify-end">
        {Number(inputValue) > Number(maxValue) ? null : (
          <div
            className="w-24 bg-[#008CFF]"
            style={{ height: `${height}px` }}
          ></div>
        )}
      </div>
      <div className="text-[#008CFF] flex justify-center p-4 font-bold">
        {inputValue > maxValue || inputValue === 0 || maxValue === 0 ? (
          <p>0%</p>
        ) : (
          heightPercent.toFixed(0) + "%"
        )}
      </div>
      <div className="text-[#003F73] font-bold flex justify-center">
        <p>Level 1</p>
      </div>
    </div>
  );
};

export default Level1;
