import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Avatar from "@mui/material/Avatar";
import Sales from "./components/Sales";
import Funnel from "./components/Funnel";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [selectedPage, setSelectedPage] = useState("");
  // const handleNavClick = (event) => {
  //   const navLinks = document.querySelectorAll(".navbar a");
  //   navLinks.forEach((link) => {
  //     link.classList.remove("selected");
  //   });
  //   event.target.classList.add("selected");
  // };

  const handleSales = () => {
    console.log("Sales");
    navigate("./Sales");
    setSelectedPage("Sales");
  };

  const handleFunnel = () => {
    console.log("Funnel");
    navigate("./Funnel");
    setSelectedPage("Funnel");
  };

  const handleCompetitors = () => {
    console.log("Competitors");
    navigate("/");
    setSelectedPage("Competitors");
  };

  const handleChatbot = () => {
    console.log("Chatbot");
    navigate("./chatbot");
    setSelectedPage("Chatbot");
  };
  return (
    <>
      <div className="header">
        <div className="header__left">
          <p>
            <span>mahindra</span>
            <sup>Rise</sup>
          </p>
          <nav className="navbar">
            <a
              href={Sales}
              onClick={handleSales}
              className={selectedPage === "Sales" ? "selected" : ""}
            >
              Sales overview
            </a>
            <a
              href={Funnel}
              onClick={handleFunnel}
              className={selectedPage === "Funnel" ? "selected" : ""}
            >
              Funnel analysis
            </a>
            <a
              onClick={handleCompetitors}
              className={selectedPage === "Competitors" ? "selected" : ""}
            >
              Competitor analysis
            </a>
            <a
              onClick={handleChatbot}
              className={selectedPage === "Chatbot" ? "selected" : ""}
            >
              Genius
            </a>
          </nav>
        </div>

        <div className="header__right">
          <div className="header__search">
            <input type="text"></input>
            <SearchIcon />
          </div>
          <div className="icons">
            <NotificationsNoneOutlinedIcon
              style={{ marginRight: "25px", marginLeft: "25px" }}
            />
            <Avatar
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              style={{ marginRight: "10px", height: "35px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
