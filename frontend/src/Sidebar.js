// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import "./SideBar.css";
// import { getData } from "./api/Look.js";

// export default function SideBar() {
//   const [data, setData] = useState([]);
//   const [selectedYear, setSelectedYear] = useState("2022"); // Set a default value
//   const clickCount = useRef(0);
//   const navigate = useNavigate()

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

//   const selectYearHandler = (event) => {
//     setSelectedYear(event.target.value);
//   };

//   const handleButtonCLick = () => {
//     clickCount.current += 1;
//     console.log("Click count")

//     if (clickCount.current === 2) {
//       navigate('./Sales')
//       console.log("If double clicked")
//     }

//     setTimeout(() => {
//       clickCount.current = 0;
//     }, 300);
//   }

//   const HeaderLogoComponent = styled.div`
//     display: flex;
//     align-items: center;
//     img {
//       width: 70px;
//       height: 70px;
//       border-radius: ${(props) => (props.index === 2 ? 10 : 20)}px;
//     }
//     align-items: center;
//     border-radius: ${(props) => (props.index === 2 ? 20 : 20)}px;
//     margin-bottom: ${(props) => (props.index === 3 ? 25 : 15)}px;
//     background-color: white;
//     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
//     transition: 0.3s;
//     height: 50px;
//     width: 50px;
//   `;

//   return (
//     <>
//       <div className="main__top">
//         <div className="containerr1">
//           <select
//             name="year"
//             id="years"
//             onChange={selectYearHandler}
//             value={selectedYear}
//           >
//             <option value="2022">2022</option>
//             <option value="2021">2021</option>
//             <option value="2020">2020</option>
//           </select>
//         </div>
//       </div>

//       <div className="sidebar">
//         <div className="competitors-content">
//           <h6>Breadcrumb</h6>
//           <div className="nextword">
//             <p>Competitors Analysis</p>
//           </div>
//         </div>
//         {data
//           .filter(
//             (item) =>
//               item["all_data_iter_4.date_year"] === parseInt(selectedYear)
//           )
//           .map((item, index) => (
//             <div onClick={handleButtonCLick} className={`sidebar__top container${index + 1}`} key={index}>
//               <HeaderLogoComponent index={index + 1}>
//                 <img
//                   src={
//                     index === 1
//                       ? "/maruthi.png"
//                       : index === 2
//                         ? "/tata.png"
//                         : "/mm.png"
//                   }
//                   alt={`logo ${index + 1}`}
//                 />
//               </HeaderLogoComponent>
//               <h2 style={{ whiteSpace: "nowrap" }}>
//                 {item["all_data_iter_4.company"]}
//               </h2>
//               <h4>
//                 <b style={{ whiteSpace: "nowrap" }}>
//                   {item["all_data_iter_4.total_revenue"].toFixed(2)} Cr
//                 </b>
//               </h4>
//             </div>
//           ))}
//       </div>
//     </>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./SideBar.css";
import { getData } from "./api/Look.js";

export default function SideBar({ updateSelectedYear }) {
  const [data, setData] = useState([]);
  const [selectedYear, setSelectedYear] = useState("2022"); // Set a default value
  const clickCount = useRef(0);
  const navigate = useNavigate();
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

  const selectYearHandler = (event) => {
    const newYear = event.target.value;
    setSelectedYear(event.target.value);
    updateSelectedYear(newYear);
  };
  localStorage.setItem("selectedyear", selectedYear);
  // console.log("side bar local strg year",localStorage.getItem("selectedyear"))
  function formatNumber(num) {
    return (+num).toLocaleString("en-US");
  }
  const handleButtonCLick = () => {
    clickCount.current += 1;
    console.log("Click count");

    if (clickCount.current === 2) {
      navigate("./Sales");
      console.log("If double clicked");
    }

    setTimeout(() => {
      clickCount.current = 0;
    }, 300);
  };

  const HeaderLogoComponent = styled.div`
    display: flex;
    align-items: center;
    img {
      width: 70px;
      height: 70px;
      border-radius: ${(props) => (props.index === 2 ? 10 : 20)}px;
      border: 1px solid #d5d5d5;
    }
    align-items: center;
    border-radius: ${(props) => (props.index === 2 ? 20 : 20)}px;
    margin-bottom: ${(props) => (props.index === 3 ? 25 : 15)}px;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    height: 50px;
    width: 50px;
    margin-right: 130px;
  `;

  return (
    <>
      <div className="main__top">
        <div className="containerr1">
          <select
            name="year"
            id="years"
            onChange={selectYearHandler}
            value={selectedYear}
          >
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </div>
      </div>

      <div className="sidebar">
        <div className="competitors-content">
          <div className="nextword">
            <p>Competitors Analysis</p>
          </div>
        </div>
        {data
          .filter(
            (item) =>
              item["all_data_iter_4.date_year"] === parseInt(selectedYear)
          )
          .map((item, index) => {
            let bgColor;
            if (index === 1) {
              bgColor = "#AA30DB"; // Maruthi
            } else if (index === 2) {
              bgColor = "#369DDC"; // Tata
            } else {
              bgColor = "#FC364C"; // Mahindra
            }

            return (
              <div
                onClick={handleButtonCLick}
                className={`sidebar__top container${index + 1}`}
                key={index}
                style={{ position: "relative" }}
              >
                <span
                  style={{
                    width: "5px",
                    height: "50px",
                    backgroundColor: bgColor,
                    display: "flex",
                    position: "absolute",
                    left: 0,
                    marginTop: "35px",
                  }}
                ></span>
                <HeaderLogoComponent index={index + 1}>
                  <img
                    src={
                      index === 1
                        ? "/maruthi.png"
                        : index === 2
                        ? "/tata.png"
                        : "/mm.png"
                    }
                    alt={`logo ${index + 1}`}
                  />
                </HeaderLogoComponent>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    marginBottom: "40px",
                    marginTop: "10px",
                  }}
                  className="brand"
                >
                  <h2 style={{ whiteSpace: "nowrap" }}>
                    {index === 1
                      ? "Maruthi Motors"
                      : index === 2
                      ? "Tata Motors"
                      : "Mahindra & Mahindra"}
                  </h2>

                  <h4 style={{ marginTop: "7px" }}>
                    <b style={{ whiteSpace: "nowrap" }}>
                      {formatNumber(
                        item["all_data_iter_4.total_revenue"].toFixed(0)
                      )}{" "}
                      Cr
                    </b>
                  </h4>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
