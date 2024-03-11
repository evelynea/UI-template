import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const PieChart = () => {
  useEffect(() => {
    const dataPie = {
      labels: ["Inhabited", "on sale", "under construction"],
      datasets: [
        {
          label: "My First Dataset",
          data: [300, 50, 100],
          backgroundColor: [
            "rgb(133, 105, 241)",
            "rgb(164, 101, 241)",
            "rgb(101, 143, 241)",
          ],
          hoverOffset: 4,
        },
      ],
    };

    const configPie = {
      type: "pie",
      data: dataPie,
      options: {},
    };

    const chartPie = new Chart(document.getElementById("chartPie"), configPie);

    return () => {
      chartPie.destroy();
    };
  }, []);

  return (
    <div className=" rounded-lg overflow-hidden" style={{padding: "10px"}}>
      <div className="py-3 px-5 bg-gray-50">Pie chart</div>
      <canvas className="p-1 ml-25 mr-25" id="chartPie"></canvas>
      {/* <canvas className="p-1" id="chartPie" width="200" height="200"></canvas> */}
    </div>
  );
};

export default PieChart;
