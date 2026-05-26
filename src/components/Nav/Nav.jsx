import { Link } from "react-router-dom";
import "./Nav.css";
import { useCart } from "../../context/CartContext";
// import styles from "./Nav.module.css";

export const Nav = () => {
  const { getTotalItems } = useCart();

  const totalItems = getTotalItems();

  return (
    <nav>
      {/* <ul className={styles["nav-list"]}> */}
      <ul className="nav-list">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/category/dama"}>Dama</Link>
        </li>
        <li>
          <Link to={"/carrito"}>
            Carrito
            {totalItems > 0 && <span className="incart">{totalItems}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
