import React from "react";
import Level1 from "./Level1";
import Level2 from "./Level2";
import Level3 from "./Level3";

const Graphs = ({ inputValue, maxValue }) => {
  return (
    <div>
      <h3 className="font-bold text-2xl text-[#003F73]">Graphs</h3>
      <div className="flex justify-between mt-6 px-6">
        <div>
          <Level1 inputValue={inputValue} maxValue={maxValue} />
        </div>
        <div>
          <Level2 inputValue={Number(inputValue)} maxValue={Number(maxValue)} />
        </div>
        <div>
          <Level3 inputValue={inputValue} maxValue={maxValue} />
        </div>
      </div>
    </div>
  );
};

export default Graphs;
