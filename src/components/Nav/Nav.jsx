import { Link } from "react-router-dom";
import "./Nav.css";
// import styles from "./Nav.module.css";

export const Nav = () => {
  return (
    <nav>
      {/* <ul className={styles["nav-list"]}> */}
      <ul className="nav-list">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/carrito"}>Carrito</Link>
        </li>
      </ul>
    </nav>
  );
};
