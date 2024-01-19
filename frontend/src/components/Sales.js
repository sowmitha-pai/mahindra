import { React, useState,useEffect } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import "../App.css";
import "./style.css";
import Cards from "./Cards";
import Leftcard from "./leftcard";
import LineChart from "./linechart";
import LineChart1 from "./linechart1";
import Piechart from "./piechart";
import Tooltip from "@mui/material/Tooltip";
import SalesTool from "./SalesTool";
import { salesMap } from "../api/Look";

function Sales({ text, label }) {
  let north_rev=0,south_rev=0,east_rev=0,west_rev=0;
  const [sel_year, setYear] = useState("2022");
  const [mapdata,setMapData]=useState([])
  const selectYearFunc = (event) => {
    setYear(event.target.value);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await salesMap();
        setMapData(result.success);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  

  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = () => {
    setZoomLevel((prevZoomLevel) => Math.min(3, prevZoomLevel + 0.1));
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoomLevel) => Math.max(0.5, prevZoomLevel - 0.1));
  };

  const calculateZoomedPosition = (position) => {
    return position * zoomLevel;
  };

  const [isHovered1, setIsHovered1] = useState("");

  const handleMouseEnter1 = (e, index) => {
    setIsHovered1(index);
    console.log(isHovered1);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };
  mapdata.filter((item)=>item["all_data_iter_4.date_year"]===parseInt(sel_year)).map((item,index)=>{
    switch(item["all_data_iter_4.zone"]){
      case "West":
        west_rev=item["all_data_iter_4.total_revenue"].toFixed(2);;
        break
      case "East":
        east_rev=item["all_data_iter_4.total_revenue"].toFixed(2);;
        break
      case "North":
        north_rev=item["all_data_iter_4.total_revenue"].toFixed(2);
        break
      case "South":
        south_rev=item["all_data_iter_4.total_revenue"].toFixed(2);;
        break
    }
  })
  const pointers = [
    { id: 1, left: 220, top: 200 , color: '#FF0000',content: { title: "Northern Zone", value: north_rev } },
    { id: 2, left: 120, top: 400 , color:'#FFA500',content: { title: "Western Zone", value: west_rev } },
    { id: 3, left: 430, top: 380 , color: '#000000',content: { title: "Eastern Zone", value: east_rev } },
    { id: 4, left: 235, top: 565 , color: '#008000',content: { title: "Southern Zone", value: south_rev } },
  ];
  return (
    <div style={{ width: "100%" }}>
      <div className="sales" style={{ padding: "20px" }}>
        <select name="year" id="years" onChange={selectYearFunc}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
        <div style={{ display: "flex", height: "700px" }}>
          <div style={{ flex: 1 }}>
            <Leftcard sel_year={sel_year} />
          </div>
          <div
            style={{
              flex: 2,
              marginLeft: "-30px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* MAP */}
            <div
              style={{
                transform: `scale(${zoomLevel})`,
                transition: "transform 0.3s ease-in-out",
              }}
            >
              <img
                src={"/Map.png"}
                style={{
                  width: "650px",
                  height: "auto",
                  borderRadius: "8px",
                  aspectRatio: "auto",
                  cursor: "grab",
                }}
                alt="map"
              />
            </div>

            {pointers.map((pointer, index) => (
              <div
                key={pointer.id}
                style={{
                  position: "absolute",
                  left: calculateZoomedPosition(pointer.left),
                  top: calculateZoomedPosition(pointer.top),
                  transform: "translate(-50%, -50%)",
                  width: "10px",
                  height: "10px",
                  backgroundColor: "red", // Customize the color as needed
                  borderRadius: "50%",
                  // cursor: "pointer",
                }}
                onMouseEnter={(e) => handleMouseEnter1(e, index)}
                onMouseLeave={handleMouseLeave1}
              >
                <Tooltip
                  open={isHovered1 === index}
                  onClose={handleMouseLeave1}
                  title={<SalesTool />}
                >
                  {/* <SalesTool /> */}
                </Tooltip>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "8px",
                    padding: "10px",
                    fontSize: "12px",
                    width: "100px",
                    height: "15px",
                    position: "absolute",
                    bottom: "30px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      width: "0.5px",
                      height: "25px",
                      backgroundColor: "blue",
                      borderRadius: "2px",
                      display: "flex",
                      color: "white",
                      paddingRight: "4px",
                    }}
                  ></span>
                   <span style={{padding: '8px'}}>
                    <p>{pointer.content.title}</p>
                    <h2>{pointer.content.value}</h2>
                  </span>
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "50%",
                    width: 0,
                    height: 0,
                    borderLeft: "10px solid transparent",
                    borderRight: "10px solid transparent",
                    borderTop: "10px solid #ffffff",
                    transform: "translateX(-50%)",
                  }}
                ></div>
              </div>
            ))}
          </div>
          <div
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
              // backgroundColor:'purple',
              padding: "40px",
              left: "60%",
              top: "20%",
              display: "flex",
              flexDirection: "column",
              width: "20px",
            }}
          >
            <button onClick={handleZoomIn} style={{ marginBottom: "3px" }}>
              +
            </button>
            <button onClick={handleZoomOut}>-</button>
          </div>
        </div>

        {/* LINE CHART */}
        <div
          style={{
            flex: 1,
            // width: "30%",
            width: "30%",
            position: "absolute",
            top: "55%",
            right: "5rem",
          }}
        >
          <LineChart1 sel_year={sel_year} />
        </div>
      </div>

      {/* CHARTS CONTAINER */}
      <div className="charts-container">
        <Cards />
        <div>
          <h4 className="pieChart-heading">Inventory metrics</h4>
          <Piechart sel_year={sel_year}/>
        </div>

        <LineChart sel_year={sel_year} />
      </div>
      {/* <LineChart sel_year={sel_year} /> */}
      <div className="copy">
        <p>Copyright @ 2023 mahindra rise. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Sales;
