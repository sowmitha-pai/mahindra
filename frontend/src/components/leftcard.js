import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import HalfpieChart from "./halfpiechart";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { mahindraMetrics, productSale } from "../api/Look.js";
import { isMuiElement } from "@mui/material";
import { useNavigate } from "react-router-dom";
//import { totalSales } from "../../../backend/service/user.service.js";

const Leftcard = ({ sel_year }) => {
  let mah_profit = 0,
    mah_rev = 0,
    mah_ts;
  //const sel_year=2022;
  let thar_qty,
    thar_rev,
    thar_sale = 0,
    scorpio_qty,
    scorpio_rev,
    scorpio_sale = 0,
    bolero_rev,
    bolero_qty,
    bolero_sale = 0,
    xuv700_qty,
    xuv700_rev,
    xuv700_sale = 0,
    xuv300_rev,
    xuv300_qty,
    xuv300_sale = 0;
  const [productSaledata, setProductSaleData] = useState([]);
  const [mahindraMetricsdata, setMahindraMetricsData] = useState([]);
  const clickCount = useRef(0);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await productSale();
        setProductSaleData(result.success);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  {
    productSaledata
      .filter(
        (item) => item["all_data_iter_4.date_year"] === parseInt(sel_year)
      )
      .map((item, index) => {
        switch (item["all_data_iter_4.product_sku"]) {
          case "Thar":
            thar_rev = parseInt(item["all_data_iter_4.total_revenue"]);
            thar_qty = item["all_data_iter_4.Total_Sales"];
            break;
          case "Scorpio Pickup":
            scorpio_rev = parseInt(item["all_data_iter_4.total_revenue"]);
            scorpio_qty = item["all_data_iter_4.Total_Sales"];
            break;
          case "Bolero Pickup":
            bolero_rev = parseInt(item["all_data_iter_4.total_revenue"]);
            bolero_qty = item["all_data_iter_4.Total_Sales"];
            break;
          case "XUV700":
            xuv700_rev = parseInt(item["all_data_iter_4.total_revenue"]);
            xuv700_qty = item["all_data_iter_4.Total_Sales"];
            break;
          case "XUV300":
            xuv300_rev = parseInt(item["all_data_iter_4.total_revenue"]);
            xuv300_qty = item["all_data_iter_4.Total_Sales"];
            break;
        }
      });
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await mahindraMetrics();
        setMahindraMetricsData(result.success);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  {
    mahindraMetricsdata
      .filter(
        (item) => item["all_data_iter_4.date_year"] === parseInt(sel_year)
      )
      .map((item, index) => {
        mah_rev = item["all_data_iter_4.total_revenue"].toFixed(2);
        mah_ts = item["all_data_iter_4.Total_Sales"];
        mah_profit = item["all_data_iter_4.Total_Profit"].toFixed(2);
      });
  }
  thar_sale = parseInt((thar_rev / mah_rev) * 100);
  bolero_sale = parseInt((bolero_rev / mah_rev) * 100);
  scorpio_sale = parseInt((scorpio_rev / mah_rev) * 100);
  xuv300_sale = parseInt((xuv300_rev / mah_rev) * 100);
  xuv700_sale = parseInt((xuv700_rev / mah_rev) * 100);

  const handleButtonCLick = () => {
    clickCount.current += 1;
    console.log("Click count");

    if (clickCount.current === 2) {
      navigate("./Sales");
      console.log("If double clicked");
    }
  };
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
          {mah_rev} Cr
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
                {mah_ts} Vehicles
              </div>
            </div>
            <div style={{ flex: 1.6 }}>
              <div
                style={{ fontSize: "16px", fontWeight: "400", color: "grey" }}
              >
                Profit
              </div>
              <div style={{ marginTop: "5px", fontWeight: "900" }}>
                {mah_profit}Cr
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
            onClick={handleButtonCLick}
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
                {thar_rev} Cr
              </span>
              <span style={{ color: "gray", fontSize: "16px" }}>
                {thar_qty}
              </span>
              <span style={{ color: "gray", fontSize: "16px" }}>
                {thar_sale}%
              </span>
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
                {xuv700_rev} Cr
              </span>
              <span style={{ color: "gray", fontSize: "16px" }}>
                {xuv700_qty}
              </span>
              <span style={{ color: "gray", fontSize: "16px" }}>
                {xuv700_sale}%
              </span>
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
                {xuv300_rev} Cr
              </span>
              <span style={{ color: "gray", fontSize: "16px" }}>
                {xuv300_qty}
              </span>
              <span style={{ color: "gray", fontSize: "16px" }}>
                {xuv300_sale}%
              </span>
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
                {bolero_rev} Cr
              </span>
              <span style={{ color: "gray", fontSize: "16px" }}>
                {bolero_qty}
              </span>
              <span style={{ color: "gray", fontSize: "16px" }}>
                {bolero_sale}%
              </span>
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
                {scorpio_rev} Cr
              </span>
              <span style={{ color: "gray", fontSize: "16px" }}>
                {scorpio_qty}
              </span>
              <span style={{ color: "gray", fontSize: "16px" }}>
                {scorpio_sale}%
              </span>
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

export default Leftcard;
