import logo from "../../assets/react.svg";
import { Nav } from "../Nav/Nav";

export const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo react" />
      <Nav />
    </header>
  );
};
