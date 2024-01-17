import { React, useState } from "react";
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

function Sales({ text, label }) {
  const [sel_year, setYear] = useState("2022");
  const selectYearFunc = (event) => {
    setYear(event.target.value);
  };

  const pointers = [
    { id: 1, left: 220, top: 200, content: "Pointer 1: Details go here" },
    { id: 2, left: 120, top: 400, content: "Pointer 2: Details go here" },
    { id: 3, left: 430, top: 380, content: "Pointer 3: Details go here" },
    { id: 4, left: 235, top: 565, content: "Pointer 4: Details go here" },
  ];

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
                  <span style={{ padding: "5px" }}>
                    <p>Northern Zone</p>
                    <h2>57,445.97</h2>
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
          <Piechart />
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
