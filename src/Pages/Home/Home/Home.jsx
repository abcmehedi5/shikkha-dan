import React from "react";
import Cover from "../Cover/Cover";
import Service from "../Services/Service";
import Courses from "../Courses/Courses";
import OurImpact from "../OurImpact/OurImpact";
import SuccessStory from "../SuccessStory/SuccessStory";
import AboutMe from "../AboutMe/AboutMe";
import Slider from "../Slider/Slider";

const Home = () => {
  const sliderItems = [
    {
      image:
        "https://soliloquywp.com/wp-content/uploads/2018/11/nb_ist_cover.jpg",
      alt: "Slide 1",
    },
    {
      image:
        "https://soliloquywp.com/wp-content/uploads/2018/11/nb_ist_cover.jpg",
      alt: "Slide 2",
    },
    {
      image:
        "https://soliloquywp.com/wp-content/uploads/2018/11/nb_ist_cover.jpg",
      alt: "Slide 3",
    },
  ];
  return (
    <div>
      <Cover />
      <Service />
      <Courses />
      <OurImpact />
      <SuccessStory />
      <AboutMe />
      <Slider items={sliderItems} />
    </div>
  );
};

export default Home;
