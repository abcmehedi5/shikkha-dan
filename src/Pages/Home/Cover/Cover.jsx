import React from "react";
import "./Cover.css"; // Create a CSS file for the Cover styles
import Slider from "../Slider/Slider";
const Cover = () => {
  const sliderItems = [
    {
      image:
        "https://soliloquywp.com/wp-content/uploads/2018/11/nb_ist_cover.jpg",
      alt: "Slide 2",
    },

    {
      image:
        "https://soliloquywp.com/wp-content/uploads/2019/04/nb_esc_cover.jpg",
      alt: "Slide 1",
    },
    {
      image:
        "https://soliloquywp.com/wp-content/uploads/2018/10/nb_fss_cover-300x145.jpg",
      alt: "Slide 3",
    },
  ];
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
      <div>
        <Slider items={sliderItems} />
      </div>
    </div>
  );
};

export default Cover;
