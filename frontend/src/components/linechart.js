import React,{useState,useEffect} from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { expenditure } from "../api/Look";

const Linechart = ({sel_year}) => {
  let east_exp_2020=0,east_exp_2021=0,east_exp_2022=0,west_exp_2020=0,west_exp_2021=0,west_exp_2022=0,north_exp_2020=0,north_exp_2021=0,north_exp_2022=0,south_exp_2020=0,south_exp_2021=0,south_exp_2022=0;
  const [expendituredata,setExpenditureData]=useState([])
  //const sel_year=2022
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await expenditure();
        setExpenditureData(result.success);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  expendituredata.filter((item)=>item["all_data_iter_4.date_year"]===parseInt(sel_year)).map((item,index)=>{
    switch(item["all_data_iter_4.zone"]){
      case "East":
        east_exp_2022=item["all_data_iter_4.total_expenditure"]
        break
      case "West":
        west_exp_2022=item["all_data_iter_4.total_expenditure"]
        break
      case "North":
        north_exp_2022=item["all_data_iter_4.total_expenditure"]
        break
      case "South":
        south_exp_2022=item["all_data_iter_4.total_expenditure"]
        break

    }
  })
  // expendituredata.filter((item)=>item["all_data_iter_4.date_year"]===2021).map((item,index)=>{
  //   switch(item["all_data_iter_4.zone"]){
  //     case "East":
  //       east_exp_2021=item["all_data_iter_4.total_expenditure"]
  //       break
  //     case "West":
  //       west_exp_2021=item["all_data_iter_4.total_expenditure"]
  //       break
  //     case "North":
  //       north_exp_2021=item["all_data_iter_4.total_expenditure"]
  //       break
  //     case "South":
  //       south_exp_2021=item["all_data_iter_4.total_expenditure"]
  //       break

  //   }
  // })
  // expendituredata.filter((item)=>item["all_data_iter_4.date_year"]===2020).map((item,index)=>{
  //   switch(item["all_data_iter_4.zone"]){
  //     case "East":
  //       east_exp_2020=item["all_data_iter_4.total_expenditure"]
  //       break
  //     case "West":
  //       west_exp_2020=item["all_data_iter_4.total_expenditure"]
  //       break
  //     case "North":
  //       north_exp_2020=item["all_data_iter_4.total_expenditure"]
  //       break
  //     case "South":
  //       south_exp_2020=item["all_data_iter_4.total_expenditure"]
  //       break

  //   }
  // })
  const data = [
    { name: "North", sales: north_exp_2022 },
    { name: "South", sales: south_exp_2022 },
    { name: "East", sales: east_exp_2022 },
    { name: "West", sales: west_exp_2022 },
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
              domain={[0, 500000]}
              ticks={[0, 100000, 200000, 300000, 400000, 500000]}

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

export default Linechart;
