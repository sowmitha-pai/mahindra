import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  CartesianGrid,
  ResponsiveContainer,
  defs,
  linearGradient,
  stop,
  YAxis,
  Tooltip,
} from "recharts";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import {
 funnelData,
 funnelEntityData,
 entityPercentDifference,
} from "../api/Look.js";
import {TooltipBar_Enq, TooltipBar_testDrives, TooltipBar_bk, TooltipBar_ts} from "./TooltipBar";


const Graph = ({ sel_year }) => {
 let Enquiries,
   Test_Drives,
   Booking,
   Total_Sales,
   tot_booking,
   tot_enq,
   tot_sales,
   tot_test_drives;
 //let enq_a, enq_b, td_a, td_b, bk_a, bk_b, ts_a, ts_b;
 // let enq_diff, td_diff, bk_diff, ts_diff;
 let enq_a,enq_b, td_a, td_b, bk_a, bk_b, ts_a, ts_b;
 let drop_off1,drop_off2,drop_off3,conversion;
 const [funneldata, setFunnelData] = useState([]);
 const [funnelEntitydata, setFunnelEntityData] = useState([]);
 const [funnelEntityPercentdata, setFunnelEntityPercentData] = useState([]);
  // const [isHovered, setIsHovered] = useState(false);


 useEffect(() => {
   const fetchData = async () => {
     try {
       const result = await funnelData();
       setFunnelData(result.success);
     } catch (error) {
       console.error("Error fetching data:", error);
     }
   };


   fetchData();
 }, []);


 useEffect(() => {
   const fetchData = async () => {
     try {
       const result = await funnelEntityData();
       setFunnelEntityData(result.success);
     } catch (error) {
       console.error("Error fetching data:", error);
     }
   };


   fetchData();
 }, []);


 useEffect(() => {
   const fetchData = async () => {
     try {
       const result = await entityPercentDifference();
       setFunnelEntityPercentData(result.success);
     } catch (error) {
       console.error("Error fetching data:", error);
     }
   };


   fetchData();
 }, []);




 funneldata
   .filter((item) => item["all_data_iter_4.date_year"] === parseInt(sel_year))
   .map((item, index) => {
     Enquiries = item["all_data_iter_4.Enquiries"];
     Test_Drives = item["all_data_iter_4.Test_Drives"];
     Booking = item["all_data_iter_4.Booking"];
     Total_Sales = item["all_data_iter_4.Total_Sales"];
   });
   funnelEntitydata.filter((item)=>item["all_data_iter_4.date_year"] === parseInt(sel_year)).map((item,index)=>{
     drop_off1=((item["all_data_iter_4.Sum_of_Inquiries"]-item["all_data_iter_4.Total_testdrive"])/item["all_data_iter_4.Sum_of_Inquiries"]*100).toFixed(2)
     drop_off2=((item["all_data_iter_4.Total_testdrive"]-item["all_data_iter_4.Total_Bookings"])/item["all_data_iter_4.Total_testdrive"]*100).toFixed(2)
     drop_off3=((item["all_data_iter_4.Total_Bookings"]-item["all_data_iter_4.Total_sales_mahindra"])/item["all_data_iter_4.Total_Bookings"]*100).toFixed(2)
     conversion=((item["all_data_iter_4.Sum_of_Inquiries"]-item["all_data_iter_4.Total_sales_mahindra"])/item["all_data_iter_4.Sum_of_Inquiries"]*100).toFixed(2)
   })
   funnelEntitydata.filter((item)=>item["all_data_iter_4.date_year"] === parseInt(sel_year)).map((item,index)=>{
     enq_a=item["all_data_iter_4.Sum_of_Inquiries"]
     td_a=item["all_data_iter_4.Total_testdrive"]
     bk_a=item["all_data_iter_4.Total_Bookings"]
     ts_a=item["all_data_iter_4.Total_sales_mahindra"]
   })
   if(sel_year!=2020){
     funnelEntitydata.filter((item)=>item["all_data_iter_4.date_year"] === parseInt(sel_year)-1).map((item,index)=>{
       enq_b=item["all_data_iter_4.Sum_of_Inquiries"]
       td_b=item["all_data_iter_4.Total_testdrive"]
       bk_b=item["all_data_iter_4.Total_Bookings"]
       ts_b=item["all_data_iter_4.Total_sales_mahindra"]
  })
    
   }
  else{
    enq_b=td_b=bk_b=ts_b="NA"
  }


 const data = [
   { name: "Segment 1", value: Enquiries },
   { name: "Segment 2", value: Test_Drives },
 ];


 const data1 = [
   { name: "Segment 1", value: Test_Drives },
   { name: "Segment 2", value: Booking },
 ];
 const data2 = [
   { name: "Segment 1", value: Booking },
   { name: "Segment 2", value: Total_Sales },
 ];
 const data3 = [
   { name: "Segment 1", value: Total_Sales },
   { name: "Segment 2", value: Total_Sales },
 ];
 const graphContainerStyle = {
   position: "relative",
   textAlign: "center",
   paddingTop: "50px",
   // paddingBottom: '0px',
   left: "10px",
 };


 const graphContainerStyle1 = {
   position: "relative",
   textAlign: "center",
   paddingTop: "50px",
   // paddingBottom: '50px',
 };
 const graphContainerStyle2 = {
   position: "relative",
   textAlign: "center",
   paddingTop: "50px",
   // paddingBottom: '50px',
   right: "10px",
 };
 const graphContainerStyle3 = {
   position: "relative",
   textAlign: "center",
   paddingTop: "50px",
   // paddingBottom: '50px',
   right: "20px",
 };
 const graphLineStyle = {
   content: '""',
   position: "absolute",
   top: 0,
   bottom: "20px",
   right: "2px", // Adjust this value as needed to align the line with the graph
   borderRight: "2px solid #8e918f", // Change the style of the connecting line here
 };


 // const [isHovered, setIsHovered] = useState(null);
 const [isHovered1, setIsHovered1] = useState(false);
 const [isHovered2, setIsHovered2] = useState(false);
 const [isHovered3, setIsHovered3] = useState(false);
 const [isHovered4, setIsHovered4] = useState(false);

 const graphstyle = {
  display: "flex",
  marginLeft: "90px",
};
function formatNumber(num) {
  return (+num).toLocaleString("en-US");
}


 // const handleMouseEnter = () => {
 //   setIsHovered(true);
 // };


 // const handleMouseLeave = () => {
 //   setIsHovered(false);
 // };
 const handleMouseEnter1 = () => {
   console.log("true");
   setIsHovered1(true);
   console.log(isHovered1);
 };


 const handleMouseLeave1 = () => {
   setIsHovered1(false);
 };


 const handleMouseEnter2 = () => {
   setIsHovered2(true);
 };


 const handleMouseLeave2 = () => {
   setIsHovered2(false);
 };


 const handleMouseEnter3 = () => {
   setIsHovered3(true);
 };


 const handleMouseLeave3 = () => {
   setIsHovered3(false);
 };


 const handleMouseEnter4 = () => {
   setIsHovered4(true);
 };


 const handleMouseLeave4 = () => {
   setIsHovered4(false);
 };


 // const headerData=[
 //   {name1:"Enquiries"},
 //   {name2:"Test Drives"},
 //   {name3:"Bookings"},
 //   {name4:"Purchases"}
 // ]


 return (
  <div
    style={{
      display: "flex",
      justifyContent: "flex-start", // or "center"
      alignItems: "center",
      border: "2px solid #DFE6EA",
      borderRadius: "10px",
      paddingTop: "20px",
      marginTop: "40px",
      marginLeft: "30px",
      height: "650px",
      width: "1600px",
    }}
  >
    <div style={graphstyle}>
      <div style={graphContainerStyle}>
        <div
          style={{
            color: "#8e918f",
            fontSize: 14,
            display: "flex",
            paddingLeft: " 20px",
          }}
        >
          Step 1
        </div>
        <div
          style={{
            display: "flex",
            paddingLeft: " 20px",
            paddingTop: "20px",
            fontSize: 16,
          }}
        >
          Enquiries
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: " 20px",
            paddingTop: "5px",
          }}
        >
          <span style={{ fontWeight: "bold", fontSize: "25px" }}>
            {formatNumber(enq_a)}
          </span>
          <span
            style={{ color: "#8e918f", fontSize: "14px", marginTop: "5px" }}
          >
            {formatNumber(enq_b)} last year
          </span>
        </div>
        <ResponsiveContainer width={350} height={350}>
          <AreaChart data={data}>
          <Tooltip active={isHovered1} content={<TooltipBar_Enq sel_year={sel_year}/>} />

            <defs>
              <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="red" />
                <stop offset="95%" stopColor="maroon" />
              </linearGradient>
            </defs>
            <YAxis
              domain={[20000000, 40000000]}
              ticks={[
                20000000, 24000000, 28000000, 32000000, 36000000, 40000000,
              ]}
              hide={true}
              tickLine={false}
            />
            <CartesianGrid strokeDasharray="3 3" />
            <Area
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              fill="url(#gradient1)"
            />
          </AreaChart>
        </ResponsiveContainer>

        <div style={{ marginTop: "10px" }}>
          <FontAwesomeIcon
            icon={faArrowCircleDown}
            style={{ color: "#F90000", height: "28px" }}
          />
        </div>
        <div style={{ color: "#8e918f", fontSize: 14, paddingTop: "5px" }}>
          Drop off
        </div>
        <div
          style={{
            color: "#F90000",
            paddingTop: "5px",
            fontWeight: "600",
            fontSize: "20px",
          }}
        >
          {drop_off1}%
        </div>
        <div style={graphLineStyle}></div>
      </div>

      <div style={graphContainerStyle1}>
        <div
          style={{
            color: "#8e918f",
            fontSize: 14,
            display: "flex",
            paddingLeft: " 20px",
          }}
        >
          Step 2
        </div>
        <div
          style={{
            display: "flex",
            paddingLeft: " 20px",
            paddingTop: "20px",
            fontSize: 16,
          }}
        >
          Test drives
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: " 20px",
            paddingTop: "5px",
          }}
        >
          <span style={{ fontWeight: "bold", fontSize: "25px" }}>
            {formatNumber(td_a)}
          </span>
          <span
            style={{ color: "#8e918f", fontSize: "14px", marginTop: "5px" }}
          >
            {formatNumber(td_b)} last year
          </span>
        </div>
        <ResponsiveContainer width={350} height={350}>
          <AreaChart data={data1}>
          <Tooltip active={isHovered2} content={<TooltipBar_testDrives sel_year={sel_year}/>} />

            <defs>
              <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="red" />
                <stop offset="95%" stopColor="maroon" />{" "}
                {/* Change the stopColor here */}
              </linearGradient>
            </defs>
            <YAxis
              domain={[20000000, 40000000]}
              ticks={[
                20000000, 24000000, 28000000, 32000000, 36000000, 40000000,
              ]}
              hide={true}
              tickLine={false}
            />
            <CartesianGrid strokeDasharray="3 3" />
            <Area
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              fill="url(#gradient2)"
            />
          </AreaChart>
        </ResponsiveContainer>

        <div style={{ marginTop: "10px" }}>
          <FontAwesomeIcon
            icon={faArrowCircleDown}
            style={{ color: "#F90000", height: "28px" }}
          />
        </div>
        <div style={{ color: "#8e918f", fontSize: 14, paddingTop: "5px" }}>
          Drop off
        </div>
        <div
          style={{
            color: "#F90000",
            paddingTop: "5px",
            fontWeight: "600",
            fontSize: "20px",
          }}
        >
          {drop_off2}%
        </div>
        <div style={graphLineStyle}></div>
      </div>

      <div style={graphContainerStyle2}>
        <div
          style={{
            color: "#8e918f",
            fontSize: 14,
            display: "flex",
            paddingLeft: " 20px",
          }}
        >
          Step 3
        </div>
        <div
          style={{
            display: "flex",
            paddingLeft: " 20px",
            paddingTop: "20px",
            fontSize: 16,
          }}
        >
          Bookings
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: " 20px",
            paddingTop: "5px",
          }}
        >
          <span style={{ fontWeight: "bold", fontSize: "25px" }}>
            {formatNumber(bk_a)}
          </span>
          <span
            style={{ color: "#8e918f", fontSize: "14px", marginTop: "5px" }}
          >
            {formatNumber(bk_b)} last year
          </span>
        </div>
        <ResponsiveContainer width={350} height={350}>
          <AreaChart data={data2}>
          <Tooltip active={isHovered3} content={<TooltipBar_bk sel_year={sel_year}/>} />

            <defs>
              <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="red" />
                <stop offset="95%" stopColor="maroon" />
              </linearGradient>
            </defs>
            <YAxis
              domain={[20000000, 40000000]}
              ticks={[
                20000000, 24000000, 28000000, 32000000, 36000000, 40000000,
              ]}
              hide={true}
              tickLine={false}
            />
            <CartesianGrid strokeDasharray="3 3" />
            <Area
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              fill="url(#gradient2)"
            />
          </AreaChart>
        </ResponsiveContainer>

        <div style={{ marginTop: "10px" }}>
          <FontAwesomeIcon
            icon={faArrowCircleDown}
            style={{ color: "#F90000", height: "28px" }}
          />
        </div>
        <div style={{ color: "#8e918f", fontSize: 14, paddingTop: "5px" }}>
          Drop off
        </div>
        <div
          style={{
            color: "#F90000",
            paddingTop: "5px",
            fontWeight: "600",
            fontSize: "20px",
          }}
        >
          {drop_off3}%
        </div>
        <div style={graphLineStyle}></div>
      </div>

      <div style={graphContainerStyle3}>
        <div
          style={{
            color: "#8e918f",
            fontSize: 14,
            display: "flex",
            paddingLeft: " 20px",
          }}
        >
          Step 4
        </div>
        <div
          style={{
            display: "flex",
            paddingLeft: " 20px",
            paddingTop: "20px",
            fontSize: 16,
          }}
        >
          Purchases
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: " 20px",
            paddingTop: "5px",
          }}
        >
          <span style={{ fontWeight: "bold", fontSize: "25px" }}>
            {formatNumber(ts_a)}
          </span>
          <span
            style={{ color: "#8e918f", fontSize: "14px", marginTop: "5px" }}
          >
            {formatNumber(ts_b)} last year
          </span>
        </div>
        <ResponsiveContainer width={350} height={350}>
          <AreaChart data={data3}>
          <Tooltip active={isHovered4} content={<TooltipBar_ts sel_year={sel_year}/>} />

            <defs>
              <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="red" />
                <stop offset="95%" stopColor="maroon" />
              </linearGradient>
            </defs>
            <YAxis
              domain={[20000000, 40000000]}
              ticks={[
                20000000, 24000000, 28000000, 32000000, 36000000, 40000000,
              ]}
              hide={true}
              tickLine={false}
            />
            <CartesianGrid strokeDasharray="3 3" />
            <Area
              onMouseEnter={handleMouseEnter4}
              onMouseLeave={handleMouseLeave4}
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              fill="url(#gradient2)"
            />
          </AreaChart>
        </ResponsiveContainer>

        <div style={{ marginTop: "10px" }}>
          <FontAwesomeIcon
            icon={faCircleCheck}
            style={{ color: "#00C066", height: "28px" }}
          />
        </div>
        <div
          classname="funneldroppoff"
          style={{ color: "#8e918f", fontSize: 12, paddingTop: "5px" }}
        >
          Conversion
        </div>
        <div
          style={{
            color: "#00C066",
            paddingTop: "5px",
            fontWeight: "600",
            fontSize: "20px",
          }}
        >
          {conversion}%
        </div>
        {/* <div style={graphLineStyle}></div> */}
      </div>
    </div>
  </div>
);
};

export default Graph;