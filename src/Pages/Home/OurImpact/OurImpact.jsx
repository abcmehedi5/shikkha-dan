import React from "react";
import "./OurImpact.css"; // Create a CSS file for the OurImpact styles
import SectionTitle from "../../../Components/SectionTitle/sectionTitle";

const OurImpact = () => {
  return (
    <section className="container">
      <SectionTitle
        title="Our Impact"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
      />
      <div className="our-impact">
        <div
          className="impact-image"
          data-aos="zoom-out-down"
          data-aos-duration="1000"
        >
          <img
            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4LWq8Yujum02JHPONHMkun/71d421d9168094b73d4568900be533a0/GettyImages-1255905237.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h="
            alt="Our Impact"
          />
        </div>
        <div
          className="impact-content"
          data-aos="zoom-out-down"
          data-aos-duration="1000"
        >
          <h2>Our Mission</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
            explicabo vitae aut? Explicabo ducimus aspernatur cupiditate
            veritatis dolor labore doloribus.
          </p>

          <h2>Who we are?</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
            explicabo vitae aut? Explicabo ducimus aspernatur cupiditate
            veritatis dolor labore doloribus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
