import styles from "../styles/components/navBar.module.css";
import { Menu } from "react-ionicons";

interface NavBarProps {
  getDisplay: (display: string) => void;
}

function NavBar(props: NavBarProps) {
  function showMenu() {
    let nav = document.getElementById("navMenu") as HTMLElement;
    if (nav.style.display === "none") {
      nav.style.display = "block";
    } else {
      nav.style.display = "none";
    }
  }

  return (
    <div className={styles.navContainer}>
      <div onClick={showMenu} role="button" className={styles.mobileNav}>
        <Menu cssClasses={styles.mobileNavIcon} color="#ef7e56"></Menu>
      </div>
      <nav>
        <ul id="navMenu">
          <li onClick={() => props.getDisplay("gigs")}>
            <a href="">GIGS</a>
          </li>
          <li onClick={() => props.getDisplay("about")}>ABOUT</li>
          <li onClick={() => props.getDisplay("submit")}>SUBMIT</li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
