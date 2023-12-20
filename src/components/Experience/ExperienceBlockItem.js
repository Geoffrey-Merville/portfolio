const ExperienceBlockItem = ({
  chipDate,
  articleId,
  articleTitle,
  articleCompany,
  articleStartDate,
  articleStartDateValue,
  articleEndDate,
  articleEndDateValue,
  articleDescription,
}) => {
  return (
    <div className="timeline-item">
      <div className="timeline-date">
        <time dateTime={chipDate}>{chipDate}</time>
      </div>
      <div className="timeline-circle"></div>
      <article id={articleId} className="timeline-content scroll-id">
        <hgroup>
          <h2>{articleTitle}</h2>
          <p className="location">
            <strong>{articleCompany}</strong> |
            <time dateTime={articleStartDateValue}>{articleStartDate}</time> -
            <time dateTime={articleEndDateValue}>{articleEndDate}</time>
          </p>
        </hgroup>
        <p>{articleDescription}</p>
        <footer></footer>
      </article>
    </div>
  );
};

export default ExperienceBlockItem;
