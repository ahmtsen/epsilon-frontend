import React, { useEffect, useRef } from "react";
import Chart from "chart.js";

const SymptomChart = ({
  dataset,
  color,
  title,
  minTick,
  maxTick,
  title1,
  title2,
  title3,
  datasets1,
  datasets2,
  datasets3,
  color1,
  color2,
  color3,
}) => {
  const chartRef = React.createRef();
  const createChart = useRef(() => {});

  createChart.current = () => {
    if (dataset) {
      new Chart(chartRef.current, {
        type: "line",
        options: {
          scales: {
            xAxes: [
              {
                type: "time",
                time: {
                  unit: "week",
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  suggestedMin: minTick,
                  suggestedMax: maxTick,
                },
              },
            ],
          },
        },
        data: {
          labels: dataset.data.map((d) => d.time),
          datasets: [
            {
              label: title,
              data: dataset.data.map((d) => d.value),
              fill: "none",
              backgroundColor: color,
              pointRadius: 2,
              borderColor: color,
              borderWidth: 1,
              lineTension: 0,
            },
          ],
        },
      });
    } else {
       new Chart(chartRef.current, {
        type: "line",
        options: {
          scales: {
            xAxes: [
              {
                type: "time",
                time: {
                  unit: "day",
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  suggestedMin: minTick,
                  suggestedMax: maxTick,
                },
              },
            ],
          },
        },
        data: {
          labels: datasets1.map((d) => d.time),
          datasets: [
            {
              label: title1,
              data: datasets1.map((d) => d.value),
              fill: "none",
              backgroundColor: color1,
              pointRadius: 2,
              borderColor: color1,
              borderWidth: 1,
              lineTension: 0,
            },
            {
              label: title2,
              data: datasets2.map((d) => d.value),
              fill: "none",
              backgroundColor: color2,
              pointRadius: 2,
              borderColor: color2,
              borderWidth: 1,
              lineTension: 0,
            },
            {
              label: title3,
              data: datasets3.map((d) => d.value),
              fill: "none",
              backgroundColor: color3,
              pointRadius: 2,
              borderColor: color3,
              borderWidth: 1,
              lineTension: 0,
            },
          ],
        },
      });
    }
  };
  useEffect(() => {
    createChart.current()
  }, []);

  return (
    <div
      className="container container-fluid"
      style={{ width: "70%", height: "100%", position: "relative" }}
    >
      <canvas
        ref={chartRef}
        style={{ width: "70%", height: "100%", position: "relative" }}
      ></canvas>
    </div>
  );
};

export default SymptomChart;
