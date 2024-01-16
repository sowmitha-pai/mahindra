import React, { PureComponent } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 200 },
  { name: "Group B", value: 250 },
  { name: "Group C", value: 130 },
  { name: "Group D", value: 300 },
  { name: "Group E", value: 150 },
];
const COLORS = ["#4A0404", "#770737", "#E0115F", "#E30B5C", "#E30B5C"];

export default class HalfPieChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height={150}>
        <PieChart style={{}}>
          <Pie
            data={data}
            cx={170}
            cy={110}
            startAngle={180}
            endAngle={0}
            innerRadius={69}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
