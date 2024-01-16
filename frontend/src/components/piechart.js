import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector } from "recharts";

const data = [
  { name: "Car", currentPrice: 30000, marketPrice: 35000 ,value:20},
  { name: "Motorcycle", currentPrice: 15000, marketPrice: 18000 ,value:20},
  { name: "Truck", currentPrice: 50000, marketPrice: 55000 ,value:20},
  { name: "SUV", currentPrice: 40000, marketPrice: 45000 ,value:20}
];
const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    name,
    value,
    currentPrice,
    marketPrice
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`${name}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey+20}
        textAnchor={textAnchor}
        fill="#333"
      >{`currentPrice ${currentPrice}`}</text>

      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey + 40}  // Adjust the dy value to set the vertical distance between "PV" and "CV"
        textAnchor={textAnchor}
        fill="#333"
      >{`marketPrice ${marketPrice}`}</text>

      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey + 40}  // Adjust the dy value to set the vertical distance between "CV" and "(Rate)"
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};


export default function Piechart() {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <PieChart width={700} height={200}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={data}
        cx={350}
        cy={150}
        innerRadius={60}
        outerRadius={80}
        fill="#770737"
        dataKey="value"
        onMouseEnter={onPieEnter}
      />
    </PieChart>
  );
}