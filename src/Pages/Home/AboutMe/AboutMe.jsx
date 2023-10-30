import "./AboutMe.css";
const AboutMe = () => {
  return (
    <section className="container about-container">
      <div className="about-me">
        <div className="left-side" data-aos="fade-up" data-aos-duration="1500">
          <img
            src="https://media.tenor.com/wXT-ow3dRlcAAAAC/website.gif"
            alt="My Image"
          />
        </div>
        <div className="right-side" data-aos="fade-up" data-aos-duration="1000">
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            tincidunt justo non ipsum ullamcorper, ac bibendum lorem auctor.
            Nullam euismod eros id lorem fringilla, et vestibulum nisl varius.
            Vestibulum ac tristique erat. justo non ipsum ullamcorper, ac
            bibendum lorem auctor. Nullam euismod eros id lorem fringilla, et
            vestibulum nisl varius. Vestibulum ac tristique erat.
          </p>

          <button className="btn">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
