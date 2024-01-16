// import "./App.css";
import React, { useState } from "react";
import ReactEcharts from "echarts-for-react";

function EPieChart({ data }) {
  console.log(data);
  const keysList = Object.keys(data[0]);
  // console.log("keysList: ", keysList);
  let h2 = keysList[1];
  h2 = h2.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  const pieData = data.map((item) => ({
    name: item[keysList[0]],
    value: item[keysList[1]],
  }));

  const option = {
    backgroundColor: " #1A1A64",
    // #1A1A64
    // #e62e2e
    tooltip: {
      trigger: "item",
      formatter: "{b} <br/>{a} : {c} ({d}%)",
    },
    series: [
      {
        name: h2,
        type: "pie",
        radius: "75%",
        center: ["50%", "50%"],
        data: pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  const [chartData, setChartData] = useState(option);

  return (
    <div className="App">
      <ReactEcharts option={chartData} />
    </div>
  );
}

export default EPieChart;
