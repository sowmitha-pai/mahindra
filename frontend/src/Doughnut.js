import React from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Label,
} from "recharts";

const data = [
  { name: "Mahindra", value: 600 },
  { name: "Maruthi", value: 400 },
  { name: "Tata", value: 400 },
];
const COLORS = ["#F90000", "#CF9CEB", "#9FDDFF"];

const Doughnut = () => {
  return (
    <PieChart width={1000} height={1200}>
      <Pie
        data={data}
        cx={220}
        cy={220}
        innerRadius={170}
        outerRadius={180}
        fill="#8884d8"
        paddingAngle={10}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default Doughnut;
