import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>VIRYA</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/Virya/quotes" activeClassName={classes.active}>
              All Thoughts
            </NavLink>
          </li>

          <li>
            <NavLink to="/Virya/new-quote" activeClassName={classes.active}>
              Add a Thought
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
