import React from "react";

const ExperienceBlockItem = ({
  chipDate,
  articleId,
  articleTitle,
  articleCompany,
  articleStartDate,
  articleStartDateTime,
  articleEndDate,
  articleEndDateTime,
  articleDescription,
}) => {
  return (
    <div className="timeline-item">
      <div className="timeline-date">
        <time datetime={chipDate}>{chipDate}</time>
      </div>
      <div className="timeline-circle"></div>
      <article id={articleId} className="timeline-content scroll-id">
        <hgroup>
          <h2>{articleTitle}</h2>
          <p className="location">
            <strong>{articleCompany}</strong> |
            <time datetime={articleStartDateTime}>{articleStartDate}</time> -
            <time datetime={articleEndDateTime}>{articleEndDate}</time>
          </p>
        </hgroup>
        <p>{articleDescription}</p>
        <footer></footer>
      </article>
    </div>
  );
};

export default ExperienceBlockItem;
