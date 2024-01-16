// import "./RightSideBar.css";
// import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
// import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
// import React, { useState,useEffect } from "react";
// import AddIcon from "@mui/icons-material/Add";
// import { getData } from "./api/Look.js";

// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// let mm_2020,mm_2021,mm_2022,mar_2020,mar_2021,mar_2022,tata_2020,tata_2021,tata_2022
// const RightSideBar = () => {

//   const [linegraphdata, setData] = useState([]);
//   const [opacity, setOpacity] = useState({
//     Mahindra: 1,
//     Maruthi: 1,
//     Tata: 1,
//   });
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await getData();
//         setData(result.success);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);
//   /*const data = [
//     {
//       name: "2020",
//       Mahindra: 3000,
//       Maruthi: 3000,
//       Tata: 3000,
//     },
//     {
//       name: "2021",
//       Mahindra: 3600,
//       Maruthi: 3200,
//       Tata: 3900,
//     },
//     {
//       name: "2022",
//       Mahindra: 4400,
//       Maruthi: 3800,
//       Tata: 4200,
//     },
//     {
//       name: "2023",
//       Mahindra: 4500,
//       Maruthi: 3700,
//       Tata: 4200,
//     },
//     {
//       name: "2024",
//       Mahindra: 4000,
//       Maruthi: 4800,
//       Tata: 4300,
//     },
//     {
//       name: "2025",
//       Mahindra: 4300,
//       Maruthi: 4600,
//       Tata: 3900,
//     },
//     {
//       name: "2026",
//       Mahindra: 4000,
//       Maruthi: 4000,
//       Tata: 4000,
//     },
//   ];*/
//   linegraphdata.filter((item) =>
//   item["all_data_iter_4.date_year"] === 2020).map((item,index)=>{
//     switch(item["all_data_iter_4.company"]){
//       case "Mahindra":
//         mm_2020=item["all_data_iter_4.total_revenue"]
//         break
//         case "Maruthi":
//           mar_2020=item["all_data_iter_4.total_revenue"]
//           break
//           case "Tata":
//             tata_2020=item["all_data_iter_4.total_revenue"]
//             break
//     }
//   }
// )
// linegraphdata.filter((item) =>
//   item["all_data_iter_4.date_year"] === 2021).map((item,index)=>{
//     switch(item["all_data_iter_4.company"]){
//       case "Mahindra":
//         mm_2021=item["all_data_iter_4.total_revenue"]
//         break
//         case "Maruthi":
//           mar_2021=item["all_data_iter_4.total_revenue"]
//           break
//           case "Tata":
//             tata_2021=item["all_data_iter_4.total_revenue"]
//             break
//     }
//   }
// )
// linegraphdata.filter((item) =>
//   item["all_data_iter_4.date_year"] === 2022).map((item,index)=>{
//     switch(item["all_data_iter_4.company"]){
//       case "Mahindra":
//         mm_2022=item["all_data_iter_4.total_revenue"]
//         break
//         case "Maruthi":
//           mar_2022=item["all_data_iter_4.total_revenue"]
//           break
//           case "Tata":
//             tata_2022=item["all_data_iter_4.total_revenue"]
//             break
//     }
//   }
// )
// const data = [
//   {
//     name: "2020",
//     Mahindra: mm_2020,
//     Maruthi: mar_2020,
//     Tata: tata_2020,
//   },
//   {
//     name: "2021",
//     Mahindra: mm_2021,
//     Maruthi: mar_2021,
//     Tata: tata_2021,
//   },
//   {
//     name: "2022",
//     Mahindra: mm_2022,
//     Maruthi: mar_2022,
//     Tata: tata_2022,
//   }
// ];
//   return (
//     <>
//       <div className="rightsidebar">
//         <div className="rightbar__topcontainer">
//           <div className="rightbar__top">
//             <p>Competitors analysis</p>
//             <div className="topicons">
//               <FileDownloadOutlinedIcon />
//               <MoreVertOutlinedIcon />
//             </div>
//           </div>
//           <div className="rightbar__options">
//             <div className="optionscontainer">
//               <select name="vehiles" id="vehicle">
//                 <option value="allvehicles">All vehicles</option>
//                 <option value="diesel">Diesel</option>
//                 <option value="petrol">Petrol</option>
//               </select>
//             </div>

