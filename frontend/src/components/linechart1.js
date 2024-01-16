import React, { useState,useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { mahindraSalesTrend } from '../api/Look';
const Linechart1 = () => {
  const [mahindraSalesTrenddata,setMahindraSalesTrendData]=useState([])
  let east2020,east2021,east2022,west2020,west2021,west2022,north2020,north2021,north2022,south2020,south2021,south2022;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await mahindraSalesTrend();
        setMahindraSalesTrendData(result.success);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  mahindraSalesTrenddata.filter((item)=>item["all_data_iter_4.date_year"]===2020).map((item,index)=>{
    switch(item["all_data_iter_4.zone"]){
      case "East":
        east2020=item["all_data_iter_4.total_revenue"]
        break
      case "West":
        west2020=item["all_data_iter_4.total_revenue"]
        break
      case "North":
        north2020=item["all_data_iter_4.total_revenue"]
        break
      case "South":
        south2020=item["all_data_iter_4.total_revenue"]
        break

    }
  })
  mahindraSalesTrenddata.filter((item)=>item["all_data_iter_4.date_year"]===2021).map((item,index)=>{
    switch(item["all_data_iter_4.zone"]){
      case "East":
        east2021=item["all_data_iter_4.total_revenue"]
        break
      case "West":
        west2021=item["all_data_iter_4.total_revenue"]
        break
      case "North":
        north2021=item["all_data_iter_4.total_revenue"]
        break
      case "South":
        south2021=item["all_data_iter_4.total_revenue"]
        break

    }
  })
  mahindraSalesTrenddata.filter((item)=>item["all_data_iter_4.date_year"]===2022).map((item,index)=>{
    switch(item["all_data_iter_4.zone"]){
      case "East":
        east2022=item["all_data_iter_4.total_revenue"]
        break
      case "West":
        west2022=item["all_data_iter_4.total_revenue"]
        break
      case "North":
        north2022=item["all_data_iter_4.total_revenue"]
        break
      case "South":
        south2022=item["all_data_iter_4.total_revenue"]
        break


    }
  })
    const data = [
        { name: '2020', North: north2020, East: east2020, West: west2020, South: south2020 },
        { name: '2021', North: north2021, East: east2021, West: west2021, South: south2021 },
        { name: '2022', North: north2022, East: east2022, West: west2022, South: south2022 },
      ];
      
      return (
        
        <div style={{position:'relative', left:'30%',marginBottom:'30px'}}>
        <div style={{ width: '60%', border:'1px solid lightgrey',height: 200, padding:'10px' ,borderRadius:'10px' }}>
            <div style={{fontSize:'18px', color:'grey', fontWeight:'bold', marginLeft:'20px',}}>Sales Trend</div>
          <ResponsiveContainer>
            <LineChart data={data} style={{height:'90%'}}>
              <XAxis dataKey="name" tickLine={false} axisLine={false} />
              <YAxis domain={[200000, 400000]} axisLine={false} ticks={[200000,240000,280000,320000,360000,400000]} hide={true} tickLine={false} />
              <Tooltip />
              {/* <Legend /> */}
              <Line type="monotone" dataKey="North" stroke="#8884d8" dot={false} />
              <Line type="monotone" dataKey="East" stroke="#82ca9d" dot={false} />
              <Line type="monotone" dataKey="West" stroke="#FF5733" dot={false} />
              <Line type="monotone" dataKey="South" stroke="#FFD700" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        </div>
      );
    };

export default Linechart1;