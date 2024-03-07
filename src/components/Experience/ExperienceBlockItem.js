import Article from "./Article";

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
  trainingCourseLink,
  trainerProfileLink,
  trainerWebsiteLink,
  trainerWebsitePlaceholder,
  longLoadingWebsite
}) => {
  return (
    <div className="timeline-item">
      <div className="timeline-date">
        <time dateTime={chipDate}>{chipDate}</time>
      </div>
      <div className="timeline-circle"></div>
      <Article
        articleId={articleId}
        articleTitle={articleTitle}
        articleCompany={articleCompany}
        articleStartDateValue={articleStartDateValue}
        articleStartDate={articleStartDate}
        articleEndDateValue={articleEndDateValue}
        articleEndDate={articleEndDate}
        articleDescription={articleDescription}
        trainingCourseLink={trainingCourseLink}
        trainerProfileLink={trainerProfileLink}
        trainerWebsiteLink={trainerWebsiteLink}
        trainerWebsitePlaceholder={trainerWebsitePlaceholder}
        longLoadingWebsite={longLoadingWebsite}
      />
    </div>
  );
};

export default ExperienceBlockItem;
