import React from "react";
import Slider from "../Slider/Slider";
import './Activity.css'
import SectionTitle from "../../../Components/SectionTitle/sectionTitle";
const Activity = () => {
  const sliderItems = [
    {
      image:
        "https://jooinn.com/images/coding-and-programming-computer-science-and-it.jpg",
      alt: "Slide 1",
    },
    {
      image:
        "https://d3h2k7ug3o5pb3.cloudfront.net/image/2020-12-03/84256810-354d-11eb-be48-092568f6a231.jpg",
      alt: "Slide 2",
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/024/689/019/non_2x/programming-code-coding-or-hacker-background-programming-code-icon-made-with-binary-code-virtual-tunnel-warp-made-with-digital-code-data-flow-illustration-vector.jpg",
      alt: "Slide 3",
    },
  ];
  return (
    <div className="activity">
        <SectionTitle title={"Our Activity"} description={"loremLorem ipsum dolor sit amet, consectetur adipiscing elit. "}/>
      <Slider items={sliderItems} />
    </div>
  );
};

export default Activity;
