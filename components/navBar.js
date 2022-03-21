import styles from "../styles/components/navBar.module.css";
import { Menu } from "react-ionicons";
import { logOut, useAuth } from "../utils/firebase";

function NavBar({ getDisplay, loginToggle, display }) {
  const user = useAuth();

  function showMenu() {
    let nav = document.getElementById("navMenu");
    if (nav.style.display === "none") {
      nav.style.display = "block";
    } else {
      nav.style.display = "none";
    }
  }

  async function handleLogOut() {
    try {
      await logOut();
    } catch {
      alert("Error");
    }
  }

  const logOutButton = (
    <li className={styles.inactive} onClick={handleLogOut}>
      LOG OUT
    </li>
  );

  const logInButton = (
    <li className={styles.inactive} onClick={() => loginToggle()}>
      LOGIN
    </li>
  );

  return (
    <div className={styles.navContainer}>
      <div onClick={showMenu} role="button" className={styles.mobileNav}>
        <Menu cssClasses={styles.mobileNavIcon} color="#ef7e56"></Menu>
      </div>
      <nav>
        <ul id="navMenu">
          <li
            className={display === "gigs" ? styles.active : styles.inactive}
            onClick={() => getDisplay("gigs")}
          >
            GIGS
          </li>
          <li
            className={display === "about" ? styles.active : styles.inactive}
            onClick={() => getDisplay("about")}
          >
            ABOUT
          </li>
          <li
            className={display === "submit" ? styles.active : styles.inactive}
            onClick={() => getDisplay("submit")}
          >
            SUBMIT
          </li>
          {user ? logOutButton : logInButton}
          <li className={styles.donateButton}>
            <form
              action="https://www.paypal.com/donate"
              method="post"
              target="_blank"
            >
              <input
                type="hidden"
                name="hosted_button_id"
                value="7TSF8K8BVMVJQ"
              />
              <input
                type="image"
                src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
                // border="0"
                name="submit"
                title="PayPal - The safer, easier way to pay online!"
                alt="Donate with PayPal button"
              />
              <img
                alt=""
                // border="0"
                src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>
          </li>
        </ul>
        {user && (
          <div className={styles.userBadge}>
            <p>ADMIN MODE</p>
            <p>{user.email}</p>
          </div>
        )}
      </nav>
    </div>
  );
}

export default NavBar;
