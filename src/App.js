import "./App.css";
import Graphs from "./components/Graphs";
import Input from "./components/Input";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const checkInputValue = (data) => {
    setInputValue(data);
  };
  const checkMaxValue = (data) => {
    setMaxValue(data);
  };
  return (
    <div className="p-20 pt-14 pb-0">
      <Input checkInputValue={checkInputValue} checkMaxValue={checkMaxValue} />
      <div>
        {Number(inputValue) > Number(maxValue) ? (
          <p className="text-red-700">
            OOPS! Input Value is Greater than Max value
          </p>
        ) : null}
      </div>
      <Graphs inputValue={inputValue} maxValue={maxValue} />
    </div>
  );
}

export default App;
