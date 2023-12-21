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
}) => {
  const cleanTitle = DOMPurify.sanitize(articleTitle);
  const cleanEndDate = DOMPurify.sanitize(articleEndDate);
  const cleanDescription = DOMPurify.sanitize(articleDescription);

  return (
    <article id={articleId} className="timeline-content scroll-id">
      <hgroup>
        <h2 dangerouslySetInnerHTML={{__html: cleanTitle}} />
        <p className="location">
          <strong>{articleCompany}</strong>
          {articleStartDate !== "" ? <time dateTime={articleStartDateValue}> | {articleStartDate} - </time> : ""}
          {articleEndDate !== "" ? <time
            dateTime={articleEndDateValue}
            dangerouslySetInnerHTML={{ __html: cleanEndDate }}
          /> : ""}
        </p>
      </hgroup>
      <p dangerouslySetInnerHTML={{ __html: cleanDescription }} />
      <footer></footer>
    </article>
  );
};

export default Article;
