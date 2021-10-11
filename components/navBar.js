import styles from "../styles/components/navBar.module.css";

function NavBar(props) {
  function showMenu() {
    let nav = document.getElementById("navMenu");
    if (nav.style.display === "none") {
      nav.style.display = "block";
    } else {
      nav.style.display = "none";
    }
  }

  return (
    <div className={styles.navContainer}>
      <ion-icon name={"menu"} onClick={showMenu}>
        Menu
      </ion-icon>
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
