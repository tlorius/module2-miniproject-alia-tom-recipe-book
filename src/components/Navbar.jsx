import classes from "../styles/Navbar.module.css";
import recipeBookLogo from "../assets/recipe_book_logo.png";
import gitHubLogo from "../assets/github-mark-white.png";
import menuIcon from "../assets/menu_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <Link className={classes.cntLink} to="/">
        <img
          className={classes.navbarImage}
          src={recipeBookLogo}
          alt="Recipe Book Logo"
        />
        <h1 className={classes.h1text}>Recipe Book</h1>
      </Link>
    </nav>
  );
};

export default Navbar;
