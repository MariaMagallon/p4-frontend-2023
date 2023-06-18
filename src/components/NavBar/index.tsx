import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";
import styles from "./NavBar.module.css"

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <h2>
        <Link to="/">
          Home
        </Link>
      </h2>
      <SearchBar/>
    </nav>
  );
}

export default NavBar;