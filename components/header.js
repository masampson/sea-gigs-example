import styles from "../styles/components/header.module.css";
import NavBar from "./navBar";

function Header(props) {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.h1Container}>
        <h1 className={styles.headerHero}>
          <a href="" onClick={() => props.getDisplay("gigs")}>
            SEAGIGS
          </a>
        </h1>
        <h2>- EST. 2021 -</h2>
      </div>
      <NavBar
        getDisplay={props.getDisplay}
        filterGigs={props.filterGigs}
      ></NavBar>
    </div>
  );
}

export default Header;
