import React, { useCallback, useState,useEffect } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";
import { inventoryMetrics } from "../api/Look";


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
  const boxWidth = 200; // Adjust the width as needed
  const boxHeight = 110; // Adjust the height as needed

  return (
    <g>
      {/* <rect
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey - 20}
        width={200}
        height={100}
        fill="white"
      /> */}
      <text
        x={cx}
        y={cy}
        dy={5}
        fontWeight="bold" // Adjust the font weight as needed
        fontSize={27}
        textAnchor="middle"
        fill="black"
      >
        {payload.TotalInventory}
      </text>
      <text
        x={cx}
        y={cy}
        dy={23}
        fontSize={13}
        textAnchor="middle"
        fill="grey"
        // fontWeight="bold"
      >
        Total Inventory
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
      <rect
        x={cos >= 0 ? ex + 5 : ex - boxWidth - 5} // Adjust the x-coordinate as needed
        y={ey - 14} // Adjust the y-coordinate as needed
        width={boxWidth} // Adjust the width as needed
        height={boxHeight} // Adjust the height as needed
        fill="white"
        rx={5} // Optional: rounded corners
      />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey + 5}
        textAnchor={textAnchor}
        fill="black"
        fontWeight="bold" // Adjust the font weight as needed
        fontSize={18} // Adjust the font size as needed
      >{`${name}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey + 30}
        textAnchor={textAnchor}
        fill="#333"
      >
        <tspan>{`MarketDemand `}</tspan>
        <tspan fontWeight="bold">{`${MarketDemand}`}</tspan>
      </text>

      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey + 50} // Adjust the dy value to set the vertical distance between "PV" and "CV"
        textAnchor={textAnchor}
        fill="#333"
      >
        {" "}
        <tspan>{`CurrentInventory `}</tspan>
        <tspan fontWeight="bold">{`${CurrentInventory}`}</tspan>
      </text>

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

export default function PieChartComponent({sel_year}) {
  let thar_rev=0,bol_rev=0,sco_rev=0,xuv300_rev=0,xuv700_rev=0;
  const [inventorydata,setInventoryData]=useState([])
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await inventoryMetrics();
        setInventoryData(result.success);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  inventorydata.filter((item)=>item["all_data_iter_5.date_year"]===parseInt(sel_year)).map((item,index)=>{
     switch(item["all_data_iter_5.product_sku"]){
      case "Thar":
        thar_rev=item["all_data_iter_5.total_inventory"];
        break
        case "Bolero Pickup":
        bol_rev=item["all_data_iter_5.total_inventory"];
        break
        case "Scorpio Pickup":
        sco_rev=item["all_data_iter_5.total_inventory"];
        break
        case "XUV300":
        xuv300_rev=item["all_data_iter_5.total_inventory"];
        break
        case "XUV700":
        xuv700_rev=item["all_data_iter_5.total_inventory"];
        break
     }
   })
    const data = [
    {
      name: "Thar",
      MarketDemand: "20,000",
      CurrentInventory: thar_rev,
      value:80,
      TotalInventory: "1,73,000",
    },
    {
      name: "XUV 700",
      MarketDemand: "20,000",
      CurrentInventory: xuv700_rev,
      value:80,
      TotalInventory: "1,17,000",
    },
    {
      name: "XUV 300",
      MarketDemand: "20,000",
      CurrentInventory: xuv300_rev,
      value: 60,
      TotalInventory: "2,56,000",
    },
    {
      name: "Bolero",
      MarketDemand: "20,000",
      CurrentInventory: bol_rev,
      value: 40,
      TotalInventory: "2,03,000",
    },
    {
      name: "Scorpio",
      MarketDemand: "20,000",
      CurrentInventory: sco_rev,
      value: 50,
      TotalInventory: "1,22,000",
    },
  ];
  

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
      <PieChart width={700} height={400}>
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
