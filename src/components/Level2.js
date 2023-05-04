import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Level2 = ({ inputValue, maxValue }) => {
  let input = ((inputValue / maxValue) * 100).toFixed(0);
  const data = {
    labels: [],
    datasets: [
      {
        label: "",
        data: [input, 100 - input],
        backgroundColor: ["#008CFF", "#C2E3FF"],
        borderColor: ["#008CFF", "#C2E3FF"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="relative">
      {inputValue > maxValue || inputValue === 0 || maxValue === 0 ? (
        <div className="w-72 h-72 bg-[#C2E3FF] rounded-full"></div>
      ) : (
        <Pie data={data} />
      )}
      <div className="text-white flex justify-center p-4 font-bold absolute bottom-40 left-24">
        {inputValue > maxValue || inputValue === 0 || maxValue === 0 ? (
          <p>0%</p>
        ) : (
          input + "%"
        )}
      </div>
      <div className="text-[#003F73] font-bold flex justify-center">
        <p className="mt-11">Level 3</p>
      </div>
    </div>
  );
};

export default Level2;
