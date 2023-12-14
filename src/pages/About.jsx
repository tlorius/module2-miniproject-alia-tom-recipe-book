import classes from "../styles/About.module.css"
const About = () => {
  return (
    <div className={classes.aboutCtn}>
      <h1>About Our Project</h1>
      <h2>Project Description</h2>
      <p>
        Welcome to the Recipe Book React App, where culinary creativity meets the digital world! This app is your go-to destination for a treasure trove of delicious recipes, beautifully presented with mouthwatering images. Whether you are a seasoned chef or a kitchen novice, our Recipe Book is designed to inspire and simplify your cooking journey.
      </p>
      <h2>Team Members</h2>
      <ul className={classes.list}>
        <li className={classes.listItem}>
          <strong>Team Member 1:</strong> Tom Lorius
          <br />
          GitHub: <a className={classes.link} href="https://github.com/tlorius/" target="_blank">[GitHub Profile]</a>
          <br />
          LinkedIn: <a className={classes.link} href="https://www.linkedin.com/in/tom-lorius-7a7557203/" target="_blank">[LinkedIn Profile]</a>
        </li>
        <li className={classes.listItem}>
          <strong>Team Member 2:</strong> Alia Dossani
          <br />
          GitHub: <a className={classes.link} href="https://github.com/AliaDossani/" target="_blank">[GitHub Profile]</a>
          <br />
          LinkedIn: <a className={classes.link} href="https://www.linkedin.com/in/alia-dossani-9a2479185/" target="_blank">[LinkedIn Profile]</a>
        </li>
      </ul>

    </div>
  )
};

export default About;
