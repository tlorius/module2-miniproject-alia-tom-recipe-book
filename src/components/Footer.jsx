import classes from "../styles/Footer.module.css";
import gitHubLogo from "../assets/github-mark-white.png";

const Footer = () => {
  return (
    <footer>
      <img className={classes.footerImg} src={gitHubLogo} alt="GitHub Logo" />
      <a
        className={classes.footerLink}
        href="https://github.com/tlorius/module2-miniproject-alia-tom-recipe-book"
      >
        GitHub Repository
      </a>
    </footer>
  );
};

export default Footer;
