import React from "react";
import "./Service.css"; // Create a CSS file for the ServicePage styles
import servicesData from "../../../../public/services.json";
import { FaLaptopCode, FaPencilAlt, FaFlask, FaRobot } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/sectionTitle";

const iconMap = {
  "web-development-icon": <FaLaptopCode style={{ fontSize: "30px" }} />,
  "graphic-design-icon": <FaPencilAlt style={{ fontSize: "30px" }} />,
  "data-science-icon": <FaFlask style={{ fontSize: "30px" }} />,
  "ai-icon": <FaRobot style={{ fontSize: "30px" }} />,
};

const ServicePage = () => {
  return (
    <section className="container">
      <SectionTitle
        title="Service"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
      />
      <div
        className="service-page"
        data-aos="zoom-in-right"
        data-aos-duration="1000"
      >
        {servicesData.map((service) => (
          <div className="service-card" key={service.id}>
            {iconMap[service.iconClass]}
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicePage;
