import { useRef, useState } from "react";
import styles from "../styles/components/login.module.css";
import { logOut, signUp, useAuth, logIn } from "../utils/firebase";

export default function Login({ loginToggle }) {
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef(null);
  const user = useAuth();

  // async function handleSignup() {
  //   setIsLoading(true);
  //   try {
  //     await signUp(emailRef.current.value, passwordRef.current.value);
  //   } catch {
  //     alert("Error");
  //   }
  //   setIsLoading(false);
  // }

  // async function handleLogOut() {
  //   setIsLoading(true);
  //   try {
  //     await logOut();
  //   } catch {
  //     alert("Error");
  //   }
  //   setIsLoading(false);
  // }

  async function handleLogIn() {
    setIsLoading(true);
    try {
      await logIn(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error");
    }
    setIsLoading(false);
    loginToggle();
  }
  console.log(user);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.loginCard}>
        <h1>Admin Login</h1>

        <input
          ref={emailRef}
          type="email"
          placeholder="Email"
          className={styles.input}
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className={styles.input}
        />
        {/* <button disabled={isLoading || user !== null} onClick={handleSignup}>
            Sign Up
          </button> */}
        <div className={styles.buttonContainer}>
          <button
            disabled={isLoading || user !== null}
            onClick={handleLogIn}
            className={styles.loginButton}
          >
            Login
          </button>
          <button
            disabled={isLoading}
            onClick={() => loginToggle()}
            className={styles.cancelButton}
          >
            Cancel
          </button>
        </div>
        {/* <button disabled={isLoading || !user} onClick={handleLogOut}>
            Log Out
          </button> */}
      </div>
    </div>
  );
}
