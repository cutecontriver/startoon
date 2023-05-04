import React from "react";
import InputBox from "./InputBox";

const Input = ({ checkInputValue, checkMaxValue }) => {
  return (
    <div>
      <div>
        <h3 className="font-bold text-2xl text-[#003F73]">Enter Values</h3>
      </div>
      <div className="flex m-10 ml-0">
        <InputBox
          placeholder="Input Value"
          minvalue="0"
          checkValue={checkInputValue}
        />
        <InputBox
          placeholder="Max Value"
          minvalue="0"
          checkValue={checkMaxValue}
        />
      </div>
    </div>
  );
};

export default Input;
