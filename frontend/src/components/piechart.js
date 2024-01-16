import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const data = [
  { name: "Thar", MarketDemand: 1000, CurrentInventory: 35000, value: 20 },
  { name: "XUV 700", MarketDemand: 15000, CurrentInventory: 18000, value: 20 },
  { name: "XUV 300", MarketDemand: 50000, CurrentInventory: 55000, value: 20 },
  { name: "Bolero", MarketDemand: 40000, CurrentInventory: 45000, value: 20 },
  { name: "Scorpio", MarketDemand: 20000, CurrentInventory: 22000, value: 20 },
];

const COLORS = ["#370a10", "#fa5a5b", "#df1630", "#bd172d", "#621b24"];

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
    MarketDemand,
    CurrentInventory,
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
      <rect
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey - 20}
        width={200}
        height={100}
        fill="white"
      />
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
        y={ey + 20}
        textAnchor={textAnchor}
        fill="#333"
      >{`MarketDemand ${MarketDemand}`}</text>

      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey + 40} // Adjust the dy value to set the vertical distance between "PV" and "CV"
        textAnchor={textAnchor}
        fill="#333"
      >{`CurrentInventory ${CurrentInventory}`}</text>

      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey + 60} // Adjust the dy value to set the vertical distance between "CV" and "(Rate)"
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
}; // ... (unchanged code)

export default function PieChartComponent() {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <div style={{ marginTop: "-100px" }}>
      {" "}
      {/* Adjust this value as needed */}
      <PieChart width={700} height={300}>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx={350}
          cy={150}
          innerRadius={60}
          outerRadius={80}
          dataKey="value"
          onMouseEnter={onPieEnter}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}
