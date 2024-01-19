import React, { useState, useEffect } from "react";
import "./Main.css";
import styled from "styled-components";
import Doughnut from "./Doughnut";
import { getData, centerVisualization } from "./api/Look.js";
function formatNumber(num) {
  return (+num).toLocaleString("en-US");
}
const MainLogo = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 55px;
    height: 55px;
    margin-top: 5px;
  }
  margin-top: 20px;
  margin-left: 20px;
`;
const Main = ({ selectedYear, selectedCompany }) => {
  let east, west, north, south, total_revenue, Mahindra, Maruthi, Tata;
  const [data, Data] = useState([]);
  const [zonedata, setData] = useState([]);
  const filterYear = localStorage.getItem("selectedyear");
  console.log("Main.js sel company", selectedCompany);
  useEffect(() => {
    const fetchData1 = async () => {
      try {
        const result = await getData();
        Data(result.success);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData1();
  }, []);

  useEffect(() => {
    const fetchData2 = async () => {
      try {
        const result = await centerVisualization();
        setData(result.success);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData2();
  }, []);
  {
    data
      .filter(
        (item) => item["all_data_iter_4.date_year"] === parseInt(selectedYear)
      )
      .map((item, index) => {
        switch (item["all_data_iter_4.company"]) {
          case "Mahindra":
            Mahindra = item["all_data_iter_4.total_revenue"].toFixed(2);
            break;
          case "Maruthi":
            Maruthi = item["all_data_iter_4.total_revenue"].toFixed(2);
            break;
          case "Tata":
            Tata = item["all_data_iter_4.total_revenue"].toFixed(2);
            break;
        }
      });
  }
  {
    zonedata
      .filter(
        (item) =>
          item["all_data_iter_4.date_year"] === parseInt(selectedYear) &&
          item["all_data_iter_4.company"] === selectedCompany
      )
      .map((item, index) => {
        switch (item["all_data_iter_4.zone"]) {
          case "East":
            east = Number(item["all_data_iter_4.total_revenue"].toFixed(0));
            break;
          case "West":
            west = Number(item["all_data_iter_4.total_revenue"].toFixed(0));
            break;
          case "North":
            north = Number(item["all_data_iter_4.total_revenue"].toFixed(0));
            break;
          case "South":
            south = Number(item["all_data_iter_4.total_revenue"].toFixed(0));
            break;
        }
      });
  }
  total_revenue = (east + west + north + south).toFixed(0);
  //console.log('type of rev',typeof(total_revenue))
  const [selectedData, setSelectedData] = useState("2021");

  const selectyearhandler = (event) => {
    setSelectedData(event.target.value);
  };
  //localStorage.setItem("selectedyear", selectedData);
  return (
    <>
      <div className="main">
        <div className={`${selectedCompany}-circle circle`}>
          <div className="circle-2">
            <div class="timeline2">
              <div class="outers">
                <div class="cards">
                  <div
                    class="info1"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <div>
                      <p
                        className={`${selectedCompany} title`}
                        style={{ whiteSpace: "nowrap" }}
                      ></p>
                      <p class="title" style={{ whiteSpace: "nowrap" }}>
                        Total sale
                      </p>
                    </div>
                    {data
                      .filter(
                        (item) =>
                          item["all_data_iter_4.date_year"] ===
                          parseInt(selectedYear)
                      )
                      .map((item, index) => {
                        switch (item["all_data_iter_4.company"]) {
                          case "Mahindra":
                            Mahindra = formatNumber(
                              item["all_data_iter_4.total_revenue"].toFixed(0)
                            );
                            break;
                          case "Maruthi":
                            Maruthi = formatNumber(
                              item["all_data_iter_4.total_revenue"].toFixed(0)
                            );
                            break;
                          case "Tata":
                            Tata = formatNumber(
                              item["all_data_iter_4.total_revenue"].toFixed(0)
                            );
                            break;
                        }
                      })}

                    <h3 style={{ whiteSpace: "nowrap" }}>
                      {formatNumber(total_revenue)} Cr
                    </h3>
                  </div>
                </div>
                <div class="cards">
                  <div
                    class="info1"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <div>
                      <p
                        className={`${selectedCompany} title`}
                        style={{ whiteSpace: "nowrap" }}
                      ></p>
                    </div>
                    <p class="title" style={{ whiteSpace: "nowrap" }}>
                      Eastern zone
                    </p>

                    <h3 style={{ whiteSpace: "nowrap" }}>
                      {formatNumber(east)} Cr
                    </h3>
                  </div>
                </div>
                <div class="cards">
                  <div
                    class="info1"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <div>
                      <p
                        className={`${selectedCompany} title`}
                        style={{ whiteSpace: "nowrap" }}
                      ></p>
                      <p class="title" style={{ whiteSpace: "nowrap" }}>
                        Western Zone
                      </p>
                    </div>

                    <h3 style={{ whiteSpace: "nowrap" }}>
                      {formatNumber(west)} Cr
                    </h3>
                  </div>
                </div>
                <div class="cards">
                  <div
                    class="info1"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <div>
                      <p
                        className={`${selectedCompany} title`}
                        style={{ whiteSpace: "nowrap" }}
                      ></p>
                      <p class="title" style={{ whiteSpace: "nowrap" }}>
                        Northern Zone
                      </p>
                    </div>

                    <h3 style={{ whiteSpace: "nowrap" }}>
                      {formatNumber(north)} Cr
                    </h3>
                  </div>
                </div>
                <div class="cards">
                  <div
                    class="info1"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <div>
                      <p
                        className={`${selectedCompany} title`}
                        style={{ whiteSpace: "nowrap" }}
                      ></p>
                      <p class="title" style={{ whiteSpace: "nowrap" }}>
                        Southern Zone
                      </p>
                    </div>

                    <h3 style={{ whiteSpace: "nowrap" }}>
                      {formatNumber(south)} Cr
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="circle-3">
            <Doughnut />
          </div>

          <div className={`${selectedCompany}-circles circle-4`}>
            <div class="timeline">
              <div class="card1">
                <div class="info">
                  <p style={{ whiteSpace: "nowrap" }}>M & M</p>
                  <h3 style={{ whiteSpace: "nowrap" }}>{Mahindra} Cr </h3>
                </div>
              </div>
              <div class="card2">
                <div class="info">
                  <p style={{ whiteSpace: "nowrap" }}>Maruthi</p>
                  <h3 style={{ whiteSpace: "nowrap" }}>{Maruthi} Cr </h3>
                </div>
              </div>
              <div class="card3">
                <div class="info">
                  <p style={{ whiteSpace: "nowrap" }}>Tata</p>
                  <h3 style={{ whiteSpace: "nowrap" }}>{Tata} Cr </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="circle-5">
            <MainLogo>
              <img
                src={
                  selectedCompany === "Maruthi"
                    ? "/maruthi.png"
                    : selectedCompany === "Tata"
                    ? "/tata.png"
                    : "/mm.png"
                }
                alt="logo"
              />
            </MainLogo>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
