import React from "react";
import "./Cover.css"; // Create a CSS file for the Cover styles
const Cover = () => {
  return (
    <div className="cover">
      <div className="cover-content animated">
        <h1 className="animated">Welcome to Shikkha dan</h1>
        <p className="animated">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia illo
          doloremque in neque tenetur cupiditate porro laboriosam eos natus rem
          cum iusto officiis similique dolor impedit expedita quo, modi ipsam.
        </p>
        <button className="cta-button animated fadeInUp btn">
          Explore Courses
        </button>
      </div>
      <div className="cover-image">
        <img
          className="animated fadeInUp"
          src="https://www.icegif.com/wp-content/uploads/2021/12/icegif-873.gif"
          alt=""
        />
      </div>
    </div>
  );
};

export default Cover;
