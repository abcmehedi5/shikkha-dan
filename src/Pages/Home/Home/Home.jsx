import React from "react";
import Cover from "../Cover/Cover";
import Service from "../Services/Service";
import Courses from "../Courses/Courses";
import OurImpact from "../OurImpact/OurImpact";
import SuccessStory from "../SuccessStory/SuccessStory";
import AboutMe from "../AboutMe/AboutMe";
import Activity from "../Activity/Activity";
import Contact from "../Contact/Contact";

const Home = () => {
 
  return (
    <div>
      <Cover />
      <Service />
      <Courses />
      <OurImpact />
      <AboutMe />
      <SuccessStory />
      <Activity/>
      <Contact/>
    </div>
  );
};

export default Home;
