import React from "react";
import "./SuccessStory.css"; // Create a CSS file for the StoryCard styles

const StoryCard = ({ storyProps }) => {
  const { name, date, image, batch, story } = storyProps;
  return (
    <div className="story-card">
      <div className="card-header">
        <img src={image} alt={name} className="avatar" />
        <div className="header-text">
          <h3>{name}</h3>
          <p>{date}</p>
        </div>
      </div>
      <div className="batch">{batch}</div>
      <div className="story-text">{story.slice(0, 100)}...</div>
    </div>
  );
};

export default StoryCard;
