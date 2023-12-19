import classes from "../styles/About.module.css"

const teamMembers = [{
  id: 1,
  name: "Alia Dossani",
  githubProfile: "https://github.com/AliaDossani/",
  linkedInProfile: "https://www.linkedin.com/in/alia-dossani-9a2479185/",
  image: "https://i.ibb.co/GTFgCKv/Screenshot-2023-12-14-at-22-03-01.png",
}, {
  id: 2,
  name: "Tom Lorius",
  githubProfile: "https://github.com/tlorius/",
  linkedInProfile: "https://www.linkedin.com/in/tom-lorius-7a7557203/",
  image: "https://i.ibb.co/RpQrckz/IMG-1816.jpg"
}];

const About = () => {
  return (
    <div className={classes.aboutCtn}>
      <div className={classes.contentCtn}>
        <div className={classes.aboutUsImageCtn}>
          <img className={classes.aboutUsImage} src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/6df13c16b8e65c1290bec8c0/yyy.jpg" alt="404 image" />
        </div>
        <div className={classes.aboutUsContentCtn}>
          <h1>About Our Project</h1>
          <p>
            Welcome to the Recipe Book React App, where culinary creativity meets the digital world! This app is your go-to destination for a treasure trove of delicious recipes, beautifully presented with mouthwatering images. Whether you are a seasoned chef or a kitchen novice, our Recipe Book is designed to inspire and simplify your cooking journey.
          </p>
        </div>
      </div>
      <h2>Team Members</h2>
      <ul className={classes.list}>
        {
          teamMembers.map((teamMember) => {
            return (
              <li key={teamMember.id} className={classes.listItem}>
                <div className={classes.imageContainer}>
                  <img src={teamMember.image} className={classes.image} />
                </div>
                <h4 className={classes.name}><b>{teamMember.name}</b></h4>
                <div className={classes.linkContainer}>
                  <a className={classes.link} href={teamMember.githubProfile} target="_blank" rel="noreferrer">
                    <i
                      className={`bi bi-github`}
                    ></i>
                  </a>
                  <br />
                  <a className={classes.link} href={teamMember.linkedInProfile} target="_blank" rel="noreferrer">
                    <i
                      className={`bi bi-linkedin`}>
                    </i>
                  </a>
                </div>
              </li>
            )
          })
        }

      </ul>

    </div >
  )
};

export default About;
