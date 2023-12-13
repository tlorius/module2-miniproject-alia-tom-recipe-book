import classes from "../styles/Navbar.module.css";
import recipeBookLogo from "../assets/recipe_book_logo.png";
import gitHubLogo from "../assets/github-mark-white.png";
import menuIcon from "../assets/menu_icon.png";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <img
        className={classes.navbarImage}
        src={recipeBookLogo}
        alt="Recipe Book Logo"
      />
      <h1>Recipe Book</h1>
      <div>
        <a
          className={classes.containerLinks}
          href="https://github.com/aliadossani"
        >
          <img
            className={classes.gitHubImg}
            src={gitHubLogo}
            alt="GitHub Logo"
          />{" "}
          Alia Dossani
        </a>
        <p> </p>
        <a className={classes.containerLinks} href="https://github.com/tlorius">
          <img
            className={classes.gitHubImg}
            src={gitHubLogo}
            alt="GitHub Logo"
          />{" "}
          Tom Lorius
        </a>
      </div>
      <img className={classes.navbarImage} src={menuIcon} alt="Menu Icon" />
    </nav>
  );
};

export default Navbar;
