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

function Sales({ text, label }) {
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

  return (
    <div style={{ width: "100%" }}>
      <div className="sales" style={{ padding: "20px" }}>
        <div style={{ display: "flex", height: "700px" }}>
          <div style={{ flex: 1 }}>
            <Leftcard />
          </div>
          <div
            style={{
              flex: 2,
              marginLeft: "-30px",
              position: "relative",
              overflow: "hidden",
            }}
          >
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
              />
            </div>

            {pointers.map((pointer) => (
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
              >
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
                  {/* {pointer.content} */}
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
        <div style={{ paddingTop: "50px", display: "flex" }}>
          <div style={{ flex: 1 }}>
            <div style={{ width: "100%" }}>
              <Cards />
            </div>
            {/* <Cards /> */}
          </div>
          {/* <span></span> */}
          <div style={{ flex: 1 }}>
            <div style={{ width: "100%" }}>
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  textAlign: "center",
                  marginBottom: "80px",
                  marginLeft: "-220px",
                }}
              >
                Inventory metrics
              </div>
              <div
                style={{
                  marginRight: "200px",
                  marginLeft: "30px",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Piechart />
              </div>
            </div>

            {/* <LineChart/> */}
          </div>
          {/* <div style={{ flex: 1, position: "relative", top: "-240px" }}>
            <div style={{ flex: 1 }}>
              <LineChart1 />
            </div>
            <div style={{ marginLeft: "-200" }}>
              <LineChart />
            </div>
          </div> */}
        </div>
      </div>

      <div className="copy">
        <p>Copyright @ 2023 mahindra rise. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Sales;
