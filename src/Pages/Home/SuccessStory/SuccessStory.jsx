import React from "react";
import storyData from "../../../../public/storyData.json"; // Import your JSON data
import StoryCard from "./StoryCard";
import Marquee from "react-fast-marquee";
import SectionTitle from "../../../Components/SectionTitle/sectionTitle";
const SuccessStory = () => {
  return (
   <section>
       <SectionTitle
        title=" Success story"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
      />
     <div className="story-container">
        <Marquee pauseOnHover delay={10}>
      {storyData.map((story) => (
          <StoryCard key={story.id} storyProps={story} />
          ))}
          </Marquee>
    </div>
   </section>
  );
};

export default SuccessStory;
