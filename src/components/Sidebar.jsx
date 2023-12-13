import classes from "../styles/Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={classes.sidebarContainer}>
      <ul>
        <li>
          <a href="#home">Home Page</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
