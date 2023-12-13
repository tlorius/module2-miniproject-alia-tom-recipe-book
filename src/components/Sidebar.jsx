import { NavLink } from "react-router-dom";
import classes from "../styles/Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={classes.sidebarContainer}>
      <ul>
        <li>
          <NavLink to="/">Home Page</NavLink>
        </li>
        <li>
          <NavLink to="/createrecipe">Create New Recipe</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
