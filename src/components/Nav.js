import CustomLink from "./RouterLinks/CustomLink";

const Nav = () => {
  return (
    <nav className="nav">
        <ul>
          <CustomLink value="/" />
          <CustomLink value="Parcours" />
          <CustomLink value="Projets" />
          <CustomLink value="CV" />
          <CustomLink value="Me Contacter" />
        </ul>
    </nav>
  );
};

export default Nav;
