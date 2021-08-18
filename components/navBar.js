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

  function selectMonth(e) {
    let month = e.target.innerHTML;
    props.filterGigs(month);
  }

  return (
    <div className={styles.navContainer}>
      <ion-icon name={"menu"} onClick={showMenu}>
        Menu
      </ion-icon>
      <nav>
        <ul id="navMenu">
          <li onClick={() => props.getDisplay("gigs")}>GIGS</li>
          <li onClick={() => props.getDisplay("about")}>ABOUT</li>
          <li onClick={() => props.getDisplay("submit")}>SUBMIT</li>
          <li className={styles.dropdownLink}>
            <a href="#">MONTH +</a>
            <div className={styles.dropdownContent} id="dropdownContent">
              <a href="#" onClick={selectMonth}>
                JANUARY
              </a>
              <a href="#" onClick={selectMonth}>
                FEBRUARY
              </a>
              <a href="#" onClick={selectMonth}>
                MARCH
              </a>
              <a href="#" onClick={selectMonth}>
                APRIL
              </a>
              <a href="#" onClick={selectMonth}>
                MAY
              </a>
              <a href="#" onClick={selectMonth}>
                JUNE
              </a>
              <a href="#" onClick={selectMonth}>
                JULY
              </a>
              <a href="#" onClick={selectMonth}>
                AUGUST
              </a>
              <a href="#" onClick={selectMonth}>
                SEPTEMBER
              </a>
              <a href="#" onClick={selectMonth}>
                OCTOBER
              </a>
              <a href="#" onClick={selectMonth}>
                NOVEMBER
              </a>
              <a href="#" onClick={selectMonth}>
                DECEMBER
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
