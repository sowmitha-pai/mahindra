import React, { useState, useEffect } from "react";
import "./style.css";
import Slider from "react-slick";
import { dealership } from "../api/Look";

const Cards = ({ text, label, title }) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [dealershipdata, setDealershipData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await dealership();
        setDealershipData(result.success);
        // console.log(result.success);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div style={{ width: "450px", marginLeft: "30px" }}>
      <Slider {...settings} className="black-slider">
        {dealershipdata.map((item, index) => (
          <div style={{ width: "400px" }}>
            <div style={{ position: "relative", top: "30px", left: "30px" }}>
              <img
                src={
                  "/dealerslogo/" + item["dealership.dealership_name"] + ".png"
                }
                style={{
                  width: "80px",
                  height: "60px",
                  border: "1px solid lightgrey",
                  borderRadius: "8px",
                }}
                width={200}
                height={200}
                alt=""
              />
            </div>
            {parseInt(item["dealership.total_sales"]) > 1000000 && (
              <span className="best-performer">Top Performer</span>
            )}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "25px",
              }}
            >
              <div style={{ display: "flex", marginTop: "20px" }}>
                <div style={{ flex: 3 }}>
                  <div style={{ paddingTop: "10px", fontSize: "24px" }}>
                    {item["dealership.dealership_name"]}
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "gray",
                      marginTop: "10px",
                    }}
                  >
                    {item["dealership.reviews"]}/5
                  </div>
                </div>
                <div
                  style={{
                    flex: 1,
                    // textAlign:'end',
                    borderRadius: "5px",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "lightblue",
                      textAlign: "center",
                      borderRadius: "10px",
                      padding: "10px",
                    }}
                  >
                    <div style={{ fontWeight: "600", fontSize: "30px" }}>
                      {parseInt(item["dealership.total_sales"])}cr
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        color: "gray",
                        alignItems: "center",
                      }}
                    >
                      Total sale
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "2px",
                  marginTop: "20px",
                  fontSize: "11px",
                  color: "gray",
                }}
              >
                <span style={{ fontSize: "14px" }}>Sales Target</span>
                <span style={{ fontSize: "14px" }}>Revenue</span>
                <span style={{ fontSize: "14px" }}>Contribution</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "2px",
                  fontSize: "13px",
                }}
              >
                <span
                  style={{
                    marginTop: "5px",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  {parseInt(item["dealership.sales_target"])} Crores
                </span>
                <span
                  style={{
                    marginTop: "5px",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  {item["dealership.revenue"]} Crores
                </span>
                <span
                  style={{
                    marginTop: "5px",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  {parseInt(item["dealership.contribution"])}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Cards;
