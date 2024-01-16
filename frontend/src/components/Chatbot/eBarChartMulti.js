import React, { useState } from "react";
import ReactEcharts from "echarts-for-react";

function EBarChartMulti({ data }) {
  console.log("data: ", data);

  const keysList = Object.keys(data[0]);
  const column1 = keysList[0];

  const xAxisData = data.map((item) => item[column1]);

  const seriesData = [];
  for (let i = 1; i < keysList.length; i++) {
    const columnName = keysList[i];
    if (typeof data[0][columnName] == "bigint" || typeof data[0][columnName] == "number")
      seriesData.push({
        name: columnName,
        data: data.map((item) => item[columnName]),
      });
  }

  const customColors = [
    "#5470C6",
    "#91CC75",
    "#EE6666",
    "#73C0DE",
    "#3BA272",
    "#FC8452",
    "#9A60B4",
    "#EA7CCC",
    "#F9D97A",
    "#60C0DD",
  ];

  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: keysList.slice(1), // Legend items based on column names
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    backgroundColor: "#f0f0f0",
    xAxis: [
      {
        type: "category",
        data: xAxisData,
        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: {
          rotate: 25,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: seriesData.map((series, index) => ({
      type: "bar",
      barWidth: `${100 / keysList.length}%`, // Adjust bar width based on the number of columns
      data: series.data,
      name: series.name,
      //   label: labelOption,
      itemStyle: {
        color: customColors[index % customColors.length],
      },
    })),
  };

  return (
    <div className="bar-container">
      <ReactEcharts option={option} />
    </div>
  );
}

export default EBarChartMulti;
