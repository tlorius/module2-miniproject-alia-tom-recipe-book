import classes from "../styles/Error404.module.css"
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <center className={classes.page404}>
      <h1>404</h1>
      <h3>Page not found</h3>
      <h4>The requested URL was not found on this server</h4>
      <img className={classes.fourZeroFourImage} src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/6df13c16b8e65c1290bec8c0/yyy.jpg" alt="404 image" />
      <div className={classes.buttonContainer}>
        <Link to='/' className={`${classes.primaryBtn} ${classes.btn}`}>HOME</Link>
        <Link to='/about' className={`${classes.secondaryBtn} ${classes.btn}`}>ABOUT US</Link>
      </div>
    </center>
  )
};

export default Error404;
