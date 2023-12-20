import React from "react";

const ExperienceBlockTitle = ({ blockTitle }) => {
  return (
    <header>
      <div className="right-line"></div>
      <h2>{blockTitle}</h2>
      <div className="left-line"></div>
    </header>
  );
};

export default ExperienceBlockTitle;
