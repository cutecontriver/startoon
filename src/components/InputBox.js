import React from "react";

const InputBox = (props) => {
  let placeholder = props.placeholder;
  let minValue = props.minvalue;

  const handleChange = (e) => {
    props.checkValue(e.target.value);
  };
  return (
    <div className="mr-12 border-0">
      <input
        className="w-72 h-12 bg-[#C2E3FF] p-2 text-black rounded-sm border-0"
        type="number"
        placeholder={placeholder}
        min={minValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputBox;
