const SectionTitle = ({ title }, { description }) => {
  return (
    <header id="body-header">
      <div className="page-title">
        <div></div>
        <h1>{title}</h1>
        <div></div>
      </div>
      <p>{description}</p>
    </header>
  );
};

export default SectionTitle;
