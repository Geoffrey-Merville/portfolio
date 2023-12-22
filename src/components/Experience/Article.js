import DOMPurify from "dompurify";

const Article = ({
  articleId,
  articleTitle,
  articleCompany,
  articleStartDateValue,
  articleStartDate,
  articleEndDateValue,
  articleEndDate,
  articleDescription,
  trainingCourseLink,
  trainerProfileLink,
  trainerWebsiteLink,
  trainerWebsitePlaceholder,
}) => {
  const cleanTitle = DOMPurify.sanitize(articleTitle);
  const cleanEndDate = DOMPurify.sanitize(articleEndDate);
  const cleanDescription = DOMPurify.sanitize(articleDescription);

  const linkRel = "nofollow noopener noreferrer";

  return (
    <article id={articleId} className="timeline-content scroll-id">
      <hgroup>
        <h2 dangerouslySetInnerHTML={{ __html: cleanTitle }} />
        <p className="location">
          <strong>{articleCompany}</strong>
          {articleStartDate ? (
            <time dateTime={articleStartDateValue}>
              {" "}
              | {articleStartDate} -{" "}
            </time>
          ) : (
            ""
          )}
          {articleEndDate ? (
            <time
              dateTime={articleEndDateValue}
              dangerouslySetInnerHTML={{ __html: cleanEndDate }}
            />
          ) : (
            ""
          )}
        </p>
      </hgroup>
      <p dangerouslySetInnerHTML={{ __html: cleanDescription }} />
      {trainingCourseLink || trainerWebsiteLink || trainerProfileLink ? <footer className="article-footer">
        {trainingCourseLink ? (
          <>
            <a title={"Lien du cours " + articleTitle.replace(/<[^>]*>/g, '')} href={trainingCourseLink} rel={linkRel}>
                Lien vers le cours
            </a>
            {trainerProfileLink ? <span> | </span> : ""}
          </>
        ) : (
          ""
        )}
        {trainerProfileLink ? (
          <>
            <a title="Lien vers le profil Udemy du formateur" href={trainerProfileLink} rel={linkRel}>
                Profil du formateur
            </a>
            {trainerWebsiteLink ? <span> | </span> : ""}
          </>
        ) : (
          ""
        )}
        {trainerWebsiteLink ? (
          <a title={"Lien vers le site web de " + articleCompany.replace(/ - .*/, '')} href={trainerWebsiteLink} rel={linkRel}>
            {trainerWebsitePlaceholder ? trainerWebsitePlaceholder : "Site du formateur"}
          </a>
        ) : (
          ""
        )}
      </footer> : <footer></footer>}
    </article>
  );
};

export default Article;
