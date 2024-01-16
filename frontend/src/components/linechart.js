import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const linechart = () => {
  const data = [
    { name: "North", sales: 33 },
    { name: "South", sales: 35 },
    { name: "East", sales: 60 },
    { name: "West", sales: 30 },
  ];

  return (
    <div style={{ paddingTop: "10px" }}>
      <p style={{ fontSize: "18px", marginBottom: "10px", fontWeight: "600" }}>
        Total expenditure
      </p>
      <div style={{ width: "100%", height: "250px", paddingTop: "10px" }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              padding={{ left: 40, right: 150 }}
            />

            <YAxis
              domain={[0, 100]}
              ticks={[0, 20, 40, 60, 80, 100]}
              hide={false}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="red" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default linechart;
