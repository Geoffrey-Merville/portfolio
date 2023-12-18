import React from "react";
import ExperienceBlockTitle from "./ExperienceBlockTitle";

const ExperienceBlock = ({ blockTitle }) => {
  return (
    <section>
      <ExperienceBlockTitle blockTitle={blockTitle} />
    </section>
  );
};

export default ExperienceBlock;
