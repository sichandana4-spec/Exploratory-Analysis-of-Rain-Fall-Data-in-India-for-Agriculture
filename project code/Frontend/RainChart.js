import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function RainChart({ data, state }) {
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: `Average Monthly Rainfall - ${state}`,
        data: Object.values(data),
        backgroundColor: "rgba(54, 162, 235, 0.6)"
      }
    ]
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <Bar data={chartData} />
    </div>
  );
}

export default RainChart;
