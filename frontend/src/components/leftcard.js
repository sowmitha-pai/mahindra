import React from "react";
import "./style.css";
import HalfpieChart from "./halfpiechart";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

const leftcard = ({}) => {
  return (
    <>
      <div style={{ padding: "10px" }}>
        <div
          style={{
            marginBottom: "1rem",
            fontSize: "35px",
            fontWeight: "500",
            marginRight: "60px",
          }}
        >
          Total sales
        </div>
        <div
          style={{ marginBottom: "1rem", fontSize: "60px", fontWeight: "600" }}
        >
          121,987 Cr
        </div>
        <div>
          <div style={{ display: "flex" }}>
            <div style={{ flex: 1 }}>
              <div
                style={{ fontSize: "16px", fontWeight: "400", color: "grey" }}
              >
                Total Qty
              </div>
              <div style={{ marginTop: "5px", fontWeight: "900" }}>
                12,285 Vehicles
              </div>
            </div>
            <div style={{ flex: 1.6 }}>
              <div
                style={{ fontSize: "16px", fontWeight: "400", color: "grey" }}
              >
                Profit
              </div>
              <div style={{ marginTop: "5px", fontWeight: "900" }}>
                10,282 Cr
              </div>
            </div>
          </div>
          {/* <div style={{display:"flex"}}>
    
      <span>+10%</span>
      <h5>10,282 Cr</h5>
      <span>+10%</span>
      </div> */}
        </div>
      </div>
      <div
        style={{
          // backgroundColor: "white",
          width: "100%",
          // height: "430px",
          borderRadius: "10px",
          // padding: "10px",
        }}
      >
        <div style={{ padding: "10px" }}>
          <div
            style={{
              backgroundColor: "white",
              padding: "10px",
              borderRadius: "10px",
              width: "350px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingBottom: "10px",
                fontSize: "13px",
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "18px",
                }}
              >
                Product sale
              </span>
              <span style={{ display: "flex", alignItems: "center" }}>
                <div>
                  <FilterAltOutlinedIcon />
                </div>
                <div>filter</div>
              </span>
            </div>
            <div
              style={{
                backgroundColor: "#E5F6FB",
                height: "25px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "11px",
                color: "#ccc",
              }}
            >
              <div></div>
              <div style={{ fontSize: "15px" }}>Name</div>
              <div style={{ fontSize: "15px" }}>Revenue</div>
              <div style={{ fontSize: "15px" }}>Qty</div>
              <div style={{ fontSize: "15px" }}>Sale</div>
            </div>
            <div
              style={{
                height: "35px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #ccc", // Gray color border
                // borderRadius: "0px 0px 5px 5px",
                fontSize: "12px",
              }}
            >
              <span
                style={{
                  width: "5px",
                  height: "20px",
                  backgroundColor: "orange",
                  display: "inline-block",
                }}
              ></span>
              <span style={{ color: "gray", fontSize: "16px" }}>Thar</span>
              <span
                style={{ fontSize: "16px", fontWeight: "800", color: "black" }}
              >
                4,296 Cr
              </span>
              <span style={{ color: "gray", fontSize: "16px" }}>320</span>
              <span style={{ color: "gray", fontSize: "16px" }}>13%</span>
            </div>
            <div
              style={{
                height: "35px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #ccc", // Gray color border
                // borderRadius: "0px 0px 5px 5px",
                fontSize: "12px",
              }}
            >
              <span
                style={{
                  width: "5px",
                  height: "20px",
                  backgroundColor: "red",
                  display: "inline-block",
                }}
              ></span>
              <span style={{ color: "gray", fontSize: "16px" }}>XUV700</span>
              <span
                style={{ fontSize: "16px", fontWeight: "800", color: "black" }}
              >
                5,125 Cr
              </span>
              <span style={{ color: "gray", fontSize: "16px" }}>320</span>
              <span style={{ color: "gray", fontSize: "16px" }}>18%</span>
            </div>
            <div
              style={{
                height: "35px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #ccc", // Gray color border
                // borderRadius: "0px 0px 5px 5px",
                fontSize: "12px",
              }}
            >
              <span
                style={{
                  width: "5px",
                  height: "20px",
                  backgroundColor: "skyblue",
                  display: "inline-block",
                }}
              ></span>
              <span style={{ color: "gray", fontSize: "16px" }}>XUV300</span>
              <span
                style={{ fontSize: "16px", fontWeight: "800", color: "black" }}
              >
                5,125 Cr
              </span>
              <span style={{ color: "gray", fontSize: "16px" }}>320</span>
              <span style={{ color: "gray", fontSize: "16px" }}>16%</span>
            </div>
            <div
              style={{
                height: "35px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #ccc", // Gray color border
                // borderRadius: "0px 0px 5px 5px",
                fontSize: "12px",
              }}
            >
              <span
                style={{
                  width: "5px",
                  height: "20px",
                  backgroundColor: "purple",
                  display: "inline-block",
                }}
              ></span>
              <span style={{ color: "gray", fontSize: "16px" }}>Bolero</span>
              <span
                style={{ fontSize: "16px", fontWeight: "800", color: "black" }}
              >
                1000 Cr
              </span>
              <span style={{ color: "gray", fontSize: "16px" }}>320</span>
              <span style={{ color: "gray", fontSize: "16px" }}>25%</span>
            </div>
            <div
              style={{
                height: "35px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #ccc", // Gray color border
                // borderRadius: "0px 0px 5px 5px",
                fontSize: "12px",
              }}
            >
              <span
                style={{
                  width: "5px",
                  height: "20px",
                  backgroundColor: "green",
                  display: "inline-block",
                }}
              ></span>
              <span style={{ color: "gray", fontSize: "16px" }}>Scorpio</span>
              <span
                style={{ fontSize: "16px", fontWeight: "800", color: "black" }}
              >
                1000 Cr
              </span>
              <span style={{ color: "gray", fontSize: "16px" }}>320</span>
              <span style={{ color: "gray", fontSize: "16px" }}>28%</span>
            </div>
            <div>
              <HalfpieChart />
            </div>
            <div
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "12px",
              }}
            >
              <div style={{ flex: 1, display: "flex", marginTop: "20px" }}>
                <div
                  style={{
                    backgroundColor: "#4A0404",
                    height: "10px",
                    borderRadius: "10px",
                    width: "10px",
                    marginRight: "10px",
                    marginTop: "4px",
                  }}
                ></div>
                <div style={{ fontSize: "16px" }}>Thar</div>
              </div>
              <div style={{ flex: 1, display: "flex", marginTop: "20px" }}>
                <div
                  style={{
                    backgroundColor: "#770737",
                    height: "10px",
                    borderRadius: "10px",
                    width: "10px",
                    marginRight: "10px",
                    marginTop: "4px",
                  }}
                ></div>
                <div style={{ fontSize: "16px" }}>XUV300</div>
              </div>
              <div style={{ flex: 1, display: "flex", marginTop: "20px" }}>
                <div
                  style={{
                    backgroundColor: "#E0115F",
                    height: "10px",
                    borderRadius: "10px",
                    width: "10px",
                    marginRight: "10px",
                    marginTop: "4px",
                  }}
                ></div>
                <div style={{ fontSize: "16px" }}>Bolero</div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                textAlign: "center",
                marginBottom: "20px",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "12px",
              }}
            >
              <div style={{ flex: 1, display: "flex", marginTop: "20px" }}>
                <div
                  style={{
                    backgroundColor: "#E30B5C",
                    height: "10px",
                    borderRadius: "10px",
                    width: "10px",
                    marginRight: "10px",
                    marginTop: "4px",
                  }}
                ></div>
                <div style={{ fontSize: "16px" }}>Scorpio</div>
              </div>
              <div style={{ flex: 1, display: "flex", marginTop: "20px" }}>
                <div
                  style={{
                    backgroundColor: "#E30B5C",
                    height: "10px",
                    borderRadius: "10px",
                    width: "10px",
                    marginRight: "10px",
                    marginTop: "4px",
                  }}
                ></div>
                <div style={{ fontSize: "16px" }}>XUV700</div>
              </div>
              <div style={{ flex: 1, display: "flex", marginTop: "20px" }}>
                {/* <div style={{ backgroundColor: 'red', height: '10px', borderRadius:'10px', width:'10px',marginRight:'5px'}}></div>
           <div style={{ fontSize:'16px' }}>Scorpio</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default leftcard;
