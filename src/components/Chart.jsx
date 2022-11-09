import React from "react";
import { Line } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";
import zoomPlugin from "chartjs-plugin-zoom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { pan } from "chartjs-plugin-zoom";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
ChartJS.register(zoomPlugin);
const Chart = ({ arr = [], currencySymbol, days }) => {
  const prices = [];
  const dates = [];
  for (let i = 0; i < arr.length; i++) {
    // pushing dates of prices
    if (days === "24h") {
      dates.push(new Date(arr[i][0]).toLocaleTimeString());
    } else {
      dates.push(new Date(arr[i][0]).toLocaleDateString());
    }
    //pushing prices of crypo
    prices.push(arr[i][1]);
  }
  console.log(dates);
  console.log(prices);
  const data = {
    labels: dates,
    datasets: [
      {
        label: `Price in ${currencySymbol}`,
        data: prices,
        borderColor: "#f7542f",
      },
    ],
  };
  return (
    <>
      <Line
        options={{
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            zoom: {
              zoom: {
                wheel: {
                  enabled: true,
                },
                pinch: {
                  enabled: true,
                },
                mode: "xy",
              },
              pan: {
                enabled: true,
                mode: "xy",
              },
            },
          },
        }}
        data={data}
      />
    </>
  );
};

export default Chart;
