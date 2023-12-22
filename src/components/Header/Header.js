import Nav from "./Nav";

const Header = ({title, subtitle}) => {
  return <header className="header">
    <Nav />
    <div id="vertical-separator"></div>
    <div id="portfolio-owner">
      <h1 id="portfolio-name">{title}</h1>
      <h2 id="portfolio-title">{subtitle}</h2>
    </div>
  </header>;
};

export default Header;