//           </div>
//           <div className="radiobutton">
//             <div className="first-line">
//               <input
//                 type="radio"
//                 id="mahindra"
//                 name="brand_name"
//                 value="Mahindra"
//               />
//               <label htmlFor="html">Mahindra</label>
//               <input
//                 type="radio"
//                 id="tata"
//                 name="brand_name"
//                 value="Tata Motors"
//               />
//               <label htmlFor="css">Tata Motors</label>
//             </div>
//             <div className="second-line">
//               <input
//                 type="radio"
//                 id="maruthi"
//                 name="brand_name"
//                 value="Maruthi"
//               />
//               <label htmlFor="Maruthi">Maruthi</label>

//             </div>
//           </div>
//           <hr></hr>
//           <div className="rightbarbottomcontainer">
//             <div className="brandname">
//               <p>Mahindra & Mahindra</p>
//             </div>

//             <div className="rightbarbottom__options">
//               <div className="options1container">
//                 <select name="vehiles" id="vehicle">
//                   <option value="allvehicles">Petrol</option>
//                   <option value="diesel">Diesel</option>
//                   <option value="Electric">Electric</option>
//                 </select>
//               </div>
//               <div>
//                 <div className="options2container">
//                   <select name="duration" id="duration">
//                     <option value="Yearly">Yearly</option>
//                     <option value="Monthly">Monthly</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="options3container">
//                 <select name="region" id="region">
//                   <option value="region">Region</option>
//                   <option value="north">Northern </option>
//                   <option value="central">Central</option>
//                   <option value="South">Southern</option>
//                   <option value="east">Eastern</option>
//                   <option value="northeast">NorthEast</option>
//                   <option value="west">Western</option>
//                 </select>
//               </div>
//             </div>
//             <div className="data">
//               <div className="datafirst-line">
//                 <p>Total Sale</p>
//                 <p>Sales Target</p>
//               </div>
//               <div className="datasecond-line">
//                 <h5>121,987 Cr</h5>
//                 <h5>621,987 Cr</h5>
//               </div>
//               <div className="datafirst-line">
//                 <p>Total revenue</p>
//                 <p>Contribution</p>
//               </div>
//               <div className="datasecond-line">
//                 <h5>521,987 Cr</h5>
//                 <h5>18%</h5>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="competitorgraph" style={{ width: "100%" }}>
//           <p>Competitors analysis</p>
//           <ResponsiveContainer width="100%" height={300}>
//             <LineChart
//               width={500}
//               height={300}
//               data={data}
//               margin={{
//                 top: 20,
//                 right: 20,
//                 left: 20,
//                 bottom: 0,
//               }}
//               fill="transparent"
//             >
//               <Tooltip />
//               <Line
//                 type="monotone"
//                 dataKey="Mahindra"
//                 strokeOpacity={opacity.Mahindra}
//                 stroke="#FA5775"
//                 activeDot={{ r: 8 }}
//               />
//               <Line
//                 type="monotone"
//                 dataKey="Tata"
//                 strokeOpacity={opacity.Maruthi}
//                 stroke="#6DCAFE"
//               />
//               <Line
//                 type="monotone"
//                 dataKey="Maruthi"
//                 strokeOpacity={opacity.Maruthi}
//                 stroke="#BB79E2"
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//         <p style={{ whiteSpace: "nowrap" }}>
//           <span className="year">2020 </span>
//           <span className="year">2021 </span>
//           <span className="year">2022 </span>
//         </p>
//       </div>
//     </>
//   );
// };
// export default RightSideBar;

import "./RightSideBar.css";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import { getData, totalSales } from "./api/Look.js";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

let mm_2020,
  mm_2021,
  mm_2022,
  mar_2020,
  mar_2021,
  mar_2022,
  tata_2020,
  tata_2021,
  tata_2022;
