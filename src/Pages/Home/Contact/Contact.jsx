import React from "react";
import "./Contact.css"; // Create a CSS file for the Contact styles
import SectionTitle from "../../../Components/SectionTitle/sectionTitle";

const Contact = () => {
  return (
    <section>
        <SectionTitle title={"Contact Us"} description={"Have questions or need assistance? Feel free to reach out to us"}/>
      <div className="contact-container container">
        <div className="contact-text">
          <h2>Contact Us</h2>
          <p>
            Have questions or need assistance? Feel free to reach out to us.
            We're here to help you. Have questions or need assistance? Feel free
            to reach out to us. We're here to help you. Have questions or need
            assistance? Feel free to reach out to us. We're here to help you.
          </p>
        </div>
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
