import { Link } from "react-router-dom";

const CustomLink = ({ value }) => {
  const capitalize = (s) => s[0].toUpperCase() + s.slice(1);

  return (
    <li>
      <Link to={value}>{capitalize(value !== "/" ? value : "Accueil")}</Link>
    </li>
  )
}

export default CustomLink