let sales, rev, cont;
const RightSideBar = ({ updateSelectedCompany }) => {
  //const [selectedCompany, setSelectedCompany]=useState("Mahindra")
  const [linegraphdata, setData] = useState([]);
  const [salesdata, salesData] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState("Petrol");
  const [selectedYear, setSelectedYear] = useState("2022");
  const [selectedZone, setSelectedZone] = useState("East");

  const [opacity, setOpacity] = useState({
    Mahindra: 1,
    Maruthi: 1,
    Tata: 1,
  });
  let sales, rev, cont;
  sales = rev = cont = 0;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData();
        setData(result.success);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await totalSales();
        salesData(result.success);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  function formatNumber(num) {
    return (+num).toLocaleString("en-US");
  }

  const selectCompanyHandler = (event) => {
    const newCompany = event.target.value;
    //setSelectedCompany(newCompany)
    updateSelectedCompany(newCompany);
  };
  const onVehicleHandler = (event) => {
    setSelectedVehicle(event.target.value);
  };
  const onYearHandler = (event) => {
    setSelectedYear(event.target.value);
  };
  const onZoneHandler = (event) => {
    setSelectedZone(event.target.value);
  };
  /*const data = [
   {
     name: "2020",
     Mahindra: 3000,
     Maruthi: 3000,
     Tata: 3000,
   },
   {
     name: "2021",
     Mahindra: 3600,
     Maruthi: 3200,
     Tata: 3900,
   },
   {
     name: "2022",
     Mahindra: 4400,
     Maruthi: 3800,
     Tata: 4200,
   },
   {
     name: "2023",
     Mahindra: 4500,
     Maruthi: 3700,
     Tata: 4200,
   },
   {
     name: "2024",
     Mahindra: 4000,
     Maruthi: 4800,
     Tata: 4300,
   },
   {
     name: "2025",
     Mahindra: 4300,
     Maruthi: 4600,
     Tata: 3900,
   },
   {
     name: "2026",
     Mahindra: 4000,
     Maruthi: 4000,
     Tata: 4000,
   },
 ];*/
  linegraphdata
    .filter((item) => item["all_data_iter_4.date_year"] === 2020)
    .map((item, index) => {
      switch (item["all_data_iter_4.company"]) {
        case "Mahindra":
          mm_2020 = item["all_data_iter_4.total_revenue"];
          break;
        case "Maruthi":
          mar_2020 = item["all_data_iter_4.total_revenue"];
          break;
        case "Tata":
          tata_2020 = item["all_data_iter_4.total_revenue"];
          break;
      }
    });
  linegraphdata
    .filter((item) => item["all_data_iter_4.date_year"] === 2021)
    .map((item, index) => {
      switch (item["all_data_iter_4.company"]) {
        case "Mahindra":
          mm_2021 = item["all_data_iter_4.total_revenue"];
          break;
        case "Maruthi":
          mar_2021 = item["all_data_iter_4.total_revenue"];
          break;
        case "Tata":
          tata_2021 = item["all_data_iter_4.total_revenue"];
          break;
      }
    });
  linegraphdata
    .filter((item) => item["all_data_iter_4.date_year"] === 2022)
    .map((item, index) => {
      switch (item["all_data_iter_4.company"]) {
        case "Mahindra":
          mm_2022 = item["all_data_iter_4.total_revenue"];
          break;
        case "Maruthi":
          mar_2022 = item["all_data_iter_4.total_revenue"];
          break;
        case "Tata":
          tata_2022 = item["all_data_iter_4.total_revenue"];
          break;
      }
    });
  const data = [
    {
      name: "2020",
      Mahindra: mm_2020,
      Maruthi: mar_2020,
      Tata: tata_2020,
    },
    {
      name: "2021",
      Mahindra: mm_2021,
      Maruthi: mar_2021,
      Tata: tata_2021,
    },
    {
      name: "2022",
      Mahindra: mm_2022,
      Maruthi: mar_2022,
      Tata: tata_2022,
    },
  ];
  return (
    <>
      <div className="rightsidebar">
        <div className="rightmanage">
          <div className="rightbar__topcontainer">
            <div className="rightbar__top">
              <p style={{ whiteSpace: "nowrap" }}>Competitors analysis</p>
              <div className="topicons">
                <FileDownloadOutlinedIcon />
              </div>
            </div>
            <div className="rightbar__options">
              <div className="optionscontainer">
                <p>Company</p>
              </div>
            </div>
            <div className="radiobutton">
              <div className="first-line">
                <input
                  onChange={selectCompanyHandler}
                  type="radio"
                  id="mahindra"
                  name="brand_name"
                  value="Mahindra"
                  defaultChecked
                />
                <label htmlFor="html">Mahindra</label>
                <input
                  onChange={selectCompanyHandler}
                  type="radio"
                  id="tata"
                  name="brand_name"
                  value="Tata"
                />
                <label htmlFor="css">Tata Motors</label>
              </div>
              <div className="second-line">
                <input
                  onChange={selectCompanyHandler}
                  type="radio"
                  id="maruthi"
                  name="brand_name"
                  value="Maruthi"
                />
                <label htmlFor="Maruthi">Maruthi</label>
              </div>
            </div>
            <hr style={{ width: "353px" }}></hr>
            <div className="rightbarbottomcontainer">
              <div className="brandname">
                <p>Mahindra & Mahindra</p>
              </div>

              <div className="rightbarbottom__options">
                <div className="options1container">
                  <select
                    name="vehiles"
                    id="vehicle"
                    onChange={onVehicleHandler}
                  >
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                  </select>
                </div>
                <div>
                  <div className="options2container" onChange={onYearHandler}>
                    <select name="duration" id="duration">
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                    </select>
                  </div>
                </div>

                <div className="options3container">
                  <select name="region" id="region" onChange={onZoneHandler}>
                    <option value="East">East</option>
                    <option value="North">North </option>
                    <option value="South">South</option>
                    <option value="West">West</option>
                  </select>
                </div>
              </div>
              <div className="data">
                <div className="datafirst-line">
                  {salesdata
                    .filter(
                      (item) =>
                        item["all_data_iter_4.date_year"] ===
                          parseInt(selectedYear) &&
                        item["all_data_iter_4.fuel_type"] == selectedVehicle &&
                        item["all_data_iter_4.zone"] == selectedZone
                    )
                    .map((item, index) => {
                      switch (item["all_data_iter_4.date_year"]) {
                        case 2022:
                          sales = item["all_data_iter_4.total_revenue"];
                          rev = mm_2022;
                          cont = (sales / rev) * 100;
                          break;
                        case 2021:
                          sales = item["all_data_iter_4.total_revenue"];
                          rev = mm_2021;
                          cont = (sales / rev) * 100;
                          break;
                        case 2020:
                          sales = item["all_data_iter_4.total_revenue"];
                          rev = mm_2020;
                          cont = (sales / rev) * 100;
                          break;
                      }
                    })}
                  <p>Total sale</p>
                </div>
                <div className="datasecond-line">
                  <h4>{formatNumber(sales ? sales.toFixed(0) : 0)} Cr</h4>
                </div>
                <div className="datafirst-line" style={{ marginTop: "10px" }}>
                  <p style={{ whiteSpace: "nowrap" }}>Total revenue</p>
                  <p>Contribution</p>
                </div>
                <div className="datasecond-line">
                  <h4 style={{ whiteSpace: "nowrap" }}>
                    {formatNumber(rev ? rev.toFixed(0) : 0)} Cr
                  </h4>
                  <h4 style={{ whiteSpace: "nowrap" }}>
                    {cont ? cont.toFixed(1) : 0}%
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="competitorgraph" style={{ width: "100%" }}>
          <p>Competitors analysis</p>
          <ResponsiveContainer width="100%" height={200}> {/* Reduced height */}
  <LineChart
    width={500}
    height={200} 
    data={data}
    margin={{
      top: 20,
      right: 20,
      left: 20,
      bottom: 0,
    }}
    fill="transparent"
  >
              <Tooltip />
              <Line
                type="monotone"
                dataKey="Mahindra"
                strokeOpacity={opacity.Mahindra}
                stroke="#FA5775"
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="Tata"
                strokeOpacity={opacity.Maruthi}
                stroke="#6DCAFE"
              />
              <Line
                type="monotone"
                dataKey="Maruthi"
                strokeOpacity={opacity.Maruthi}
                stroke="#BB79E2"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p style={{ whiteSpace: "nowrap" }}>
          <span className="year">2020 </span>
          <span className="year">2021 </span>
          <span className="year">2022 </span>
        </p>
      </div>
    </>
  );
};
export default RightSideBar;
