import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import '../App.css'
import Graph from "./Graph";

function Funnel({handleMouseOver, handleMouseOut}) {
  const [sel_year, updateYear] = useState("2022")
  const handleyearchange = (event) => {
    const year = event.target.value
    updateYear(year)
  }
  return (
    <>
      <div className="funnel-container">
        <div className="funnel">
          <div className="funnel1">Conversion funnel analysis</div>
        </div>
        <div className="dropdown">
          <select name="year" id="years" onChange={handleyearchange}>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
          <div className="more-vert-icon">
            <MoreVertIcon />
          </div>
        </div>
      </div>
      <Graph sel_year={sel_year} />
      <div>
        <p className="copyRightParagraph">
          Copyright @ 2023 mahindra rise. All rights reserved.
        </p>
      </div>
    </>
  );
}

export default Funnel;
