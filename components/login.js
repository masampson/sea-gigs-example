import { useRef, useState } from "react";
import styles from "../styles/components/login.module.css";
import { useAuth, logIn } from "../utils/firebase";

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

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      await logIn(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error");
    }
    setIsLoading(false);
    loginToggle();
  }

  return (
    <div className={styles.cardContainer}>
      <div className={styles.loginCard}>
        <h1>Admin Login</h1>
        <form
          className={styles.form}
          id="loginForm"
          onSubmit={handleSubmit}
          action=""
          method=""
        >
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
          <div className={styles.buttonContainer}>
            <button
              disabled={isLoading}
              onClick={() => loginToggle()}
              className={styles.cancelButton}
              type="button"
            >
              Cancel
            </button>
            <button
              disabled={isLoading || user !== null}
              className={styles.loginButton}
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
