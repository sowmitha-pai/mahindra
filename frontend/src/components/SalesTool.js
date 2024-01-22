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

const SalesTool = ({ index }) => {
  // console.log("salesTool: ", index);
  let zoneName, revenue, product, quantity;
  switch (index) {
    case 0:
      zoneName = "Northern Zone";
      revenue = "634547.20";
      product = "Commercial passenger";
      quantity = "32,000";
      break;
    case 1:
      zoneName = "West Zone";
      revenue = "1054644.00";
      product = "Commercial passenger";
      quantity = "48,000";
      break;
    case 2:
      zoneName = "East Zone";
      revenue = "850332.62";
      product = "Commercial passenger";
      quantity = "18,000";
      break;
    case 3:
      zoneName = "South Zone";
      revenue = "844439.44";
      product = "Commercial passenger";
      quantity = "44,000";
      break;
    default:
      zoneName = "Unknown Zone";
      revenue = "N/A";
      product = "N/A";
      quantity = "N/A";
  }

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
        <p>{zoneName}</p>
        <h2>{revenue}</h2>
        <div className="h-line"></div>
        <p>{product}</p>
        <b>{quantity}</b>
      </span>
    </div>
  );
};

export default SalesTool;
