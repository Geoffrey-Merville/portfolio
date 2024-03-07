const SectionTitle = ({ sectionTitle, description }) => {
  return (
    <header id="body-header">
      <div className="page-title">
        <div className="right-line"></div>
        <h1>{sectionTitle}</h1>
        <div className="left-line"></div>
      </div>
      {description ? <p>{description}</p> : ""}
    </header>
  );
};

export default SectionTitle;
