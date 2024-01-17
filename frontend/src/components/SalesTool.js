import * as React from "react";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
// import { drillDown } from "../api/Look.js";
import "./style.css";

const SalesTool = () => {
  return (
    // <Tooltip title="Show">
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        padding: "10px",
        fontSize: "12px",
        width: "100px",
        height: "100px",
        position: "absolute",
        bottom: "30px",
        left: "80%",
        transform: "translateX(-20%)",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        display: "flex",
        //   alignItems: "center",
        //   justifyContent: "center",
        //   flexDirection: 'column'
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
          // top: '80px'
        }}
      ></span>
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          color: "black",
          paddingTop: "2px",
          padding: "5px",
          marginTop: "2px",
        }}
      >
        <p>Northern Zone</p>
        <h2>57,445.97</h2>
        <div className="h-line"></div>
        <p>Commercial passenger</p>
        <b>12,000</b>
      </span>
    </div>
  );
};

export default SalesTool;
