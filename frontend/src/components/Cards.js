import React from "react";
import "./style.css";
import Slider from "react-slick";

const Card = ({ text, label, title }) => {
  return (
    <div
      style={{
        width: "400px",
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "25px",
        margin: "0 30px",
      }}
    >
      <div style={{ position: "relative", top: "-5px", left: "30px" }}>
        <img
          src={"/tata.png"}
          style={{
            width: "80px",
            height: "60px",
            border: "1px solid lightgrey",
            borderRadius: "8px",
          }}
          width={200}
          height={200}
        />
      </div>
      <div style={{ display: "flex", marginTop: "20px" }}>
        <div style={{ flex: 3 }}>
          <div style={{ paddingTop: "10px", fontSize: "24px" }}>
            New Edge Motors
          </div>
          <div style={{ fontSize: "14px", color: "gray", marginTop: "10px" }}>
            4/5
          </div>
        </div>
        <div style={{ flex: 1, borderRadius: "5px" }}>
          <div
            style={{
              backgroundColor: "lightblue",
              textAlign: "center",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <div style={{ fontWeight: "600", fontSize: "30px" }}>{label}</div>
            <div
              style={{ fontSize: "14px", color: "gray", alignItems: "center" }}
            >
              {title}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0px",
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
        <span style={{ marginTop: "5px", fontSize: "16px", fontWeight: "600" }}>
          67 Crores
        </span>
        <span style={{ marginTop: "5px", fontSize: "16px", fontWeight: "600" }}>
          13.89 Crores
        </span>
        <span style={{ marginTop: "5px", fontSize: "16px", fontWeight: "600" }}>
          18%
        </span>
      </div>
    </div>
  );
};

const Cards = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const generateCards = () => {
    const cards = [];
    for (let i = 0; i < 12; i++) {
      cards.push(<Card key={i} label="60cr" title="Total sale" />);
    }
    return cards;
  };

  return (
    <div style={{ width: "500px", marginLeft: "10px" }}>
      <Slider {...settings} className="black-slider">
        {generateCards()}
      </Slider>
    </div>
  );
};

export default Cards;
