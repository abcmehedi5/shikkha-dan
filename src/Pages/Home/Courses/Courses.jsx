import React from "react";
import "./Courses.css"; // Create a CSS file for the Courses styles
import courseData from "../../../../public/courseData.json"; // Import the JSON data
import SectionTitle from "../../../Components/SectionTitle/sectionTitle";

const Courses = () => {
  return (
    <section className="container">
      <SectionTitle
        title="Our Courses"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
      />
      <div className="courses">
        {courseData.map((course) => (
          <div
            className="course-card"
            key={course.id}
            data-aos="zoom-in-right"
            data-aos-duration="1000"
          >
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <div className="course-details">
              <p>Price: ${course.price}</p>
              <p>Rating: {course.rating} stars</p>
            </div>
            <a href={course.link}>Learn More</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
